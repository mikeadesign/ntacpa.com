# NTA, Inc. site

See `README.md`, `DESIGN.md` and `PRODUCT.md` before changing anything.

## Language and spelling

- All copy is American English. This is a US business site (an Illinois CPA practice).
- Never use British spellings: no -ise/-isation (recognize, organize, anonymization), no -our (color, behavior), no -re (center), no licence, cancelled, judgement, catalogue, programme, whilst, amongst.
- Check new or edited copy for US spelling before finishing any task. `npm run check:spelling` scans `src/` against a deny list and runs automatically before `npm run build`. Extend the list in `scripts/check-spelling.mjs` when a new British spelling turns up.
