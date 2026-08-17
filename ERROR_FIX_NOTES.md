Build/runtime stability fix

- Fixed the empty src/data/about/mission.ts module that was re-exported by src/data/about/index.ts.
- Removed the duplicate ./values barrel export.
- No application content or design was intentionally removed.
- Existing routing, services, programs, team information, images and WhatsApp integration are preserved.
