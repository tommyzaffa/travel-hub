import { P } from '../data.mjs';
import { img, imgUrl, btn, lines, ctaBand, pageHero } from '../lib.mjs';

export default function global(ctx) {
  const { t, url } = ctx;

  const nordics = [
    { img: P.norway, title: t('Norway', 'Norvegia'), text: t('Fjord cruises, the Bergen railway and the Lofoten islands.', 'Crociere nei fiordi, la ferrovia di Bergen e le isole Lofoten.'), alt: t('A red wooden house on a Norwegian fjord', 'Una casa di legno rossa su un fiordo norvegese'), r: 0.8 },
    { img: P.iceland, title: t('Iceland', 'Islanda'), text: t('Waterfalls, glaciers and black beaches along the Ring Road.', 'Cascate, ghiacciai e spiagge nere lungo la Ring Road.'), alt: t('Mount Vestrahorn reflected on a black sand beach', 'Il monte Vestrahorn riflesso sulla sabbia nera'), r: 1.1 },
    { img: P.aurora, title: t('Finnish Lapland', 'Lapponia finlandese'), text: t('Northern lights, husky safaris and winter stays among the snow.', 'Aurore boreali, safari con gli husky e soggiorni invernali tra la neve.'), alt: t('Northern lights over snowy trees', 'Aurora boreale sugli alberi innevati'), r: 1.1 },
    { img: P.stockholm, title: t('Sweden & Denmark', 'Svezia e Danimarca'), text: t('Stockholm, Copenhagen and the archipelagos, easy to combine in one trip.', 'Stoccolma, Copenaghen e gli arcipelaghi, facili da combinare in un solo viaggio.'), alt: t('Stockholm old town seen from the water', 'Gamla Stan, Stoccolma, vista dall’acqua'), r: 0.8 },
  ];

  const services = [
    [P.hotel, t('Accommodation', 'Alloggi'), t('Hotels, lodges and resorts chosen for groups: location, room allocation, meal plans.', 'Hotel, lodge e resort scelti per i gruppi: posizione, allotment di camere, trattamento.')],
    [P.coach, t('Transfers & transport', 'Transfer e trasporti'), t('Airport transfers, coaches with driver, minivans, trains, ferries and domestic flights.', 'Transfer da e per l’aeroporto, pullman con autista, minivan, treni, traghetti e voli interni.')],
    [P.cityGroup, t('Guides & tour leaders', 'Guide e accompagnatori'), t('Local guides for visits and tour leaders for the whole trip.', 'Guide locali per le visite e accompagnatori per tutto il viaggio.')],
    [P.grandCanyon2, t('Experiences & tickets', 'Esperienze e ingressi'), t('Park entries, shows, tastings, helicopter flights, private visits.', 'Ingressi ai parchi, spettacoli, degustazioni, sorvoli in elicottero, visite private.')],
    [P.gala, t('Incentives & events', 'Incentive ed eventi'), t('Incentive programmes, dinners and events for company groups.', 'Programmi incentive, cene ed eventi per gruppi aziendali.')],
    [P.airport, t('Assistance', 'Assistenza'), t('One contact before departure and a direct line during the trip.', 'Un referente prima della partenza e una linea diretta durante il viaggio.')],
  ];

  const body = `
${pageHero(ctx, {
  gate: 'C',
  kicker: t('Beyond North America', 'Oltre il Nord America'),
  title: ['Global Reach'],
  sub: t('The same method, other horizons: the Nordics and, on request, other destinations around the world.', 'Lo stesso metodo, altri orizzonti: i Paesi nordici e, su richiesta, altre destinazioni nel mondo.'),
  image: P.lofoten,
  alt: t('Red fishermen’s cabins below a granite peak in the Lofoten islands', 'Capanne rosse dei pescatori sotto un picco di granito alle Lofoten'),
  jump: [['#nordics', t('The Nordics', 'Paesi nordici')], ['#on-request', t('On request', 'Su richiesta')], ['#services', t('Services', 'Servizi')]],
})}

<section class="sec intro">
  <div class="wrap intro__grid">
    <p class="label" data-r>${t('Our method', 'Il nostro metodo')}</p>
    <h2 class="d2" data-split>${t('A way of working that travels well', 'Un modo di lavorare che viaggia bene')}</h2>
    <div class="intro__txt">
      <p class="lead" data-r>${t('North America is our core. But the way we work applies anywhere: one contact, direct relationships with local suppliers, someone reachable during the trip.', 'Il Nord America è il nostro centro. Ma il nostro modo di lavorare vale ovunque: un solo referente, rapporti diretti con i fornitori locali, qualcuno raggiungibile durante il viaggio.')}</p>
      <p class="mute" data-r>${t('We apply it to Northern Europe and, when it makes sense for your group, to other destinations.', 'Lo applichiamo al Nord Europa e, quando ha senso per il vostro gruppo, ad altre destinazioni.')}</p>
    </div>
  </div>
</section>

<section class="sec sec--grey nordics" id="nordics">
  <div class="wrap">
    <header class="sec-head">
      <p class="label" data-r>${t('Northern Europe', 'Nord Europa')}</p>
      <h2 class="d2" data-split>${t('The Nordics', 'I Paesi nordici')}</h2>
      <p class="mute sec-head__aside" data-r>${t('Fjords in summer, northern lights in winter: a region that works all year round for groups.', 'Fiordi d’estate, aurore boreali d’inverno: una regione che funziona tutto l’anno per i gruppi.')}</p>
    </header>
    <div class="nord">
      ${nordics
        .map(
          (n, i) => `
      <article class="nord__item" data-r>
        <figure data-clip>${img(n.img, { w: 1400, ratio: n.r, sizes: '(max-width: 760px) 100vw, 50vw', alt: n.alt })}</figure>
        <div class="nord__meta"><span class="label">0${i + 1}</span><div><h3 class="h4">${n.title}</h3><p class="mute">${n.text}</p></div></div>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec request" id="on-request" data-theme="dark">
  <div class="request__media" data-parallax>${img(P.airliner, { w: 2400, ratio: 0.6, alt: t('An airliner above the clouds', 'Un aereo di linea sopra le nuvole') })}</div>
  <div class="wrap request__body">
    <p class="label" data-r>${t('On request', 'Su richiesta')}</p>
    <h2 class="d1" data-split>${t('Somewhere<br>else in mind?', 'Un’altra<br>meta in mente?')}</h2>
    <div class="request__txt" data-r>
      <p class="lead">${t('If it isn’t on this page, it doesn’t mean we can’t do it. Tell us the destination: we’ll tell you honestly whether we’re the right partner for it.', 'Se non è in questa pagina, non vuol dire che non possiamo farlo. Diteci la destinazione: vi diremo con onestà se siamo il partner giusto.')}</p>
      ${btn(url('contact'), t('Ask us', 'Chiedeteci'))}
    </div>
  </div>
</section>

<section class="sec svcrows" id="services">
  <div class="wrap">
    <header class="sec-head">
      <p class="label" data-r>${t('Services', 'Servizi')}</p>
      <h2 class="d2" data-split>${t('What we handle, wherever you go', 'Cosa gestiamo, ovunque andiate')}</h2>
    </header>
    <ol class="rows">
      ${services
        .map(
          ([im, title, text], i) => `
      <li class="rows__item" data-peek="${imgUrl(im, 760)}" data-r>
        <span class="label">0${i + 1}</span>
        <h3 class="rows__t">${title}</h3>
        <p class="mute">${text}</p>
      </li>`
        )
        .join('')}
    </ol>
  </div>
</section>

${ctaBand(ctx)}
`;

  return {
    title: t('Global Reach — Nordics and beyond | Travel Hub', 'Global Reach — Paesi nordici e altre destinazioni | Travel Hub'),
    description: t(
      'Group travel in Norway, Iceland, Finnish Lapland, Sweden and Denmark, and other destinations on request, with the same method we use in North America.',
      'Viaggi di gruppo in Norvegia, Islanda, Lapponia finlandese, Svezia e Danimarca e in altre destinazioni su richiesta, con lo stesso metodo che usiamo in Nord America.'
    ),
    ogImage: imgUrl(P.lofoten, 1200, 0.525),
    body,
  };
}
