import { P, COMPANY } from '../data.mjs';
import { img, imgUrl, btn, lines, ctaBand, ICON, clock, esc, heroMedia } from '../lib.mjs';

// "4/3" (w/h) -> 0.75 (h/w)
const hw = (r) => {
  const [a, b] = r.split('/').map(Number);
  return b / a;
};

export default function home(ctx) {
  const { t, url } = ctx;
  const [mia, lug] = COMPANY.offices;

  const departures = [
    { code: 'JFK', dest: t('NEW YORK', 'NEW YORK'), fmt: t('Cities & culture', 'Città e cultura'), img: P.nyc, href: url('usa'), on: true },
    { code: 'LAS', dest: t('WESTERN PARKS', 'PARCHI DELL’OVEST'), fmt: t('Small group tour', 'Small group tour'), img: P.zion, href: url('usa') + '#itineraries', on: true },
    { code: 'BOS', dest: t('NEW ENGLAND', 'NEW ENGLAND'), fmt: t('Coast & foliage', 'Costa e foliage'), img: P.lighthouse, href: url('usa') + '#itineraries', on: true },
    { code: 'SFO', dest: t('CALIFORNIA', 'CALIFORNIA'), fmt: t('Coast & cities', 'Costa e città'), img: P.bigsur, href: url('usa') + '#more', on: true },
    { code: 'ANC', dest: t('ALASKA', 'ALASKA'), fmt: t('Wild nature', 'Natura selvaggia'), img: P.alaska, href: url('usa') + '#more', on: true },
    { code: 'YYC', dest: t('CANADIAN ROCKIES', 'ROCCIOSE CANADESI'), fmt: t('Lakes & mountains', 'Laghi e montagne'), img: P.moraine, href: url('usa') + '#canada', on: true },
    { code: 'YQB', dest: t('QUÉBEC & ONTARIO', 'QUÉBEC E ONTARIO'), fmt: t('Cities & culture', 'Città e cultura'), img: P.quebec, href: url('usa') + '#canada', on: true },
    { code: 'OSL', dest: t('NORDICS', 'PAESI NORDICI'), fmt: t('Fjords & aurora', 'Fiordi e aurore'), img: P.norway, href: url('global'), on: false },
  ];

  const services = [
    { n: '01', img: P.groupWalk, r: '4/3', title: t('Small group tours', 'Small group tour'), text: t('Ready-to-sell itineraries for small groups, with a tour leader and every service included.', 'Itinerari pronti da vendere per piccoli gruppi, con accompagnatore e tutti i servizi inclusi.'), alt: t('A small group of travellers walking on a mountain trail', 'Un piccolo gruppo di viaggiatori su un sentiero di montagna') },
    { n: '02', img: P.hotel, r: '4/5', title: t('Accommodation', 'Alloggi'), text: t('Hotels selected and contracted directly, from city properties to lodges inside the national parks.', 'Hotel selezionati e contrattati direttamente, dagli alberghi in città ai lodge dentro i parchi nazionali.'), alt: t('Hotel lobby with designer furniture', 'Hall di un hotel con arredi di design') },
    { n: '03', img: P.coach, r: '1/1', title: t('Transfers & transport', 'Transfer e trasporti'), text: t('Coaches, minivans, private transfers and domestic connections, timed around your programme.', 'Pullman, minivan, transfer privati e collegamenti interni, organizzati attorno al vostro programma.'), alt: t('A coach driving on a winding road', 'Un pullman su una strada tra le colline') },
    { n: '04', img: P.cityGroup, r: '1/1', title: t('Guides & tour leaders', 'Guide e accompagnatori'), text: t('Local guides and tour leaders who know the route, the timing and the people.', 'Guide locali e accompagnatori che conoscono il percorso, i tempi e le persone.'), alt: t('A group visiting a city on foot', 'Un gruppo in visita a piedi in città') },
    { n: '05', img: P.airport, r: '1/1', title: t('On-site assistance', 'Assistenza sul posto'), text: t('A contact in the same time zone as your group, before departure and throughout the trip.', 'Un referente nello stesso fuso orario del gruppo, prima della partenza e per tutto il viaggio.'), alt: t('Travellers with luggage in an airport terminal', 'Viaggiatori con bagagli in un terminal') },
    { n: '06', img: P.gala, r: '3/2', title: t('Incentives & business travel', 'Incentive e viaggi aziendali'), text: t('Incentive trips, events and business travel, with the same attention to detail.', 'Viaggi incentive, eventi e trasferte aziendali, con la stessa cura per i dettagli.'), alt: t('A long table set for a gala dinner', 'Un lungo tavolo apparecchiato per una cena di gala') },
    { n: '07', img: P.van, r: '3/2', title: t('Self-drive & private tours', 'Self-drive e tour privati'), text: t('Self-drive itineraries and private tours for individual clients and smaller parties.', 'Itinerari self-drive e tour privati per clienti individuali e piccoli nuclei.'), alt: t('A yellow van on a road among red rocks', 'Un van giallo su una strada tra le rocce rosse') },
  ];

  const steps = [
    [t('Brief', 'Richiesta'), t('You tell us who’s travelling, when, for how long and with what budget.', 'Ci dite chi viaggia, quando, per quanto tempo e con quale budget.')],
    [t('Proposal', 'Proposta'), t('We send a detailed itinerary with costs, hotels and options, and refine it with you until it’s right.', 'Vi mandiamo un itinerario dettagliato con costi, hotel e opzioni, e lo rifiniamo insieme finché non è quello giusto.')],
    [t('Operations', 'Operativo'), t('We book and confirm every service and prepare the digital travel kit for you and your travellers.', 'Prenotiamo e confermiamo ogni servizio e prepariamo il travel kit digitale per voi e per i viaggiatori.')],
    [t('On the ground', 'Sul posto'), t('During the trip we stay reachable and solve problems before they become yours.', 'Durante il viaggio restiamo raggiungibili e risolviamo i problemi prima che diventino vostri.')],
  ];

  const body = `
<section class="hero" data-theme="dark">
  ${heroMedia(P.monumentRoad, t('A straight road leading to the red buttes of Monument Valley', 'Una strada dritta verso le rocce rosse della Monument Valley'), 0.62)}
  <div class="wrap hero__inner">
    <p class="hero__kicker label"><span class="tag">B2B</span>${t('Group travel · Since 2016', 'Viaggi di gruppo · Dal 2016')}</p>
    <h1 class="d1 hero__title">${lines([t('Group travel', 'Viaggi di gruppo'), t('in North America', 'in Nord America')])}</h1>
    <div class="hero__foot">
      <p class="hero__sub">${t('We are the ground team behind agencies and tour operators who send groups to the USA and Canada: itineraries, hotels, transport, guides, and someone on site when it matters.', 'Siamo il team operativo dietro alle agenzie e ai tour operator che portano gruppi negli Stati Uniti e in Canada: itinerari, hotel, trasporti, guide e qualcuno sul posto quando serve.')}</p>
      <div class="hero__cta">
        ${btn(url('contact'), t('Request a proposal', 'Richiedi una proposta'))}
        ${btn(url('usa'), t('USA & Canada', 'USA & Canada'), 'ghost')}
      </div>
      <div class="hero__meta">${clock(ctx, mia)}${clock(ctx, lug)}</div>
    </div>
  </div>
</section>

<section class="sec statement">
  <div class="wrap">
    <p class="label statement__label" data-r>${t('Professional to professional', 'Da professionisti a professionisti')}</p>
    <p class="statement__big" data-words>
      ${t(
        `We don’t sell trips to travellers. We build and run them <span class="inl">${img(P.viewpoint, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> for the agencies, tour operators <span class="inl">${img(P.coach, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> and companies who do.`,
        `Non vendiamo viaggi al pubblico. Li costruiamo e li gestiamo <span class="inl">${img(P.viewpoint, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> per le agenzie, i tour operator <span class="inl">${img(P.coach, { w: 480, ratio: 0.5, sizes: '160px', alt: '' })}</span> e le aziende che lo fanno.`
      )}
    </p>
    <div class="statement__cols">
      <p class="lead" data-r>${t('Travel Hub was born from a simple idea: buy directly from local suppliers, and add the judgement of people who travel these regions every year.', 'Travel Hub nasce da un’idea semplice: acquistare direttamente dai fornitori locali e aggiungere l’esperienza di chi queste regioni le percorre ogni anno.')}</p>
      <p data-r>${t('The result is fewer intermediaries, better rates and a single contact who knows every detail of your group’s trip, from the first quote to the last transfer.', 'Il risultato: meno intermediari, tariffe migliori e un unico referente che conosce ogni dettaglio del viaggio del vostro gruppo, dal primo preventivo all’ultimo transfer.')}</p>
    </div>
    <dl class="facts">
      <div data-r><dt class="d3">2016</dt><dd>${t('Working with the travel trade since', 'Al lavoro con il trade turistico dal')} 2016</dd></div>
      <div data-r><dt class="d3">MIA · LUG</dt><dd>${t('Offices in Miami and in Bioggio, Lugano', 'Sedi a Miami e a Bioggio, Lugano')}</dd></div>
      <div data-r><dt class="d3">100% B2B</dt><dd>${t('We only work with professionals', 'Lavoriamo solo con professionisti')}</dd></div>
      <div data-r><dt class="d3">IATA</dt><dd>${t('Accredited agency', 'Agenzia accreditata')} · ${COMPANY.iata}</dd></div>
    </dl>
  </div>
</section>

<section class="sec board" id="departures" data-theme="night">
  <div class="wrap">
    <header class="board__head">
      <div>
        <p class="label board__kicker"><i class="board__ic">${ICON.plane}</i>${t('Where we take groups', 'Dove portiamo i gruppi')}</p>
        <h2 class="d2" data-split>${t('Departures', 'Partenze')}</h2>
      </div>
      <p class="board__note" data-r>${t('North America first, the rest on request. Every departure, any date: you tell us when.', 'Prima di tutto il Nord America, il resto su richiesta. Ogni partenza, in qualsiasi data: ci dite voi quando.')}</p>
    </header>
    <div class="board__table" role="table" aria-label="${t('Destinations', 'Destinazioni')}">
      <div class="board__row board__row--head" role="row">
        <span role="columnheader">${t('Code', 'Codice')}</span>
        <span role="columnheader">${t('Destination', 'Destinazione')}</span>
        <span role="columnheader" class="board__fmt">${t('Format', 'Formula')}</span>
        <span role="columnheader" class="board__st">${t('Status', 'Stato')}</span>
      </div>
      ${departures
        .map(
          (d) => `
      <a class="board__row" role="row" href="${d.href}" data-peek="${imgUrl(d.img, 760)}" data-label="${d.on ? 'USA & Canada' : 'Global Reach'}">
        <span role="cell"><span class="flap" data-text="${d.code}">${d.code}</span></span>
        <span role="cell"><span class="flap" data-text="${esc(d.dest)}">${esc(d.dest)}</span></span>
        <span role="cell" class="board__fmt">${d.fmt}</span>
        <span role="cell" class="board__st"><span class="status${d.on ? '' : ' status--req'}">${d.on ? t('Boarding', 'Imbarco') : t('On request', 'Su richiesta')}</span></span>
      </a>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec services">
  <div class="wrap">
    <header class="sec-head">
      <p class="label" data-r>${t('What we handle', 'Cosa gestiamo')}</p>
      <h2 class="d2" data-split>${t('Everything a group needs, from one desk', 'Tutto ciò che serve a un gruppo, da un’unica scrivania')}</h2>
    </header>
    <div class="svc">
      ${services
        .map(
          (s) => `
      <article class="svc__item" data-r>
        <figure class="svc__fig" style="--r:${s.r}" data-clip>${img(s.img, { w: 1400, ratio: hw(s.r), sizes: '(max-width: 760px) 100vw, 45vw', alt: s.alt })}</figure>
        <div class="svc__meta">
          <span class="label">${s.n}</span>
          <div><h3 class="h4">${s.title}</h3><p class="mute">${s.text}</p></div>
        </div>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec sec--grey process">
  <div class="wrap process__grid">
    <div class="process__head">
      <p class="label" data-r>${t('How we work', 'Come lavoriamo')}</p>
      <h2 class="d2" data-split>${t('Four steps, one contact', 'Quattro passaggi, un solo referente')}</h2>
      <p class="mute" data-r>${t('The same person follows your file from the brief to the return flight.', 'La stessa persona segue la vostra pratica dalla richiesta al volo di rientro.')}</p>
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
      <p class="label">${t('Gate B · North America', 'Gate B · Nord America')}</p>
      <h2 class="d1" data-split>USA<br>&amp; Canada</h2>
    </div>
    <div class="feature__txt" data-r>
      <p class="lead">${t('Head office in Miami, direct relationships with local suppliers and a team that knows these routes first-hand. North America is where we know the details.', 'Sede principale a Miami, rapporti diretti con i fornitori locali e un team che questi itinerari li conosce di persona. Il Nord America è dove conosciamo i dettagli.')}</p>
      ${btn(url('usa'), t('Discover USA & Canada', 'Scopri USA & Canada'))}
    </div>
  </div>
</section>

<section class="sec reach">
  <div class="wrap reach__grid">
    <div class="reach__txt">
      <p class="label" data-r>${t('Gate C · Beyond North America', 'Gate C · Oltre il Nord America')}</p>
      <h2 class="d2" data-split>${t('Other horizons', 'Altri orizzonti')}</h2>
      <p class="lead" data-r>${t('Fjords, northern lights and Scandinavian capitals: we take groups to the Nordics too, and to other destinations on request.', 'Fiordi, aurore boreali e capitali scandinave: organizziamo gruppi anche nei Paesi nordici e, su richiesta, in altre destinazioni.')}</p>
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
    title: t('Travel Hub — Group travel in the USA & Canada for the travel trade', 'Travel Hub — Viaggi di gruppo in USA e Canada per agenzie e tour operator'),
    description: t(
      'B2B partner for agencies and tour operators: small group tours, on-site assistance and ground services in the USA, Canada and the Nordics. Offices in Miami and Lugano.',
      'Partner B2B per agenzie e tour operator: small group tour, assistenza sul posto e servizi a terra in USA, Canada e Paesi nordici. Sedi a Miami e Lugano.'
    ),
    ogImage: imgUrl(P.monumentRoad, 1200, 0.525),
    body,
  };
}
