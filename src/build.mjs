// Static site generator: node src/build.mjs  ->  writes the site into /docs (served by GitHub Pages)
import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGES, SITE_URL, COMPANY, DEMO } from './data.mjs';
import { makeCtx, layout } from './lib.mjs';
import home from './pages/home.mjs';
import usa from './pages/usa.mjs';
import global from './pages/global.mjs';
import contact from './pages/contact.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'docs');
const RENDER = { home, usa, global, contact };

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

let count = 0;
for (const lang of ['en', 'it']) {
  for (const key of Object.keys(PAGES)) {
    const ctx = makeCtx(lang, key);
    const html = layout(ctx, RENDER[key](ctx));
    const file = join(OUT, PAGES[key][lang], 'index.html');
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    count++;
  }
}

// static assets
cpSync(join(ROOT, 'assets'), join(OUT, 'assets'), { recursive: true });

// 404 (GitHub Pages) — bilingual, relative links resolved from the site root
writeFileSync(
  join(OUT, '404.html'),
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 — Travel Hub</title>
<style>body{margin:0;min-height:100svh;display:grid;place-items:center;background:#0f1720;color:#e8ecef;font:16px/1.5 system-ui,sans-serif;text-align:center;padding:24px}b{display:block;font-size:clamp(64px,18vw,180px);line-height:.9;color:#ffc629;letter-spacing:.04em;font-family:ui-monospace,monospace}a{color:#ffc629}</style></head>
<body><div><b>404</b><p>Flight not found · Volo non trovato</p><p><a href="/" id="home">Travel Hub — Home</a></p></div>
<script>if(/github\\.io$/.test(location.hostname)){document.getElementById('home').href='/'+location.pathname.split('/')[1]+'/'}</script></body></html>`
);

// sitemap with hreflang alternates
const urls = Object.keys(PAGES)
  .flatMap((key) =>
    ['en', 'it'].map(
      (lang) => `  <url>
    <loc>${SITE_URL}/${PAGES[key][lang]}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/${PAGES[key].en}"/>
    <xhtml:link rel="alternate" hreflang="it" href="${SITE_URL}/${PAGES[key].it}"/>
  </url>`
    )
  )
  .join('\n');
writeFileSync(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
);
writeFileSync(join(OUT, 'robots.txt'), DEMO ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// llms.txt — plain summary for AI assistants
const [mia, lug, ita] = COMPANY.offices;
writeFileSync(
  join(OUT, 'llms.txt'),
  `# Travel Hub (${COMPANY.legal})

> B2B group travel company. Travel Hub designs and operates group trips for travel agencies, tour operators, associations and companies. Focus: USA and Canada; also the Nordics (Norway, Iceland, Finnish Lapland, Sweden, Denmark) and other destinations on request. It does not sell to the general public.

- Services: small group tours with tour leader, accommodation, transfers and transport, local guides and tour leaders, on-site assistance, incentives and business travel, self-drive and private tours.
- Offices: ${mia.lines.join(', ')} (head office, ${mia.phone}); ${lug.lines.map((l) => (typeof l === 'object' ? l.en : l)).join(', ')} (branch office, ${lug.phone}); Italy booking office (${ita.phone}).
- Contact: ${COMPANY.email}
- Since: ${COMPANY.since}. IATA ${COMPANY.iata}. Languages: English, Italian.

## Pages
- [Home](${SITE_URL}/): who we are, services, destinations
- [USA & Canada](${SITE_URL}/usa-canada/): small group tours, on-site assistance, sample itineraries (Great Parks of the West, 10 days; New England, 13 days), Canada
- [Global Reach](${SITE_URL}/global-reach/): the Nordics and destinations on request, services
- [Contact](${SITE_URL}/contact/): request form and offices
- Italian version: ${SITE_URL}/it/
`
);

writeFileSync(join(OUT, '.nojekyll'), '');
console.log(`Built ${count} pages into docs/`);
