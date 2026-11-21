# Travel Hub — sito web (Digitam)

Sito vetrina bilingue EN/IT per Travel-Hub Sagl. Statico, senza dipendenze npm: un piccolo generatore Node scrive le pagine in `docs/`, che GitHub Pages pubblica così com'è.

## Struttura

- `src/data.mjs`: dati aziendali (sedi, telefoni, email), slug delle pagine, ID delle foto Unsplash, flag `DEMO` (noindex)
- `src/lib.mjs`: layout comune (header, menu, footer, banda contatti, SEO, JSON-LD)
- `src/pages/*.mjs`: le 4 pagine, con i testi EN e IT affiancati (`t('English', 'Italiano')`)
- `assets/`: CSS, JS (GSAP + ScrollTrigger + Lenis da CDN), favicon
- `docs/`: output generato (non modificarlo a mano)

## Comandi

```bash
node src/build.mjs          # rigenera docs/
python3 -m http.server 4317 --directory docs   # anteprima su http://localhost:4317
```

## URL

| Pagina | EN | IT |
| --- | --- | --- |
| Home | `/` | `/it/` |
| USA & Canada | `/usa-canada/` | `/it/usa-canada/` |
| Global Reach | `/global-reach/` | `/it/global-reach/` |
| Contatti | `/contact/` | `/it/contatti/` |

La home EN reindirizza a `/it/` i browser in italiano alla prima visita; la scelta manuale della lingua viene ricordata.

## Prima della messa online

- Form contatti: impostare `data-endpoint` in `src/pages/contact.mjs` (es. Formspree o un endpoint Digitam). Finché è vuoto, il form mostra la conferma ma non invia nulla.
- Impostare `DEMO = false` in `src/data.mjs` per togliere il `noindex` e attivare `robots.txt`/sitemap.
- Sostituire il logo ridisegnato con il file vettoriale del cliente.
- Foto: hot-link da Unsplash (licenza Unsplash, uso commerciale consentito). Per la produzione si possono scaricare e servire in locale.
