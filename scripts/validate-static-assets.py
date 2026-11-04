"""Validate imported SVG/XML and generated JSON without rewriting their bytes."""

import argparse
import json
from pathlib import Path
import sys
import xml.etree.ElementTree as ET


ASSET_GROUPS = (
    ("public/bandeiras", "*.svg"),
    ("src/data/obgd/assets", "*.json"),
    ("src/data/obgd/assets-v4", "*.json"),
)


def reject_constant(value):
    raise ValueError(f"Non-standard JSON constant: {value}")


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise ValueError(f"Duplicate JSON key: {key}")
        result[key] = value
    return result


def validate(root):
    errors = []
    count = 0
    for folder, pattern in ASSET_GROUPS:
        paths = sorted((root / folder).rglob(pattern))
        if not paths:
            errors.append(f"{folder}: no matching assets found")
        for path in paths:
            count += 1
            try:
                if path.suffix == ".svg":
                    document = ET.parse(path)
                    if document.getroot().tag != "{http://www.w3.org/2000/svg}svg":
                        raise ValueError("Expected SVG root with the SVG namespace")
                else:
                    json.loads(
                        path.read_text(encoding="utf-8"),
                        parse_constant=reject_constant,
                        object_pairs_hook=unique_object,
                    )
            except (OSError, UnicodeError, ValueError, ET.ParseError) as error:
                errors.append(f"{path.relative_to(root)}: {error}")
    return count, errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    count, errors = validate(args.root.resolve())
    for error in errors:
        print(error, file=sys.stderr)
    if errors:
        return 1
    print(f"Validated {count} SVG/JSON assets without modifying them.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
