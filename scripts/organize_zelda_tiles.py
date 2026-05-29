#!/usr/bin/env python3
"""Organize flat Zelda map tiles into z/x/y.png directories."""

from __future__ import annotations

import argparse
import re
import shutil
from pathlib import Path


TILE_NAME_RE = re.compile(r"^(?P<z>\d+)_(?P<x>\d+)_(?P<y>\d+)\.png$")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Move z_x_y.png tiles into z/x/y.png directories.",
    )
    parser.add_argument(
        "tile_dir",
        nargs="?",
        default="public/maps/zelda-tiles",
        help="Directory containing flat z_x_y.png tiles.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print what would move without changing files.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    tile_dir = Path(args.tile_dir)

    if not tile_dir.is_dir():
        raise SystemExit(f"Tile directory not found: {tile_dir}")

    moved = 0
    skipped = 0

    for source in sorted(tile_dir.iterdir()):
        if not source.is_file():
            skipped += 1
            continue

        match = TILE_NAME_RE.match(source.name)
        if not match:
            skipped += 1
            continue

        target = tile_dir / match.group("z") / match.group("x") / f"{match.group('y')}.png"
        if target.exists():
            raise SystemExit(f"Refusing to overwrite existing tile: {target}")

        print(f"{source} -> {target}")
        if not args.dry_run:
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(source), str(target))
        moved += 1

    action = "Would move" if args.dry_run else "Moved"
    print(f"{action} {moved} tile(s). Skipped {skipped} existing directory or non-matching file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
