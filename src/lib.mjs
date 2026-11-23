import { COMPANY, PAGES, NAV, SITE_URL, DEMO } from './data.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const pick = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] : v);

/* ---------- icons ---------- */
export const ICON = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  arrowUR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6"/></svg>',
  plane:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2.5 19h19v2h-19zM22.07 9.64c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
};

// three triangles from the Travel-Hub logo; extra room in the viewBox so the hover nudge never clips
export const marks = (cls = 'logo__marks') =>
  `<svg class="${cls}" viewBox="0 0 46 14" aria-hidden="true"><path d="M1.5 1.5 11 7l-9.5 5.5z"/><path d="M14.5 1.5 24 7l-9.5 5.5z"/><path d="M27.5 1.5 37 7l-9.5 5.5z"/></svg>`;

/* ---------- images (Unsplash CDN, responsive) ---------- */
export function img(id, o = {}) {
  const { w = 1600, ratio = 2 / 3, alt = '', sizes = '100vw', cls = '', eager = false, crop = '', defer = false } = o;
  const widths = [480, 800, 1200, 1600, 2000, 2600].filter((x) => x < w);
  widths.push(w);
  const u = (x) =>
    `https://images.unsplash.com/photo-${id}?auto=format&amp;fit=crop&amp;w=${x}&amp;h=${Math.round(x * ratio)}&amp;q=72${crop ? `&amp;crop=${crop}` : ''}`;
  const src = u(Math.min(w, 1200));
  const set = widths.map((x) => `${u(x)} ${x}w`).join(', ');
  // defer: the script sets src/srcset when the image is actually needed (hero slideshow)
  const sources = defer ? `data-src="${src}" data-srcset="${set}"` : `src="${src}" srcset="${set}"`;
  return `<img ${sources} sizes="${sizes}" width="${w}" height="${Math.round(w * ratio)}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : defer ? '' : ' loading="lazy"'} decoding="async"${cls ? ` class="${cls}"` : ''}>`;
}
export const placeholder = (id, ratio) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=64&h=${Math.round(64 * ratio)}&q=40&blur=24`;
export const imgUrl = (id, w = 900, ratio = 0.75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * ratio)}&q=70`;

/* inner-page hero: a gate sign above a photo "window" */
export function pageHero(ctx, o) {
  const { t, url } = ctx;
  const { gate, kicker, title, sub, image, alt, jump = [], short = false, side = '' } = o;
  const [mia, lug] = COMPANY.offices;
  const ratio = short ? 0.38 : 0.5;
  return `
<section class="hp${short ? ' hp--short' : ''}" data-hero data-theme="night">
  <div class="wrap">
    <div class="hx__top label" data-hero-rest>
      <span><span class="tag">${t('Gate', 'Gate')} ${gate}</span>${kicker}</span>
      <span class="hx__clocks">${clock(ctx, mia)}${clock(ctx, lug)}</span>
    </div>
    <h1 class="hp__title"><span class="hp__gate" aria-hidden="true"><span>${gate}</span></span><span class="hp__t">${lines(title)}</span></h1>
    <div class="hp__grid">
      <figure class="hp__win" data-hero-media style="background-image:url('${placeholder(image, ratio)}')">
        ${img(image, { w: 2000, ratio, eager: true, alt, sizes: '(max-width: 900px) 100vw, 66vw' })}
      </figure>
      <div class="hp__side" data-hero-rest>
        ${sub ? `<p class="hp__sub">${sub}</p>` : ''}
        ${side}
        ${
          jump.length
            ? `<nav class="hp__jump" aria-label="${t('On this page', 'In questa pagina')}">${jump
                .map(([href, label]) => `<a href="${href}"><span>${label}</span>${ICON.arrowDown}</a>`)
                .join('')}</nav>`
            : ''
        }
      </div>
    </div>
  </div>
</section>`;
}

/* ---------- context ---------- */
export function makeCtx(lang, key) {
  const slug = PAGES[key][lang];
  const depth = slug.split('/').filter(Boolean).length;
  const root = depth ? '../'.repeat(depth) : './';
  const t = (en, it) => (lang === 'en' ? en : it);
  const url = (k, l = lang) => root + PAGES[k][l];
  const abs = (k, l = lang) => SITE_URL + '/' + PAGES[k][l];
  return { lang, key, slug, root, t, url, abs, pick: (v) => pick(v, lang) };
}

/* ---------- small components ---------- */
export const btn = (href, label, variant = 'sign', extra = '') =>
  `<a class="btn btn--${variant}" href="${href}"${extra}><span>${label}</span><i class="btn__ic">${ICON.arrow}</i></a>`;

export const telHref = (p) => 'tel:' + p.replace(/[^+\d]/g, '');

export function clock(ctx, office, cls = '') {
  return `<span class="clock ${cls}" data-clock="${office.tz}"><b>${office.code}</b> <span class="clock__t">--:--</span></span>`;
}

/* split a heading into masked lines for the reveal animation */
export const lines = (arr) => arr.map((l) => `<span class="ln"><span>${l}</span></span>`).join('');

