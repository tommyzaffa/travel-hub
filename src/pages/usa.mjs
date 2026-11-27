import { P, SITE_URL } from '../data.mjs';
import { img, imgUrl, btn, ctaBand, ICON, pageHero } from '../lib.mjs';

export default function usa(ctx) {
  const { t, url, abs } = ctx;

  const itineraries = [
    {
      id: 'itin-west',
      code: 'LAS',
      name: t('Great Parks of the West', 'I grandi parchi dell’Ovest'),
      days: t('10 days', '10 giorni'),
      span: 'Las Vegas',
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
      plan: [
        ['1', 'Las Vegas', t('Arrival and a first evening on the Strip.', 'Arrivo e prima serata sulla Strip.')],
        ['2', 'Las Vegas → Zion · 265 km', t('Across the Nevada desert to a canyon 800 metres deep.', 'Attraverso il deserto del Nevada fino a un canyon profondo 800 metri.')],
        ['3', 'Zion → Bryce Canyon · 135 km', t('The red hoodoos of Bryce. Sunrise is worth the early start.', 'I pinnacoli rossi di Bryce. L’alba vale la sveglia presto.')],
        ['4', 'Bryce Canyon → Page · 240 km', t('Lake Powell, Horseshoe Bend and Antelope Canyon.', 'Lake Powell, Horseshoe Bend e Antelope Canyon.')],
        ['5', 'Page → Grand Canyon · 340 km', t('On to the South Rim.', 'Verso il South Rim.')],
        ['6', 'Grand Canyon', t('A full day in the park, with an optional helicopter flight.', 'Giornata intera nel parco, con sorvolo in elicottero facoltativo.')],
        ['7', 'Grand Canyon → Sedona · 205 km', t('Red rocks and a slower pace.', 'Rocce rosse e un ritmo più lento.')],
        ['8', 'Sedona → Lake Havasu · 410 km', t('South-west, between sun and water.', 'Verso sud-ovest, tra sole e acqua.')],
        ['9', 'Lake Havasu → Las Vegas · 245 km', t('Back to Las Vegas to close the loop.', 'Rientro a Las Vegas per chiudere l’anello.')],
        ['10', 'Las Vegas', t('Departure.', 'Partenza.')],
      ],
    },
    {
      id: 'itin-route66',
      code: 'ORD',
      name: t('Historic Route 66', 'La storica Route 66'),
      days: t('16 days', '16 giorni'),
      span: 'Chicago → Los Angeles',
      imgs: [
        [P.route66Road, t('The Route 66 shield painted on the road', 'Il simbolo della Route 66 dipinto sull’asfalto')],
        [P.cadillacRanch, t('Cadillac Ranch near Amarillo, Texas', 'Il Cadillac Ranch vicino ad Amarillo, in Texas')],
        [P.santaMonica, t('Santa Monica Pier, where the road ends', 'Il molo di Santa Monica, dove la strada finisce')],
      ],
      facts: [
        [t('Duration', 'Durata'), t('16 days · 15 nights', '16 giorni · 15 notti')],
        [t('Start / end', 'Partenza / arrivo'), 'Chicago → Los Angeles'],
        [t('Distance', 'Distanza'), t('about 4,000 km', 'circa 4.000 km')],
        [t('Format', 'Formula'), t('Self-drive or group', 'Self-drive o gruppo')],
      ],
      stops: ['Chicago', 'St. Louis', 'Springfield', 'Oklahoma City', 'Amarillo', 'Albuquerque', 'Holbrook', 'Grand Canyon', 'Las Vegas', 'Los Angeles'],
      plan: [
        ['1–2', 'Chicago', t('The Windy City, and the corner of Adams and Michigan where the road begins.', 'La Windy City e l’incrocio tra Adams e Michigan, dove comincia la strada.')],
        ['3', 'Chicago → St. Louis · 480 km', t('Prairies, the Gemini Giant and the Gateway Arch.', 'Praterie, il Gemini Giant e il Gateway Arch.')],
        ['4', 'St. Louis → Springfield · 424 km', t('The Ozark Highlands and the Meramec Caverns.', 'Gli altipiani Ozark e le Meramec Caverns.')],
        ['5', 'Springfield → Oklahoma City · 460 km', t('Kansas, Tulsa and the Blue Whale of Catoosa.', 'Il Kansas, Tulsa e la Blue Whale di Catoosa.')],
        ['6', 'Oklahoma City → Amarillo · 464 km', t('The Route 66 Museum and the plains of the Texas Panhandle.', 'Il Route 66 Museum e le pianure del Texas Panhandle.')],
        ['7', 'Amarillo → Albuquerque · 460 km', t('Cadillac Ranch, the MidPoint Café, then New Mexico.', 'Il Cadillac Ranch, il MidPoint Café, poi il New Mexico.')],
        ['8–9', 'Albuquerque · Santa Fe', t('Old Town, the Pueblo Cultural Center and a day among the galleries of Santa Fe.', 'La Old Town, il Pueblo Cultural Center e una giornata tra le gallerie di Santa Fe.')],
        ['10', 'Albuquerque → Holbrook · 390 km', t('Trading posts, Petrified Forest and sunset over the Painted Desert.', 'Trading post, la Petrified Forest e il tramonto sul Painted Desert.')],
        ['11', 'Holbrook → Grand Canyon · 390 km', t('Flagstaff, Williams and the South Rim.', 'Flagstaff, Williams e il South Rim.')],
        ['12', 'Williams → Las Vegas · 352 km', t('The longest unbroken stretch of the old road, Seligman and the Hoover Dam.', 'Il tratto più lungo della vecchia strada, Seligman e la diga di Hoover.')],
        ['13', 'Las Vegas', t('A free day.', 'Giornata libera.')],
        ['14', 'Las Vegas → Santa Monica', t('Calico ghost town, Barstow and the pier where Route 66 ends.', 'La città fantasma di Calico, Barstow e il molo dove finisce la Route 66.')],
        ['15', 'Los Angeles', t('A day to explore the city.', 'Una giornata per scoprire la città.')],
        ['16', 'Los Angeles', t('Departure.', 'Partenza.')],
      ],
    },
    {
      id: 'itin-florida',
      code: 'MIA',
      name: t('Florida in the round', 'Il giro della Florida'),
      days: t('12 days', '12 giorni'),
      span: 'Miami',
      imgs: [
        [P.keys, t('The Overseas Highway across the Florida Keys', 'La Overseas Highway sulle isole Keys')],
        [P.lifeguard, t('A lifeguard tower on Miami Beach', 'Una torretta dei bagnini a Miami Beach')],
        [P.manatee, t('A manatee and her calf', 'Un lamantino con il suo piccolo')],
      ],
      facts: [
        [t('Duration', 'Durata'), t('12 days · 11 nights', '12 giorni · 11 notti')],
        [t('Start / end', 'Partenza / arrivo'), 'Miami'],
        [t('Format', 'Formula'), t('Self-drive or group', 'Self-drive o gruppo')],
        [t('Highlights', 'Da non perdere'), 'Key West · Everglades · Orlando'],
      ],
      stops: ['Miami', 'Key West', 'Everglades', 'Naples', 'Sarasota', 'Crystal River', 'St. Augustine', 'Orlando', 'Cocoa Beach', 'Miami'],
      plan: [
        ['1', 'Miami', t('Arrival, Ocean Drive and the Art Deco of South Beach.', 'Arrivo, Ocean Drive e l’Art Déco di South Beach.')],
        ['2', 'Miami → Key West', t('The Overseas Highway, island after island, to Hemingway’s house.', 'La Overseas Highway, un’isola dopo l’altra, fino alla casa di Hemingway.')],
        ['3', 'Everglades', t('From dolphins to alligators, by airboat across the sawgrass.', 'Dai delfini agli alligatori, in airboat tra le paludi.')],
        ['4', 'Naples', t('The Gulf coast and its sunsets.', 'La costa del Golfo e i suoi tramonti.')],
        ['5', 'Sanibel · Captiva → Sarasota', t('Fort Myers and the shell beaches of Sanibel and Captiva.', 'Fort Myers e le spiagge di conchiglie di Sanibel e Captiva.')],
        ['6', 'Crystal River · Homosassa', t('Clear springs where the manatees spend the winter.', 'Sorgenti limpide dove i lamantini passano l’inverno.')],
        ['7', 'Crystal River → St. Augustine', t('The oldest city in the United States, founded in 1565.', 'La città più antica degli Stati Uniti, fondata nel 1565.')],
        ['8–10', 'Orlando', t('Three days for the theme parks.', 'Tre giorni per i parchi a tema.')],
        ['11', 'Cape Canaveral · Cocoa Beach', t('Kennedy Space Center, then the Atlantic.', 'Il Kennedy Space Center, poi l’Atlantico.')],
        ['12', 'Miami', t('Back to Miami and departure.', 'Rientro a Miami e partenza.')],
      ],
    },
    {
      id: 'itin-texas',
      code: 'DFW',
      name: 'Texas: The Lone Star Trail',
      days: t('14 days', '14 giorni'),
      span: 'Dallas',
      imgs: [
        [P.austin, t('Downtown Austin and the Colorado River', 'Il centro di Austin e il fiume Colorado')],
        [P.texasSign, t('A neon Texas sign', 'Un’insegna al neon del Texas')],
        [P.alamo, t('The Alamo, San Antonio', 'L’Alamo, San Antonio')],
      ],
      facts: [
        [t('Duration', 'Durata'), t('14 days · 13 nights', '14 giorni · 13 notti')],
        [t('Start / end', 'Partenza / arrivo'), 'Dallas'],
        [t('Format', 'Formula'), t('Self-drive or group', 'Self-drive o gruppo')],
        [t('States', 'Stati'), 'Texas · New Mexico'],
      ],
      stops: ['Dallas', 'Austin', 'Houston', 'Corpus Christi', 'San Antonio', 'El Paso', 'Albuquerque', 'Amarillo', 'Fort Worth', 'Dallas'],
      plan: [
        ['1', 'Dallas', t('Arrival.', 'Arrivo.')],
        ['2–3', 'Austin', t('The live music capital, its art and its food trucks.', 'La capitale della musica dal vivo, tra arte e food truck.')],
        ['4', 'Austin → Houston', t('Space Center Houston and the story of the Moon landings.', 'Lo Space Center Houston e la storia delle missioni sulla Luna.')],
        ['5', 'Houston → Corpus Christi', t('The Victorian streets of Galveston, then the Gulf beaches.', 'Le vie vittoriane di Galveston, poi le spiagge del Golfo.')],
        ['6–7', 'San Antonio', t('The River Walk and the Alamo.', 'Il River Walk e l’Alamo.')],
        ['8', 'San Antonio → Fort Stockton', t('Into West Texas, where the horizon opens up.', 'Verso il West Texas, dove l’orizzonte si apre.')],
        ['9', 'Fort Stockton → El Paso', t('Desert roads to the Mexican border.', 'Strade nel deserto fino al confine con il Messico.')],
        ['10–11', 'Albuquerque', t('New Mexico, its pueblos and the old Route 66.', 'Il New Mexico, i suoi pueblo e la vecchia Route 66.')],
        ['12', 'Albuquerque → Amarillo', t('Back to the Texas Panhandle and Cadillac Ranch.', 'Di nuovo nel Texas Panhandle, fino al Cadillac Ranch.')],
        ['13', 'Amarillo → Fort Worth', t('The Old West at the Stockyards: rodeo and saloons.', 'Il vecchio West agli Stockyards: rodeo e saloon.')],
        ['14', 'Dallas', t('Departure.', 'Partenza.')],
      ],
    },
    {
      id: 'canada',
      code: 'YYZ',
      canada: true,
      name: t('Eastern Canada: Toronto, Ottawa, Montréal', 'Canada dell’Est: Toronto, Ottawa, Montréal'),
      days: t('8 days', '8 giorni'),
      span: 'Toronto → Montréal',
      imgs: [
        [P.toronto, t('Toronto and the CN Tower across Lake Ontario', 'Toronto e la CN Tower dal lago Ontario')],
        [P.ottawa, t('Parliament Hill, Ottawa', 'Parliament Hill, Ottawa')],
        [P.oldMontreal, t('A street in Old Montréal', 'Una via della Vieux-Montréal')],
      ],
      facts: [
        [t('Duration', 'Durata'), t('8 days · 7 nights', '8 giorni · 7 notti')],
        [t('Start / end', 'Partenza / arrivo'), 'Toronto → Montréal'],
        [t('Distance', 'Distanza'), t('about 650 km', 'circa 650 km')],
        [t('Provinces', 'Province'), 'Ontario · Québec'],
      ],
      stops: ['Toronto', 'Ottawa', 'Montréal'],
      plan: [
        ['1', 'Toronto', t('Arrival and a first evening by the lake.', 'Arrivo e prima serata sul lago.')],
        ['2–3', 'Toronto', t('The CN Tower, the Distillery District and the islands. Optional day trip to Niagara Falls.', 'La CN Tower, il Distillery District e le isole. Escursione facoltativa alle cascate del Niagara.')],
        ['4', 'Toronto → Ottawa · 450 km', t('Along Lake Ontario and the Thousand Islands.', 'Lungo il lago Ontario e le Thousand Islands.')],
        ['5', 'Ottawa', t('Parliament Hill, the ByWard Market and the Rideau Canal.', 'Parliament Hill, il ByWard Market e il canale Rideau.')],
        ['6', 'Ottawa → Montréal · 200 km', t('Into Québec, and into French.', 'Si entra in Québec, e nel francese.')],
        ['7', 'Montréal', t('Old Montréal, Notre-Dame Basilica and the view from Mount Royal.', 'La Vieux-Montréal, la basilica di Notre-Dame e la vista dal Mont Royal.')],
        ['8', 'Montréal', t('Departure.', 'Partenza.')],
      ],
    },
  ];

  const more = [
    { img: P.nycNight, title: 'New York', text: t('Manhattan, Brooklyn and the neighbourhoods, on foot and from above.', 'Manhattan, Brooklyn e i quartieri, a piedi e dall’alto.') },
    { img: P.frenchQuarter, title: t('The Deep South', 'Il profondo Sud'), text: 'Atlanta, Nashville, Memphis, New Orleans, Savannah, Charleston.' },
    { img: P.maroonBells, title: 'Rocky Mountains', text: t('Colorado, Yellowstone and Grand Teton, in a loop from Denver.', 'Colorado, Yellowstone e Grand Teton, in un anello da Denver.') },
    { img: P.bigsur, title: t('Magnificent California', 'California magnifica'), text: t('San Francisco, Big Sur, Los Angeles and the parks.', 'San Francisco, Big Sur, Los Angeles e i parchi.') },
    { img: P.nashville, title: 'American Music Tour', text: t('Nashville, Memphis, the Delta and New Orleans, following the music.', 'Nashville, Memphis, il Delta e New Orleans, seguendo la musica.') },
  ];

  const quote = (name) => url('contact') + '?trip=' + encodeURIComponent(name);

  const itinHtml = itineraries
    .map(
      (it, idx) => `
  <article class="itin${it.canada ? ' itin--ca' : ''}" id="${it.id}">
    <div class="itin__strip">
      ${it.imgs.map(([id, alt], i) => `<figure data-clip>${img(id, { w: i === 0 ? 1600 : 900, ratio: i === 0 ? 0.62 : 1.1, sizes: i === 0 ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 760px) 50vw, 25vw', alt })}</figure>`).join('')}
    </div>
    <div class="itin__head">
      <div>
        <p class="label"><span class="itin__code">${it.code}</span>${it.canada ? 'Canada · ' : ''}${t('Itinerary', 'Itinerario')} 0${idx + 1}</p>
        <h3 class="d3" data-split>${it.name}</h3>
      </div>
      <dl class="itin__facts" data-r>
        ${it.facts.map(([k, v]) => `<div><dt class="label">${k}</dt><dd>${v}</dd></div>`).join('')}
      </dl>
    </div>
    <ol class="route${it.stops.length < 5 ? ' route--short' : ''}" aria-label="${t('Route', 'Percorso')}" data-r>
      ${it.stops.map((s, i) => `<li class="${i === 0 || i === it.stops.length - 1 ? 'is-end' : ''}"><span>${s}</span></li>`).join('')}
    </ol>
    <details class="days">
      <summary><span>${t('Day by day', 'Giorno per giorno')}</span><i>${ICON.plus}</i></summary>
      <ol class="days__list">
        ${it.plan.map(([d, title, text]) => `<li><span class="label">${t('Day', 'Giorno')} ${d}</span><strong>${title}</strong><p>${text}</p></li>`).join('')}
      </ol>
    </details>
    <div class="itin__cta" data-r>
      <p>${t('Want it for your group? Duration, hotels and format can all be adapted.', 'Lo volete per il vostro gruppo? Durata, hotel e formula si adattano.')}</p>
      ${btn(quote(it.name), t('Request a quote', 'Richiedi un preventivo'))}
    </div>
  </article>`
    )
    .join('');

  const body = `
${pageHero(ctx, {
  gate: 'C',
  kicker: t('Itineraries', 'Itinerari'),
  title: ['USA &amp; Canada'],
  sub: t('National parks, legendary roads, coastlines and cities. Five itineraries to start from.', 'Parchi nazionali, strade leggendarie, coste e città. Cinque itinerari da cui partire.'),
  image: P.grandCanyon,
  alt: t('The Colorado River winding through the Grand Canyon', 'Il fiume Colorado che attraversa il Grand Canyon'),
  jump: [['#itineraries', t('Itineraries', 'Itinerari')], ['#canada', 'Canada'], ['#more', t('More ideas', 'Altre idee')]],
})}

<section class="sec itins" id="itineraries">
  <div class="wrap">
    <header class="sec-head">
      <p class="label" data-r>${t('Itineraries', 'Itinerari')}</p>
      <h2 class="d2" data-split>${t('Five roads', 'Cinque strade')}</h2>
      <p class="mute sec-head__aside" data-r>${t('Each one can become yours: we adapt duration, hotels and format, small group or self-drive.', 'Ognuno può diventare il vostro: adattiamo durata, hotel e formula, small group o self-drive.')}</p>
    </header>
    <ol class="idx">
      ${itineraries
        .map(
          (it) => `
      <li data-r><a href="#${it.id}" data-peek="${imgUrl(it.imgs[0][0], 760)}">
        <span class="idx__code">${it.code}</span>
        <span class="idx__name">${it.name}</span>
        <span class="idx__days">${it.days}</span>
        <span class="idx__span">${it.span}</span>
        ${ICON.arrowDown}
      </a></li>`
        )
        .join('')}
    </ol>
    ${itinHtml}
  </div>
</section>

<section class="sec sec--grey more" id="more">
  <div class="wrap">
    <header class="more__head">
      <div>
        <p class="label" data-r>${t('From our programme', 'Dal nostro programma')}</p>
        <h2 class="d3" data-split>${t('More ideas for your groups', 'Altre idee per i vostri gruppi')}</h2>
      </div>
      <div class="more__side" data-r>
        <p class="mute">${t('Themed tours too, on request.', 'Anche tour tematici, su richiesta.')}</p>
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
    <a class="rail__card" href="${quote(m.title)}">
      <figure>${img(m.img, { w: 900, ratio: 1.3, sizes: '(max-width: 760px) 78vw, 30vw', alt: '' })}</figure>
      <h3 class="h4">${m.title}</h3>
      <p class="mute">${m.text}</p>
      <span class="rail__go">${t('Request a quote', 'Richiedi un preventivo')} ${ICON.arrowUR}</span>
    </a>`
      )
      .join('')}
  </div>
</section>

${ctaBand(ctx, { title: t('Which road<br>shall we take?', 'Quale strada<br>prendiamo?') })}
`;

  const trips = itineraries.map((it) => ({
    '@type': 'TouristTrip',
    name: it.name,
    touristType: t('Groups', 'Gruppi'),
    provider: { '@id': SITE_URL + '/#org' },
    url: abs('usa') + '#' + it.id,
    itinerary: {
      '@type': 'ItemList',
      itemListElement: it.stops.map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'Place', name: s } })),
    },
  }));

  return {
    title: t('USA & Canada — Group itineraries | Travel Hub', 'USA e Canada — Itinerari di gruppo | Travel Hub'),
    description: t(
      'Great Parks of the West, Route 66, Florida, Texas and Eastern Canada: sample itineraries for groups, adaptable in duration, hotels and format.',
      'Grandi parchi dell’Ovest, Route 66, Florida, Texas e Canada dell’Est: itinerari di esempio per gruppi, adattabili per durata, hotel e formula.'
    ),
    ogImage: imgUrl(P.grandCanyon, 1200, 0.525),
    jsonld: trips,
    body,
  };
}
