# Anti-Slop Audit — Portfolio (v1 → v2)

Metodologi: Slop Diagnostic dari skill `claude-design` (10 tells, skor 0–10; lebih rendah lebih baik).
Alur: diagnose first, treat second — tells komposisional diperbaiki dengan re-compose, bukan recolor.

## v1 (sebelum) — skor 3/10

| # | Tell | Status | Bukti |
|---|------|--------|-------|
| 1 | Tech gradient | Bersih | 0 kemunculan `gradient` |
| 2 | Generic tech hue | **Menyala** | Accent `#00d9ff` + `#0066ff` (cyan-neon + blue) di atas `#0a0a0a` — kombinasi default "AI dark portfolio", tanpa rationale |
| 3 | Feature-tile grid | **Menyala** | `Skills.tsx`: 6 tile equal-weight (grid 3 kolom) berisi badge cloud |
| 4 | Accent rail | Bersih | — |
| 5 | Unearned blur | **Menyala (terparah)** | `.glass` (backdrop-blur) dipakai 46× (Card, Badge, Header) di atas background flat solid — tidak ada kedalaman di belakang kaca |
| 6 | Monument stat | Bersih | — |
| 7 | Icon topper | Bersih | — |
| 8 | Center stack | Bersih | Hero asimetris dua kolom |
| 9 | Default type | Menyala (lemah) | Geist Sans/Mono = bawaan create-next-app, tanpa treatment khas |
| 10 | Wrong surface | Bersih | Portfolio = Decide/Learn, dikomposisikan benar |

Temuan non-slop: CTA pileup di Contact (form + 4 tombol), ritme `py-24` seragam mekanis, tricolon "Always learning, always shipping", filler footer.

## v2 (sesudah) — skor 0/10

Perbaikan per register diagnosis:

1. **Buang dekorasi (tell 5)** — `.glass` dihapus total. Sistem permukaan solid: `--panel #141419` / `--panel-2 #1b1b21` + border 1px `--border`. Satu-satunya blur tersisa: Header fixed (earned depth — konten benar-benar scroll di belakangnya).
2. **Re-compose (tell 3)** — Skills dari 6 tile jadi **ledger**: satu baris per kategori, label mono uppercase di kiri (kolom 200px), badge mengalir di kanan, dipisah border horizontal.
3. **Recolor (tell 2)** — dark dipertahankan; **satu accent** `#62d9e6` (cyan yang diangkat/diredam) hanya untuk link-hover, status, dan border kategori. Tombol primary jadi netral terang (fill foreground) — warna paling keras di halaman bukan tombol.
4. **Re-typeset (tell 9)** — Geist dipertahankan tapi diberi treatment: mono eyebrow (`AKMALUDIEN RAMADHAN`, tracking 0.18em) di Hero, label kategori mono uppercase tracking 0.12em, `text-balance` di h1.
5. **UX**: Contact — 4 tombol sosial → satu baris teks; copy hero diperbaiki (tricolon dibuang, statement produk konkret); ritme section py-20/24/28 bertingkat; filler footer dihapus; foto hero diberi border sesuai sistem permukaan.

A11y dipertahankan penuh (aria-labelledby, skip-link, focus-visible, reduced-motion, label form).

## Verifikasi

- `next build` (Next 16.2.11 + Turbopack) — type-check & produksi build: PASS (lihat commit CI/log).
- Grep bebas referensi token lama (`accent-blue`, `bg-card`, `.glass`).

## Catatan deployment (di luar cakupan desain)

`lib/constants.ts` menunjuk `https://akmaludien.dev` yang saat audit **belum resolve** (NXDOMAIN) — domain/DNS perlu diaktifkan sebelum metadata OG valid dipakai.
