import { P } from '../data.mjs';
import { img, imgUrl, ctaBand, pageHero } from '../lib.mjs';

// "4/3" (w/h) -> 0.75 (h/w)
const hw = (r) => {
  const [a, b] = r.split('/').map(Number);
  return b / a;
};

// shared with the home page teaser (same order, same anchors #svc-1 … #svc-9)
export const SERVICES = ({ t }) => [
  { img: P.groupWalk, r: '4/3', title: t('Small group tours', 'Small group tour'), text: t('Ready-made itineraries for small groups, with a tour leader and every service included.', 'Itinerari pronti per piccoli gruppi, con accompagnatore e tutti i servizi inclusi.'), alt: t('A small group of travellers on a mountain trail', 'Un piccolo gruppo di viaggiatori su un sentiero di montagna') },
  { img: P.hotel, r: '4/5', title: t('Accommodation', 'Alloggi'), text: t('Hotels and lodges chosen one by one and contracted directly.', 'Hotel e lodge scelti uno a uno e contrattati direttamente.'), alt: t('Hotel lobby with designer furniture', 'Hall di un hotel con arredi di design') },
  { img: P.coach, r: '1/1', title: t('Transfers & transport', 'Transfer e trasporti'), text: t('Coaches, minivans, trains, ferries and domestic flights, timed to the programme.', 'Pullman, minivan, treni, traghetti e voli interni, al ritmo del programma.'), alt: t('A coach on a winding road', 'Un pullman su una strada tra le colline') },
  { img: P.cityGroup, r: '1/1', title: t('Guides & tour leaders', 'Guide e accompagnatori'), text: t('Local guides and tour leaders who know the road, the timing and the people.', 'Guide locali e accompagnatori che conoscono la strada, i tempi e le persone.'), alt: t('A group visiting a city on foot', 'Un gruppo in visita a piedi in città') },
  { img: P.airport, r: '1/1', title: t('Travel assistance', 'Assistenza in viaggio'), text: t('A point of reference before departure and for the whole trip.', 'Un punto di riferimento prima della partenza e per tutto il viaggio.'), alt: t('Travellers with luggage in an airport terminal', 'Viaggiatori con bagagli in un terminal') },
  { img: P.grandCanyon2, r: '3/2', title: t('Activities & attractions', 'Attività e attrazioni'), text: t('Park entries, shows, excursions and helicopter flights.', 'Ingressi ai parchi, spettacoli, escursioni e sorvoli in elicottero.'), alt: t('The Grand Canyon at sunset', 'Il Grand Canyon al tramonto') },
  { img: P.diner, r: '3/2', title: t('Meals', 'Pranzi e cene'), text: t('From a roadside diner to a gala dinner: tables booked for the whole group.', 'Dal diner sulla strada alla cena di gala: tavoli prenotati per tutto il gruppo.'), alt: t('A classic American diner lit up at night', 'Un classico diner americano illuminato di sera') },
  { img: P.gala, r: '4/3', title: t('Incentives & business travel', 'Incentive e viaggi aziendali'), text: t('Incentive trips, events and company travel, with the same care.', 'Viaggi incentive, eventi e trasferte aziendali, con la stessa cura.'), alt: t('A long table set for a gala dinner', 'Un lungo tavolo apparecchiato per una cena di gala') },
  { img: P.desertRoad, r: '3/2', title: t('Self-drive & private tours', 'Self-drive e tour privati'), text: t('Road trips and private tours for individual clients and small parties.', 'Viaggi on the road e tour privati per clienti individuali e piccoli nuclei.'), alt: t('A straight road towards Monument Valley', 'Una strada dritta verso la Monument Valley') },
];

export default function services(ctx) {
  const { t } = ctx;
  const list = SERVICES(ctx);
  const clients = [
    t('Travel agencies', 'Agenzie di viaggio'),
    t('Tour operators', 'Tour operator'),
    t('Associations & clubs', 'Associazioni e circoli'),
    t('Companies', 'Aziende'),
  ];

  const body = `
${pageHero(ctx, {
  gate: 'B',
  kicker: t('What we do', 'Cosa facciamo'),
  title: t(['One Stop Shop', 'for all your', 'group needs'], ['Un solo indirizzo', 'per ogni esigenza', 'del gruppo']),
  sub: t('Nine services, one hub: from the first hotel to the last transfer.', 'Nove servizi, un unico hub: dal primo hotel all’ultimo transfer.'),
  image: P.van,
  alt: t('A yellow van on a desert road among red rocks', 'Un van giallo su una strada nel deserto tra le rocce rosse'),
  jump: [['#services', t('Services', 'Servizi')], ['#clients', t('Who we work with', 'Per chi lavoriamo')]],
})}

<section class="sec services" id="services">
  <div class="wrap">
    <div class="svc">
      ${list
        .map(
          (s, i) => `
      <article class="svc__item" id="svc-${i + 1}" data-r>
        <figure class="svc__fig" style="--r:${s.r}" data-clip>${img(s.img, { w: 1400, ratio: hw(s.r), sizes: '(max-width: 760px) 100vw, 45vw', alt: s.alt })}</figure>
        <div class="svc__meta">
          <span class="label">${String(i + 1).padStart(2, '0')}</span>
          <div><h2 class="h4">${s.title}</h2><p class="mute">${s.text}</p></div>
        </div>
      </article>`
        )
        .join('')}
    </div>
  </div>
</section>

<section class="sec sec--grey clients" id="clients">
  <div class="wrap">
    <p class="label clients__label" data-r>${t('Who we work with', 'Per chi lavoriamo')}</p>
    <ul class="clients__list">
      ${clients.map((c) => `<li data-r>${c}</li>`).join('')}
    </ul>
  </div>
</section>

${ctaBand(ctx)}
`;

  return {
    title: t('What we do — One Stop Shop for all your group needs | Travel Hub', 'Cosa facciamo — Un solo indirizzo per il vostro gruppo | Travel Hub'),
    description: t(
      'Small group tours, accommodation, transport, guides, travel assistance, activities, meals, incentives and self-drive tours: one hub for every group need.',
      'Small group tour, alloggi, trasporti, guide, assistenza in viaggio, attività, pranzi e cene, incentive e self-drive: un unico hub per ogni esigenza del gruppo.'
    ),
    ogImage: imgUrl(P.van, 1200, 0.525),
    body,
  };
}
