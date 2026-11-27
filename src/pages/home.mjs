import { P, COMPANY } from '../data.mjs';
import { img, imgUrl, btn, lines, ctaBand, ICON, clock, esc, placeholder } from '../lib.mjs';
import { SERVICES } from './services.mjs';

export default function home(ctx) {
  const { t, url } = ctx;
  const [lug, nyc] = COMPANY.offices;
  const usa = url('usa');

  // hero flip-board: one destination at a time (word max 12 characters)
  const boarding = t('Boarding', 'Imbarco');
  const heroDest = [
    { code: 'JFK', word: 'NEW YORK', name: 'New York', img: P.nyc, href: usa + '#more', alt: t('Manhattan and the Brooklyn Bridge', 'Manhattan e il ponte di Brooklyn') },
    { code: 'LAS', word: 'GRAND CANYON', name: t('Grand Canyon · Western parks', 'Grand Canyon · Parchi dell’Ovest'), img: P.grandCanyon, href: usa + '#itin-west', alt: t('The Colorado River in the Grand Canyon', 'Il fiume Colorado nel Grand Canyon') },
    { code: 'ORD', word: 'ROUTE 66', name: 'Route 66 · Chicago → Los Angeles', img: P.route66Road, href: usa + '#itin-route66', alt: t('The Route 66 shield painted on the road', 'Il simbolo della Route 66 dipinto sull’asfalto') },
    { code: 'MIA', word: 'FLORIDA', name: t('Florida · Keys & Everglades', 'Florida · Keys ed Everglades'), img: P.keys, href: usa + '#itin-florida', alt: t('The Overseas Highway across the Florida Keys', 'La Overseas Highway sulle isole Keys') },
    { code: 'DFW', word: 'TEXAS', name: 'Texas · Lone Star Trail', img: P.riverwalk, href: usa + '#itin-texas', alt: t('Boats on the San Antonio River Walk', 'Barche sul River Walk di San Antonio') },
    { code: 'MSY', word: 'NEW ORLEANS', name: t('New Orleans · Southern states', 'New Orleans · Stati del Sud'), img: P.frenchQuarter, href: usa + '#more', alt: t('Iron balconies in the French Quarter, New Orleans', 'Balconi in ferro battuto nel French Quarter, New Orleans') },
    { code: 'YUL', word: 'MONTRÉAL', name: t('Montréal · Eastern Canada', 'Montréal · Canada dell’Est'), img: P.notreDame, href: usa + '#canada', alt: t('Inside Notre-Dame Basilica, Montréal', 'L’interno della basilica di Notre-Dame, Montréal') },
    { code: 'OSL', word: t('NORWAY', 'NORVEGIA'), name: t('Norway · Nordics', 'Norvegia · Paesi nordici'), img: P.norway, href: url('global'), alt: t('A red house on a Norwegian fjord', 'Una casa rossa su un fiordo norvegese'), req: true },
  ].map((d) => ({ ...d, status: d.req ? t('On request', 'Su richiesta') : boarding, label: d.req ? 'Global Reach' : 'USA & Canada' }));

  const destinations = [
    { code: 'JFK', dest: 'NEW YORK', theme: t('Cities & culture', 'Città e cultura'), img: P.nyc, href: usa + '#more' },
    { code: 'LAS', dest: t('WESTERN PARKS', 'PARCHI DELL’OVEST'), theme: t('Canyons & deserts', 'Canyon e deserti'), img: P.zion, href: usa + '#itin-west' },
    { code: 'SFO', dest: 'CALIFORNIA', theme: t('Coast & cities', 'Costa e città'), img: P.bigsur, href: usa + '#more' },
    { code: 'DEN', dest: t('ROCKY MOUNTAINS', 'MONTAGNE ROCCIOSE'), theme: t('Peaks & parks', 'Vette e parchi'), img: P.maroonBells, href: usa + '#more' },
    { code: 'DFW', dest: 'TEXAS', theme: t('Ranches & cities', 'Ranch e città'), img: P.austin, href: usa + '#itin-texas' },
    { code: 'MSY', dest: t('SOUTHERN STATES', 'STATI DEL SUD'), theme: t('Music & history', 'Musica e storia'), img: P.frenchQuarter, href: usa + '#more' },
    { code: 'MIA', dest: 'FLORIDA', theme: t('Sea & wildlife', 'Mare e natura'), img: P.keys, href: usa + '#itin-florida' },
    { code: 'YYZ', dest: t('ONTARIO & QUÉBEC', 'ONTARIO E QUÉBEC'), theme: t('Cities & history', 'Città e storia'), img: P.toronto, href: usa + '#canada' },
    { code: 'OSL', dest: t('NORDICS', 'PAESI NORDICI'), theme: t('Fjords & aurora', 'Fiordi e aurore'), img: P.norway, href: url('global'), req: true },
  ];

  const steps = [
    [t('Request', 'Richiesta'), t('Who’s travelling, when, and with what budget.', 'Chi viaggia, quando e con quale budget.')],
    [t('Quote', 'Preventivo'), t('A detailed itinerary with costs and options, refined together.', 'Un itinerario dettagliato, con costi e opzioni, da rifinire insieme.')],
    [t('Operations', 'Operativo'), t('Every service booked and confirmed. A digital travel kit for every traveller.', 'Ogni servizio prenotato e confermato. Un travel kit digitale per ogni viaggiatore.')],
    [t('Travel assistance', 'Assistenza in viaggio'), t('Reachable for the whole trip, ready when plans change.', 'Raggiungibili per tutto il viaggio, pronti se qualcosa cambia.')],
  ];

  const svc = SERVICES(ctx);

  const body = `
<section class="hx" data-hero data-theme="night">
  <div class="wrap hx__wrap">
    <div class="hx__top label" data-hero-rest>
      <span><span class="tag">B2B</span>${COMPANY.slogan} · ${t('Since', 'Dal')} ${COMPANY.since}</span>
      <span class="hx__clocks">${clock(ctx, lug)}${clock(ctx, nyc)}</span>
    </div>
    <div class="hx__grid">
      <div class="hx__head">
        <h1 class="hx__title">${lines(t(['Group', 'travel'], ['Viaggi', 'di gruppo']))}<span class="sr-only"> ${t('— bespoke journeys for the travel trade', '— viaggi su misura per il trade turistico')}</span></h1>
        <div class="hx__dest" aria-hidden="true">
          <span class="hx__arr">${ICON.arrow}</span>
          <span class="flap flap--hero" data-hero-flap>${esc(heroDest[0].word)}</span>
        </div>
      </div>
      <div class="hx__media">
        <a class="hx__win" href="${heroDest[0].href}" data-label="${esc(heroDest[0].label)}" aria-label="${esc(heroDest[0].name)}" style="background-image:url('${placeholder(heroDest[0].img, 1.15)}')">
          ${heroDest.map((d, i) => img(d.img, { w: 1400, ratio: 1.15, alt: d.alt, sizes: '(max-width: 900px) 100vw, 36vw', eager: i === 0, defer: i > 0 })).join('\n          ')}
          <span class="hx__bar" aria-hidden="true"><i></i></span>
          <span class="hx__plate">
            <b class="hx__code">${heroDest[0].code}</b>
            <span class="hx__name">${esc(heroDest[0].name)}</span>
            <span class="status">${heroDest[0].status}</span>
          </span>
        </a>
      </div>
      <div class="hx__body" data-hero-rest>
        <p class="hx__sub">${t('Bespoke journeys for agencies and tour operators. Designed, booked and looked after from a single hub.', 'Viaggi su misura per agenzie e tour operator. Progettati, prenotati e seguiti da un unico hub.')}</p>
        <div class="hx__cta">
          ${btn(url('contact'), t('Request a quote', 'Richiedi un preventivo'))}
          ${btn(url('services'), t('What we do', 'Cosa facciamo'), 'ghost')}
        </div>
      </div>
    </div>
    <div class="hx__gates" data-hero-rest>
      <span class="label">${t('Destinations', 'Destinazioni')}</span>
      <ol>
        ${heroDest.map((d, i) => `<li><button type="button" data-go="${i}" aria-label="${esc(d.name)}"${i === 0 ? ' class="is-on" aria-pressed="true"' : ' aria-pressed="false"'}>${d.code}</button></li>`).join('')}
      </ol>
    </div>
  </div>
  <script type="application/json" id="hero-data">${JSON.stringify({
    len: Math.max(...heroDest.map((d) => [...d.word].length)),
    items: heroDest.map(({ code, word, name, href, label, status, req }) => ({ code, word, name, href, label, status, req })),
  }).replace(/</g, '\\u003c')}</script>
</section>

<section class="sec statement">
  <div class="wrap">
    <p class="label statement__label" data-r>${t('Professional to professional', 'Da professionisti a professionisti')}</p>
    <p class="statement__big" data-words>
      ${t(
        `We know the roads <span class="inl">${img(P.desertRoad, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> by heart, and the people <span class="inl">${img(P.cityGroup, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> along them by name.`,
        `Conosciamo le strade <span class="inl">${img(P.desertRoad, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> a memoria e le persone <span class="inl">${img(P.cityGroup, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> lungo il percorso per nome.`
      )}
    </p>
    <ul class="pillars">
      <li data-r>${t('Direct from local suppliers.', 'Direttamente dai fornitori locali.')}</li>
      <li data-r>${t('Fewer intermediaries, better rates.', 'Meno intermediari, tariffe migliori.')}</li>
      <li data-r>${t('One hub, from the first quote to the last transfer.', 'Un solo hub, dal primo preventivo all’ultimo transfer.')}</li>
    </ul>
    <dl class="facts">
      <div data-r><dt class="d3">${COMPANY.since}</dt><dd>${t('Founded', 'Anno di fondazione')}</dd></div>
      <div data-r><dt class="d3">LUG · NYC</dt><dd>${t('Offices in Lugano and New York', 'Sedi a Lugano e New York')}</dd></div>
      <div data-r><dt class="d3">100% B2B</dt><dd>${t('Only for professionals', 'Solo per professionisti')}</dd></div>
      <div data-r><dt class="d3">IATA</dt><dd>${t('Accredited agency', 'Agenzia accreditata')} · ${COMPANY.iata}</dd></div>
    </dl>
  </div>
</section>

<section class="sec board" id="destinations" data-theme="night">
  <div class="wrap">
    <header class="board__head">
      <div>
        <p class="label board__kicker"><i class="board__ic">${ICON.plane}</i>${t('Where we take groups', 'Dove portiamo i gruppi')}</p>
        <h2 class="d2" data-split>${t('Destinations', 'Destinazioni')}</h2>
      </div>
      <p class="board__note" data-r>${t('Any date, any group size.', 'Qualsiasi data, qualsiasi gruppo.')}</p>
    </header>
    <div class="board__table" role="table" aria-label="${t('Destinations', 'Destinazioni')}">
      <div class="board__row board__row--head" role="row">
        <span role="columnheader">${t('Code', 'Codice')}</span>
        <span role="columnheader">${t('Destination', 'Destinazione')}</span>
        <span role="columnheader" class="board__fmt">${t('Theme', 'Tema')}</span>
        <span role="columnheader" class="board__st">${t('Status', 'Stato')}</span>
      </div>
      ${destinations
        .map(
          (d) => `
      <a class="board__row" role="row" href="${d.href}" data-peek="${imgUrl(d.img, 760)}" data-label="${d.req ? 'Global Reach' : 'USA & Canada'}">
        <span role="cell"><span class="flap" data-text="${d.code}">${d.code}</span></span>
        <span role="cell"><span class="flap" data-text="${esc(d.dest)}">${esc(d.dest)}</span></span>
        <span role="cell" class="board__fmt">${d.theme}</span>
        <span role="cell" class="board__st"><span class="status${d.req ? ' status--req' : ''}">${d.req ? t('On request', 'Su richiesta') : boarding}</span></span>
      </a>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec svx">
  <div class="wrap svx__grid">
    <div class="svx__head">
      <p class="label" data-r>${t('Gate B · What we do', 'Gate B · Cosa facciamo')}</p>
      <h2 class="d2" data-split>${t('One Stop Shop for all your group needs', 'Un solo indirizzo per ogni esigenza del gruppo')}</h2>
      <div data-r>${btn(url('services'), t('See what we do', 'Scopri cosa facciamo'), 'ink')}</div>
    </div>
    <ol class="svx__list">
      ${svc
        .map(
          (s, i) => `
      <li data-r><a href="${url('services')}#svc-${i + 1}" data-peek="${imgUrl(s.img, 760)}" data-label="${t('What we do', 'Cosa facciamo')}"><span class="label">${String(i + 1).padStart(2, '0')}</span><span class="svx__t">${s.title}</span>${ICON.arrowUR}</a></li>`
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="sec sec--grey process">
  <div class="wrap process__grid">
    <div class="process__head">
      <p class="label" data-r>${t('How we work', 'Come lavoriamo')}</p>
      <h2 class="d2" data-split>${t('Four steps, one hub', 'Quattro passaggi, un unico riferimento')}</h2>
      <p class="mute" data-r>${t('Your point of reference is Travel Hub, from the first request to the flight home.', 'Il vostro punto di riferimento è Travel Hub, dalla richiesta al volo di rientro.')}</p>
    </div>
    <ol class="process__list">
      ${steps
        .map(
          ([title, text], i) => `
      <li data-r>
        <span class="process__n">0${i + 1}</span>
        <div><h3 class="h4">${title}</h3><p class="mute">${text}</p></div>
      </li>`
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="feature" data-theme="dark">
  <div class="feature__media" data-parallax>
    ${img(P.nyc, { w: 2600, ratio: 0.66, alt: t('Manhattan skyline and the Brooklyn Bridge', 'Lo skyline di Manhattan e il ponte di Brooklyn') })}
  </div>
  <div class="wrap feature__body">
    <div>
      <p class="label">Gate C · ${t('Itineraries', 'Itinerari')}</p>
      <h2 class="d1" data-split>USA<br>&amp; Canada</h2>
    </div>
    <div class="feature__txt" data-r>
      <p class="lead">${t('Direct relationships with local suppliers, and roads we know first-hand. Five itineraries to start from.', 'Rapporti diretti con i fornitori locali e strade conosciute di persona. Cinque itinerari da cui partire.')}</p>
      ${btn(usa, t('Discover USA & Canada', 'Scopri USA & Canada'))}
    </div>
  </div>
</section>

<section class="sec reach">
  <div class="wrap reach__grid">
    <div class="reach__txt">
      <p class="label" data-r>Gate D · Global Reach</p>
      <h2 class="d2" data-split>${t('Other horizons', 'Altri orizzonti')}</h2>
      <p class="lead" data-r>${t('Fjords, northern lights, Nordic capitals. And, on request, the rest of the world.', 'Fiordi, aurore boreali, capitali del Nord. E, su richiesta, il resto del mondo.')}</p>
      <div data-r>${btn(url('global'), 'Global Reach', 'ink')}</div>
    </div>
    <div class="reach__imgs">
      <figure class="reach__a" data-clip>${img(P.lofoten, { w: 1400, ratio: 1.2, sizes: '(max-width: 760px) 70vw, 34vw', alt: t('Red houses below a mountain in the Lofoten islands, Norway', 'Case rosse sotto una montagna alle isole Lofoten, Norvegia') })}</figure>
      <figure class="reach__b" data-clip>${img(P.aurora, { w: 1000, ratio: 1.25, sizes: '(max-width: 760px) 50vw, 22vw', alt: t('Northern lights over snowy trees in Lapland', 'Aurora boreale sugli alberi innevati in Lapponia') })}</figure>
    </div>
  </div>
</section>

${ctaBand(ctx)}
`;

  return {
    title: t('Travel Hub — Bespoke group travel for the travel trade', 'Travel Hub — Viaggi di gruppo su misura per agenzie e tour operator'),
    description: t(
      'Bespoke Travel Experiences: group travel for agencies and tour operators in the USA, Canada, the Nordics and beyond. Offices in Lugano and New York.',
      'Bespoke Travel Experiences: viaggi di gruppo per agenzie e tour operator in USA, Canada, Paesi nordici e oltre. Sedi a Lugano e New York.'
    ),
    ogImage: imgUrl(P.monumentRoad, 1200, 0.525),
    body,
  };
}
