# Certificate images

Drop your scanned certificate images here using these exact filenames so they
appear automatically in the Certificates section:

| Filename                     | Certificate                                              |
|------------------------------|----------------------------------------------------------|
| `samsung-ai.jpg`             | Samsung Innovation Campus & JHUB Africa — AI/ML          |
| `kubernetes.svg`             | Andela & The Linux Foundation — Kubernetes & Cloud Native|
| `plp-software-dev.jpg`       | Power Learn Project Academy — Software Development       |
| `jkuat-degree.jpg`           | JKUAT — B.Sc. Telecommunication & Information Engineering|

Any filename you prefer works too — just update the `src` (and the
`.cert-media-hint` text) on the matching `<article class="cert-card">` in
`index.html`.

**Recommended size:** roughly 1200 × 800 px, landscape. Cards render the image
in a 200 px-tall (170 px on mobile) box with `object-fit: cover`, so keep the
certificate centred with a little margin around it.

If an image is missing, the card shows a dashed placeholder with the expected
path instead — the layout never breaks.