export function ctaBand(ctx, o = {}) {
  const { t, url } = ctx;
  const [mia, lug, ita] = COMPANY.offices;
  const title = o.title || t('Got a group<br>in mind?', 'Avete un gruppo<br>in mente?');
  const text =
    o.text ||
    t(
      'Tell us where, when and how many. We’ll come back with questions or a first proposal.',
      'Diteci dove, quando e in quanti. Vi risponderemo con qualche domanda o con una prima proposta.'
    );
  return `
<section class="cta-band" data-theme="sign">
  <div class="wrap cta-band__grid">
    <div class="cta-band__l">
      <p class="label">${t('Request a proposal', 'Richiedi una proposta')}</p>
      <h2 class="d2" data-split>${title}</h2>
    </div>
    <div class="cta-band__r" data-r>
      <p class="lead">${text}</p>
      <a class="cta-band__mail" href="mailto:${COMPANY.email}">${COMPANY.email}</a>
      <ul class="cta-band__tels">
        <li><span class="label">CH</span><a href="${telHref(lug.phone)}">${lug.phone}</a></li>
        <li><span class="label">USA</span><a href="${telHref(mia.phone)}">${mia.phone}</a></li>
        <li><span class="label">IT</span><a href="${telHref(ita.phone)}">${ita.phone}</a></li>
      </ul>
      ${ctx.key === 'contact' ? '' : btn(url('contact') + (o.query || ''), t('Open the request form', 'Apri il modulo di richiesta'), 'ink')}
    </div>
  </div>
</section>`;
}

/* ---------- header / menu / footer ---------- */
function header(ctx) {
  const { t, url, lang, key } = ctx;
  const links = NAV.filter((n) => n.key !== 'home')
    .map((n) => `<a href="${url(n.key)}"${n.key === key ? ' aria-current="page"' : ''}>${pick(n.label, lang)}</a>`)
    .join('');
  return `
<header class="hdr" data-hdr>
  <a class="logo" href="${url('home')}" aria-label="Travel Hub — Home">
    <span class="logo__word">Travel-Hub</span>${marks()}
  </a>
  <nav class="hdr__nav" aria-label="${t('Main', 'Principale')}">${links}</nav>
  <div class="hdr__right">
    <div class="lang" role="group" aria-label="${t('Language', 'Lingua')}">
      <a href="${url(key, 'en')}" hreflang="en" lang="en" data-lang="en"${lang === 'en' ? ' class="is-on" aria-current="true"' : ''}>EN</a>
      <span aria-hidden="true">/</span>
      <a href="${url(key, 'it')}" hreflang="it" lang="it" data-lang="it"${lang === 'it' ? ' class="is-on" aria-current="true"' : ''}>IT</a>
    </div>
    ${key === 'contact' ? '' : `<a class="hdr__cta" href="${url('contact')}"><span>${t('Request a proposal', 'Richiedi una proposta')}</span>${ICON.arrow}</a>`}
    <button class="burger" type="button" aria-expanded="false" aria-controls="menu" aria-label="${t('Open menu', 'Apri il menu')}" data-label-close="${t('Close menu', 'Chiudi il menu')}"><span></span><span></span></button>
  </div>
  <span class="hdr__progress" aria-hidden="true"></span>
</header>`;
}

function menu(ctx) {
  const { t, url, lang, key } = ctx;
  const [mia, lug] = COMPANY.offices;
  return `
<div class="menu" id="menu" aria-hidden="true">
  <nav class="menu__links" aria-label="${t('Menu', 'Menu')}">
    ${NAV.map(
      (n) =>
        `<a href="${url(n.key)}"${n.key === key ? ' aria-current="page"' : ''}><span class="menu__gate">${t('Gate', 'Gate')} ${n.gate}</span><span class="menu__t">${pick(n.label, lang)}</span>${ICON.arrow}</a>`
    ).join('')}
  </nav>
  <div class="menu__foot">
    <a href="mailto:${COMPANY.email}" class="menu__mail">${COMPANY.email}</a>
    <div class="menu__clocks">${clock(ctx, mia)}${clock(ctx, lug)}</div>
  </div>
</div>`;
}

