import { P, COMPANY, SITE_URL } from '../data.mjs';
import { img, imgUrl, btn, lines, ctaBand, ICON, clock, heroMedia } from '../lib.mjs';

export default function usa(ctx) {
  const { t, url, abs } = ctx;
  const [mia] = COMPANY.offices;

  const included = [
    t('Itinerary designed and tested', 'Itinerario studiato e collaudato'),
    t('Hotels selected and contracted directly', 'Hotel selezionati e contrattati direttamente'),
    t('Coach or minivan with driver', 'Pullman o minivan con autista'),
    t('Tour leader and local guides', 'Accompagnatore e guide locali'),
    t('Visits, entrance tickets and activities', 'Visite, ingressi e attività'),
    t('Digital travel kit for every traveller', 'Travel kit digitale per ogni viaggiatore'),
    t('Assistance throughout the trip', 'Assistenza per tutto il viaggio'),
  ];

  const itineraries = [
    {
      id: 'west',
      name: t('Great Parks of the West', 'I grandi parchi dell’Ovest'),
      key: 'Great Parks of the West',
      imgs: [
        [P.zion, t('Canyon walls in Zion National Park', 'Le pareti del canyon nello Zion National Park')],
        [P.bryce, t('Red hoodoos in Bryce Canyon', 'I pinnacoli rossi di Bryce Canyon')],
        [P.antelope, t('Light inside Antelope Canyon', 'La luce dentro Antelope Canyon')],
      ],
      facts: [
        [t('Duration', 'Durata'), t('10 days · 9 nights', '10 giorni · 9 notti')],
        [t('Start / end', 'Partenza / arrivo'), 'Las Vegas'],
        [t('Distance', 'Distanza'), t('about 1,840 km', 'circa 1.840 km')],
        [t('States', 'Stati'), 'Nevada · Utah · Arizona'],
      ],
      stops: ['Las Vegas', 'Zion', 'Bryce Canyon', 'Page', 'Grand Canyon', 'Sedona', 'Lake Havasu', 'Las Vegas'],
      days: [
        ['1', 'Las Vegas', t('Arrival, transfer to the hotel and a first evening on the Strip.', 'Arrivo, trasferimento in hotel e prima serata sulla Strip.')],
        ['2', 'Las Vegas → Zion · 265 km', t('Across the Nevada desert to Zion, a canyon 24 km long and 800 metres deep.', 'Attraverso il deserto del Nevada fino a Zion, un canyon lungo 24 km e profondo 800 metri.')],
        ['3', 'Zion → Bryce Canyon · 135 km', t('A short drive over the Utah plateau to the red hoodoos of Bryce. Sunrise is worth the early start.', 'Breve trasferimento sull’altopiano dello Utah fino ai pinnacoli rossi di Bryce. L’alba vale la sveglia presto.')],
        ['4', 'Bryce Canyon → Page · 240 km', t('Lake Powell, Horseshoe Bend and a walk through Antelope Canyon.', 'Lake Powell, Horseshoe Bend e una passeggiata dentro Antelope Canyon.')],
        ['5', 'Page → Grand Canyon · 340 km', t('On to the South Rim of the Grand Canyon.', 'Verso il South Rim del Grand Canyon.')],
        ['6', 'Grand Canyon', t('A full day in the park, with an optional helicopter flight.', 'Giornata intera nel parco, con sorvolo in elicottero facoltativo.')],
        ['7', 'Grand Canyon → Sedona · 205 km', t('Red rocks and the slower pace of Sedona.', 'Rocce rosse e il ritmo più lento di Sedona.')],
        ['8', 'Sedona → Lake Havasu · 410 km', t('South-west to Lake Havasu, between sun and water.', 'Verso sud-ovest fino a Lake Havasu, tra sole e acqua.')],
        ['9', 'Lake Havasu → Las Vegas · 245 km', t('Back to Las Vegas to close the loop.', 'Rientro a Las Vegas per chiudere l’anello.')],
        ['10', 'Las Vegas', t('Departure.', 'Partenza.')],
      ],
    },
    {
      id: 'newengland',
      name: t('New England: lighthouses & lobsters', 'New England: fari e aragoste'),
      key: 'New England: lighthouses & lobsters',
      imgs: [
        [P.lighthouse, t('Portland Head Light on the coast of Maine', 'Portland Head Light sulla costa del Maine')],
        [P.vermont, t('Autumn colours around a lake in Vermont', 'I colori dell’autunno attorno a un lago nel Vermont')],
        [P.boston, t('The Boston skyline across the water', 'Lo skyline di Boston dall’acqua')],
      ],
      facts: [
        [t('Duration', 'Durata'), t('13 days · 12 nights', '13 giorni · 12 notti')],
        [t('Start / end', 'Partenza / arrivo'), 'Boston'],
        [t('Format', 'Formula'), t('Group or self-drive', 'Gruppo o self-drive')],
        [t('States', 'Stati'), 'MA · ME · NH · VT · CT · RI'],
      ],
      stops: ['Boston', 'Kennebunkport', 'Camden', 'Bar Harbor', 'Bethel', 'North Conway', 'Londonderry', 'Stockbridge', 'Mystic', 'Cape Cod', 'Boston'],
      days: [
        ['1–2', 'Boston', t('The Freedom Trail, Harvard and Cambridge, Faneuil Hall, and a free day in the city.', 'Freedom Trail, Harvard e Cambridge, Faneuil Hall e una giornata libera in città.')],
        ['3', 'Boston → Kennebunkport', t('North along the coast via Salem, Rockport, Portsmouth and Ogunquit.', 'Verso nord lungo la costa, passando da Salem, Rockport, Portsmouth e Ogunquit.')],
        ['4', 'Kennebunkport → Camden', t('Portland Head Light, Portland’s Old Port and Pemaquid Point.', 'Portland Head Light, l’Old Port di Portland e Pemaquid Point.')],
        ['5', 'Camden → Bar Harbor', t('Along Penobscot Bay to Mount Desert Island.', 'Lungo la baia di Penobscot fino a Mount Desert Island.')],
        ['6', 'Bar Harbor → Bethel', t('Morning in Acadia National Park and on Cadillac Mountain, then inland.', 'Mattina nell’Acadia National Park e sul Cadillac Mountain, poi verso l’interno.')],
        ['7', 'Bethel → North Conway', t('The White Mountains and Mount Washington.', 'Le White Mountains e il Mount Washington.')],
        ['8', 'North Conway → Londonderry', t('Kancamagus Highway, covered bridges, Franconia Notch and Woodstock, Vermont.', 'Kancamagus Highway, ponti coperti, Franconia Notch e Woodstock, nel Vermont.')],
        ['9', 'Londonderry → Stockbridge', t('The Green Mountains, Bennington and the Norman Rockwell Museum.', 'Le Green Mountains, Bennington e il Norman Rockwell Museum.')],
        ['10', 'Stockbridge → Mystic', t('Down to the Connecticut coast and Mystic Seaport.', 'Verso la costa del Connecticut e Mystic Seaport.')],
        ['11', 'Mystic → Cape Cod', t('The Gilded Age mansions of Newport on the way to Cape Cod.', 'Le ville della Gilded Age di Newport, poi Cape Cod.')],
        ['12', 'Cape Cod → Boston', t('Provincetown and the villages of the Cape, Plymouth, back to Boston.', 'Provincetown e i villaggi del Cape, Plymouth e rientro a Boston.')],
        ['13', 'Boston', t('Departure.', 'Partenza.')],
      ],
    },
  ];

  const canada = [
    { img: P.moraine, title: t('Canadian Rockies', 'Montagne Rocciose canadesi'), text: t('Banff, Lake Louise, Moraine Lake and the Icefields Parkway up to Jasper.', 'Banff, Lake Louise, Moraine Lake e la Icefields Parkway fino a Jasper.'), alt: t('Moraine Lake reflecting the Canadian Rockies', 'Il Moraine Lake che riflette le Montagne Rocciose') },
    { img: P.quebec, title: t('Québec & Ontario', 'Québec e Ontario'), text: t('Québec City, Montréal, Ottawa, Toronto and Niagara Falls.', 'Québec City, Montréal, Ottawa, Toronto e le cascate del Niagara.'), alt: t('Château Frontenac above the old town of Québec City', 'Lo Château Frontenac sopra la città vecchia di Québec') },
    { img: P.vancouver, title: t('British Columbia', 'British Columbia'), text: t('Vancouver, Vancouver Island and the Pacific coast, easy to pair with Seattle.', 'Vancouver, Vancouver Island e la costa del Pacifico, da abbinare facilmente a Seattle.'), alt: t('Vancouver waterfront at golden hour', 'Il lungomare di Vancouver al tramonto') },
  ];

  const more = [
    { img: P.bigsur, title: t('Magnificent California', 'California magnifica'), text: t('San Francisco, Big Sur, Los Angeles and the parks.', 'San Francisco, Big Sur, Los Angeles e i parchi.') },
    { img: P.alaska, title: t('Alaska highlights', 'Il meglio dell’Alaska'), text: t('Glaciers and wildlife.', 'Ghiacciai e fauna selvatica.') },
    { img: P.yellowstone, title: t('Yellowstone & the Badlands', 'Yellowstone e Badlands'), text: t('Geysers, Glacier National Park, Mount Rushmore.', 'Geyser, Glacier National Park, Mount Rushmore.') },
    { img: P.route66, title: t('Historic Route 66', 'La storica Route 66'), text: t('From Chicago to Los Angeles on the Mother Road.', 'Da Chicago a Los Angeles sulla Mother Road.') },
    { img: P.monument, title: t('America’s grandeurs', 'Le grandezze d’America'), text: t('Canyons, Old Faithful, dinosaur sites and Native villages.', 'Canyon, Old Faithful, siti dei dinosauri e villaggi dei nativi.') },
  ];

  const itinHtml = itineraries
    .map(
      (it, idx) => `
  <article class="itin" id="itin-${it.id}">
    <div class="itin__strip">
      ${it.imgs.map(([id, alt], i) => `<figure data-clip>${img(id, { w: i === 0 ? 1600 : 900, ratio: i === 0 ? 0.62 : 1.1, sizes: i === 0 ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 760px) 50vw, 25vw', alt })}</figure>`).join('')}
    </div>
    <div class="itin__head">
      <div>
        <p class="label">${t('Sample itinerary', 'Itinerario di esempio')} 0${idx + 1}</p>
        <h3 class="d3" data-split>${it.name}</h3>
      </div>
      <dl class="itin__facts" data-r>
        ${it.facts.map(([k, v]) => `<div><dt class="label">${k}</dt><dd>${v}</dd></div>`).join('')}
      </dl>
    </div>
    <ol class="route" aria-label="${t('Route', 'Percorso')}" data-r>
      ${it.stops.map((s, i) => `<li class="${i === 0 || i === it.stops.length - 1 ? 'is-end' : ''}"><span>${s}</span></li>`).join('')}
    </ol>
    <details class="days">
      <summary><span>${t('Day by day', 'Giorno per giorno')}</span><i>${ICON.plus}</i></summary>
      <ol class="days__list">
        ${it.days.map(([d, title, text]) => `<li><span class="label">${t('Day', 'Giorno')} ${d}</span><strong>${title}</strong><p>${text}</p></li>`).join('')}
      </ol>
    </details>
    <div class="itin__cta" data-r>
      <p>${t('Want this itinerary for your group? We adapt duration, hotel category and format: small group with tour leader, or self-drive.', 'Volete questo itinerario per il vostro gruppo? Adattiamo durata, categoria degli hotel e formula: small group con accompagnatore oppure self-drive.')}</p>
      ${btn(url('contact') + '?trip=' + encodeURIComponent(it.name), t('Ask for a quote', 'Chiedi un preventivo'))}
    </div>
  </article>`
    )
    .join('');

  const body = `
<section class="hero hero--page" data-theme="dark">
  ${heroMedia(P.grandCanyon, t('The Colorado River winding through the Grand Canyon', 'Il fiume Colorado che attraversa il Grand Canyon'), 0.62)}
  <div class="wrap hero__inner">
    <p class="hero__kicker label"><span class="tag">Gate B</span>${t('North America', 'Nord America')}</p>
    <h1 class="d1 hero__title">${lines(['USA', '&amp; Canada'])}</h1>
    <div class="hero__foot">
      <p class="hero__sub">${t('From the national parks of the West to the coast of Maine, from the Rockies to Québec: the routes we know best, for groups of every size.', 'Dai parchi nazionali dell’Ovest alla costa del Maine, dalle Montagne Rocciose al Québec: gli itinerari che conosciamo meglio, per gruppi di ogni dimensione.')}</p>
      <nav class="hero__jump" aria-label="${t('On this page', 'In questa pagina')}">
        <a href="#small-groups">Small group tours</a>
        <a href="#assistance">${t('On-site assistance', 'Assistenza sul posto')}</a>
        <a href="#itineraries">${t('Itineraries', 'Itinerari')}</a>
        <a href="#canada">Canada</a>
      </nav>
    </div>
  </div>
</section>

<section class="sec intro">
  <div class="wrap intro__grid">
    <p class="label" data-r>${t('Our home ground', 'Il nostro territorio')}</p>
    <h2 class="d2" data-split>${t('Four corners, no going around in circles', 'Quattro angoli d’America, senza girare a vuoto')}</h2>
    <div class="intro__txt">
      <p class="lead" data-r>${t('Our head office is in Miami. We contract hotels, coaches and guides directly, and we know the practical details that make a group trip work.', 'La nostra sede principale è a Miami. Contrattiamo direttamente hotel, pullman e guide e conosciamo i dettagli pratici che fanno funzionare un viaggio di gruppo.')}</p>
      <p class="mute" data-r>${t('Which park roads close in winter, which lodges need booking a year ahead, how long a drive really takes with forty people on board. That is the difference your clients feel, even if they never see it.', 'Quali strade dei parchi chiudono d’inverno, quali lodge vanno prenotati con un anno di anticipo, quanto dura davvero un trasferimento con quaranta persone a bordo. È la differenza che i vostri clienti sentono, anche se non la vedono.')}</p>
    </div>
  </div>
</section>

<section class="sec sec--grey sgt" id="small-groups">
  <div class="wrap sgt__grid">
    <figure class="sgt__fig" data-clip>${img(P.viewpoint, { w: 1600, ratio: 1.15, sizes: '(max-width: 900px) 100vw, 46vw', alt: t('A small group admiring a mountain lake from a viewpoint', 'Un piccolo gruppo davanti a un lago di montagna') })}</figure>
    <div class="sgt__txt">
      <p class="label" data-r>Small group tours</p>
      <h2 class="d2" data-split>${t('Small groups, fully organised', 'Piccoli gruppi, tutto organizzato')}</h2>
      <p class="lead" data-r>${t('Designed for agencies that want to offer North America without building the trip from scratch. Choose an itinerary from our programme or ask for a new one: everything after the booking is on us.', 'Pensati per le agenzie che vogliono proporre il Nord America senza costruire il viaggio da zero. Scegliete un itinerario dal nostro programma o chiedetene uno nuovo: a tutto quello che viene dopo la prenotazione pensiamo noi.')}</p>
      <ul class="ticks" data-r>${included.map((i) => `<li>${i}</li>`).join('')}</ul>
      <p class="sgt__for" data-r><span class="label">${t('For', 'Per')}</span>${t('Travel agencies, tour operators, associations and clubs, company groups.', 'Agenzie di viaggio, tour operator, associazioni e circoli, gruppi aziendali.')}</p>
      <div data-r>${btn(url('contact') + '?trip=' + encodeURIComponent('Small group tour'), t('Ask about small group tours', 'Informazioni sugli small group tour'))}</div>
    </div>
  </div>
</section>

<section class="sec assist" id="assistance" data-theme="night">
  <div class="wrap">
    <div class="assist__grid">
      <div class="assist__txt">
        <p class="label" data-r>${t('On-site assistance', 'Assistenza sul posto')}</p>
        <h2 class="d2" data-split>${t('Someone on site, in your group’s time zone', 'Qualcuno sul posto, nel fuso orario del vostro gruppo')}</h2>
        <p class="lead" data-r>${t('When your group lands in the US, it’s the middle of the night in Europe. Our Miami office is awake when your travellers are, and handles what comes up on the road: a delayed flight, a room to change, a guide needed elsewhere.', 'Quando il vostro gruppo atterra negli Stati Uniti, in Europa è notte fonda. Il nostro ufficio di Miami è sveglio quando lo sono i vostri viaggiatori e gestisce gli imprevisti del viaggio: un volo in ritardo, una camera da cambiare, una guida da sostituire.')}</p>
      </div>
      <figure class="assist__fig" data-clip>
        ${img(P.miami, { w: 1400, ratio: 1.1, sizes: '(max-width: 900px) 100vw, 40vw', alt: t('Aerial view of Miami and the bay', 'Veduta aerea di Miami e della baia') })}
        <figcaption class="assist__clock"><span class="label">${t('Now in Miami', 'Ora a Miami')}</span>${clock(ctx, mia, 'clock--xl')}</figcaption>
      </figure>
    </div>
    <ol class="assist__cols">
      <li data-r><span class="label">01</span><h3 class="h4">${t('Before departure', 'Prima della partenza')}</h3><p>${t('Final checks with every supplier and a briefing with the tour leader.', 'Verifica finale con ogni fornitore e briefing con l’accompagnatore.')}</p></li>
      <li data-r><span class="label">02</span><h3 class="h4">${t('During the trip', 'Durante il viaggio')}</h3><p>${t('A direct line to our team, for the tour leader and for you.', 'Una linea diretta con il nostro team, per l’accompagnatore e per voi.')}</p></li>
      <li data-r><span class="label">03</span><h3 class="h4">${t('When plans change', 'Se cambia qualcosa')}</h3><p>${t('Alternatives found and booked on the spot, with you kept informed.', 'Alternative trovate e prenotate sul momento, tenendovi sempre informati.')}</p></li>
    </ol>
  </div>
</section>

<section class="sec itins" id="itineraries">
  <div class="wrap">
    <header class="sec-head">
      <p class="label" data-r>${t('Itineraries', 'Itinerari')}</p>
      <h2 class="d2" data-split>${t('Two itineraries, as an example', 'Due itinerari, come esempio')}</h2>
      <p class="mute sec-head__aside" data-r>${t('Every programme can be adapted: duration, hotel category, group or self-drive format.', 'Ogni programma si può adattare: durata, categoria degli hotel, formula di gruppo o self-drive.')}</p>
    </header>
    ${itinHtml}
  </div>
</section>

<section class="sec sec--grey canada" id="canada">
  <div class="wrap">
    <header class="sec-head">
      <p class="label" data-r>Canada</p>
      <h2 class="d2" data-split>${t('Canada, just across the border', 'Il Canada, appena oltre il confine')}</h2>
      <p class="mute sec-head__aside" data-r>${t('On its own or combined with the US: New England with Québec, the Pacific Northwest with Vancouver, the Rockies in one loop from Calgary.', 'Da solo o abbinato agli Stati Uniti: il New England con il Québec, il Pacifico nord-occidentale con Vancouver, le Montagne Rocciose in un unico anello da Calgary.')}</p>
    </header>
    <div class="cards3">
      ${canada
        .map(
          (c, i) => `
      <article class="card" data-r>
        <figure class="card__fig" data-clip>${img(c.img, { w: 1100, ratio: 1.25, sizes: '(max-width: 760px) 100vw, 32vw', alt: c.alt })}</figure>
        <span class="label">0${i + 1}</span>
        <h3 class="h4">${c.title}</h3>
        <p class="mute">${c.text}</p>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec more" id="more">
  <div class="wrap">
    <header class="more__head">
      <div>
        <p class="label" data-r>${t('From our programme', 'Dal nostro programma')}</p>
        <h2 class="d3" data-split>${t('More ideas for your groups', 'Altre idee per i vostri gruppi')}</h2>
      </div>
      <div class="more__side" data-r>
        <p class="mute">${t('Themed tours too: American music, motorcycle routes and more, on request.', 'Anche tour tematici: musica americana, itinerari in moto e altro, su richiesta.')}</p>
        <div class="rail-nav">
          <button type="button" data-rail-btn="-1" aria-label="${t('Previous', 'Precedente')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 12H5M11 6l-6 6 6 6"/></svg></button>
          <button type="button" data-rail-btn="1" aria-label="${t('Next', 'Successivo')}">${ICON.arrow}</button>
        </div>
      </div>
    </header>
  </div>
  <div class="rail" data-rail>
    ${more
      .map(
        (m) => `
    <a class="rail__card" href="${url('contact')}?trip=${encodeURIComponent(m.title)}">
      <figure>${img(m.img, { w: 900, ratio: 1.3, sizes: '(max-width: 760px) 78vw, 30vw', alt: '' })}</figure>
      <h3 class="h4">${m.title}</h3>
      <p class="mute">${m.text}</p>
      <span class="rail__go">${t('Ask for this trip', 'Chiedi questo viaggio')} ${ICON.arrowUR}</span>
    </a>`
      )
      .join('')}
  </div>
</section>

${ctaBand(ctx, { title: t('Your group,<br>our ground', 'Il vostro gruppo,<br>il nostro territorio') })}
`;

  const trips = itineraries.map((it) => ({
    '@type': 'TouristTrip',
    name: it.name,
    touristType: t('Groups', 'Gruppi'),
    provider: { '@id': SITE_URL + '/#org' },
    url: abs('usa') + '#itin-' + it.id,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: it.stops.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Place', name: s } })),
    },
  }));

  return {
    title: t('USA & Canada group tours — Travel Hub', 'Tour di gruppo in USA e Canada — Travel Hub'),
    description: t(
      'Small group tours, on-site assistance and sample itineraries across the United States and Canada, for agencies and tour operators.',
      'Small group tour, assistenza sul posto e itinerari di esempio tra Stati Uniti e Canada, per agenzie e tour operator.'
    ),
    ogImage: imgUrl(P.grandCanyon, 1200, 0.525),
    jsonld: trips,
    body,
  };
}
