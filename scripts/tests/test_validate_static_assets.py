import importlib.util
from pathlib import Path
import tempfile
import subprocess
import sys
import unittest


SPEC = importlib.util.spec_from_file_location(
    "validate_static_assets", Path(__file__).resolve().parents[1] / "validate-static-assets.py"
)
VALIDATOR = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(VALIDATOR)


class AssetValidationTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        self.svg = self.root / "public/bandeiras/sample.svg"
        self.json = self.root / "src/data/obgd/assets/sample.json"
        self.other_json = self.root / "src/data/obgd/assets-v4/sample.json"
        for path in (self.svg, self.json, self.other_json):
            path.parent.mkdir(parents=True, exist_ok=True)
        self.svg.write_text('<svg xmlns="http://www.w3.org/2000/svg"><style><![CDATA[.a {fill:red}]]></style></svg>')
        self.json.write_text('{"value": 1}')
        self.other_json.write_text('[]')

    def test_valid_assets_and_cdata_are_not_modified(self):
        before = {path: path.read_bytes() for path in (self.svg, self.json, self.other_json)}
        self.assertEqual(VALIDATOR.validate(self.root), (3, []))
        self.assertEqual(before, {path: path.read_bytes() for path in before})

    def test_malformed_xml_is_rejected(self):
        self.svg.write_text('<svg>')
        self.assertTrue(VALIDATOR.validate(self.root)[1])

    def test_wrong_xml_root_is_rejected(self):
        self.svg.write_text('<html/>')
        self.assertTrue(VALIDATOR.validate(self.root)[1])

    def test_invalid_json_is_rejected(self):
        for payload in ('{"value":}', '{"value":NaN}', '{"value":1,"value":2}', '{"nested":{"a":1,"a":2}}'):
            with self.subTest(payload=payload):
                self.json.write_text(payload)
                self.assertTrue(VALIDATOR.validate(self.root)[1])

    def test_nested_assets_are_discovered(self):
        nested = self.root / "public/bandeiras/municipal/nested.svg"
        nested.parent.mkdir()
        nested.write_bytes(self.svg.read_bytes())
        self.assertEqual(VALIDATOR.validate(self.root), (4, []))

    def test_svg_namespace_is_required(self):
        for payload in ('<svg/>', '<svg xmlns="https://example.invalid"/>'):
            with self.subTest(payload=payload):
                self.svg.write_text(payload)
                self.assertTrue(VALIDATOR.validate(self.root)[1])

    def test_cli_fails_for_invalid_asset(self):
        self.json.write_text('{broken')
        result = subprocess.run(
            [sys.executable, '-B', str(SPEC.origin), '--root', str(self.root)],
            capture_output=True,
            text=True,
            check=False,
        )
        self.assertEqual(result.returncode, 1)
        self.assertIn('sample.json', result.stderr)

    def test_missing_asset_group_is_rejected(self):
        self.other_json.unlink()
        self.assertTrue(VALIDATOR.validate(self.root)[1])


if __name__ == "__main__":
    unittest.main()