function footer(ctx) {
  const { t, url, lang, pick: p } = ctx;
  const offices = COMPANY.offices
    .map(
      (o) => `
      <div class="ftr__office">
        <p class="label">${p(o.role)} ${o.key === 'ita' ? '' : clock(ctx, o, 'clock--sm')}</p>
        <p class="ftr__city">${p(o.city)}</p>
        <p>${o.lines.map((l) => p(l)).join('<br>')}${o.lines.length ? '<br>' : ''}<a href="${telHref(o.phone)}">${o.phone}</a>${o.phone2 ? `<br><a href="${telHref(o.phone2)}">${o.phone2}</a>` : ''}</p>
      </div>`
    )
    .join('');
  return `
<footer class="ftr" data-theme="night">
  <div class="wrap">
    <div class="ftr__top">
      <div class="ftr__brand">
        <a class="logo logo--xl" href="${url('home')}" aria-label="Travel Hub — Home"><span class="logo__word">Travel-Hub</span>${marks()}</a>
        <p class="ftr__tag">${t('Group travel for the travel trade. Since 2016.', 'Viaggi di gruppo per i professionisti del turismo. Dal 2016.')}</p>
        <a class="ftr__mail" href="mailto:${COMPANY.email}">${COMPANY.email}</a>
      </div>
      <nav class="ftr__nav" aria-label="${t('Footer', 'Piè di pagina')}">
        <p class="label">${t('Pages', 'Pagine')}</p>
        ${NAV.map((n) => `<a href="${url(n.key)}">${pick(n.label, lang)}</a>`).join('')}
        <a href="${COMPANY.instagram}" target="_blank" rel="noopener" class="ftr__ig">${ICON.ig}Instagram</a>
      </nav>
    </div>
    <div class="ftr__offices">${offices}</div>
    <div class="ftr__legal">
      <span>© ${COMPANY.since}–${new Date().getFullYear()} ${COMPANY.legal}</span>
      <span>${t('UID', 'IDI')} ${COMPANY.uid}</span>
      <span>IATA ${COMPANY.iata}</span>
      <span class="ftr__lang"><a href="${url(ctx.key, 'en')}" data-lang="en">English</a> · <a href="${url(ctx.key, 'it')}" data-lang="it">Italiano</a></span>
      <span class="ftr__credit">${t('Website by', 'Sito di')} <a href="https://digitam.ch" target="_blank" rel="noopener">Digitam</a></span>
    </div>
  </div>
</footer>`;
}

/* ---------- full page ---------- */
export function layout(ctx, page) {
  const { lang, key, root, t, abs } = ctx;
  const { title, description, body, jsonld = [], ogImage } = page;
  const alt = lang === 'en' ? 'it' : 'en';
  const fonts =
    'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..900;1,62..125,300..900&family=IBM+Plex+Mono:wght@400;500&display=swap';
  const org = {
    '@type': 'TravelAgency',
    '@id': SITE_URL + '/#org',
    name: COMPANY.brand,
    legalName: COMPANY.legal,
    url: SITE_URL + '/',
    email: COMPANY.email,
    telephone: COMPANY.offices[0].phone,
    foundingDate: String(COMPANY.since),
    knowsLanguage: ['en', 'it'],
    areaServed: ['US', 'CA', 'NO', 'IS', 'FI', 'SE', 'DK'],
    sameAs: [COMPANY.instagram],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1975 NE 24th Ct',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      postalCode: '33180',
      addressCountry: 'US',
    },
    department: {
      '@type': 'TravelAgency',
      name: 'Travel Hub — Switzerland',
      telephone: COMPANY.offices[1].phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Salita Cuccarello 4b',
        addressLocality: 'Bioggio',
        postalCode: '6934',
        addressCountry: 'CH',
      },
    },
  };
  const ld = { '@context': 'https://schema.org', '@graph': [org, ...jsonld] };
  const redirect =
    key === 'home' && lang === 'en'
      ? `try{var p=localStorage.getItem('th-lang');if(!p&&/^it\\b/i.test(navigator.language||'')){location.replace('it/')}}catch(e){}`
      : '';
  return `<!doctype html>
<html lang="${lang}" data-page="${key}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${DEMO ? '<meta name="robots" content="noindex, nofollow">\n' : ''}<link rel="canonical" href="${abs(key)}">
<link rel="alternate" hreflang="en" href="${abs(key, 'en')}">
<link rel="alternate" hreflang="it" href="${abs(key, 'it')}">
<link rel="alternate" hreflang="x-default" href="${abs(key, 'en')}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Travel Hub">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${abs(key)}">
<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'it_IT'}">
<meta property="og:locale:alternate" content="${alt === 'en' ? 'en_US' : 'it_IT'}">
${ogImage ? `<meta property="og:image" content="${ogImage}">\n<meta name="twitter:card" content="summary_large_image">` : ''}
<meta name="theme-color" content="#0f1720">
<link rel="icon" href="${root}assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com" crossorigin>
<link rel="stylesheet" href="${fonts}">
<link rel="stylesheet" href="${root}assets/css/style.css">
<script>${redirect}(function(d){d.classList.add('js');try{if(!sessionStorage.getItem('th-intro'))d.classList.add('intro');if(sessionStorage.getItem('th-nav'))d.classList.add('from-nav')}catch(e){}setTimeout(function(){d.classList.add('reveal-all')},4000)})(document.documentElement)</script>
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<a class="skip" href="#main">${t('Skip to content', 'Vai al contenuto')}</a>
<div class="intro-screen" aria-hidden="true">
  <div class="intro-screen__in">
    <span class="flap flap--intro" data-text="TRAVEL HUB">TRAVEL HUB</span>
    <span class="label intro-screen__sub">MIA <i>⇄</i> LUG</span>
  </div>
</div>
<div class="curtain" aria-hidden="true"><span class="curtain__sign"><i>${ICON.arrow}</i><b></b></span></div>
${header(ctx)}
${menu(ctx)}
<main id="main">
${body}
</main>
${footer(ctx)}
<div class="peek" aria-hidden="true"><div class="peek__in"></div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js" defer></script>
<script src="${root}assets/js/main.js" defer></script>
</body>
</html>
`;
}
