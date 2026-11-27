import { P } from '../data.mjs';
import { img, imgUrl, btn, ctaBand, pageHero } from '../lib.mjs';

export default function global(ctx) {
  const { t, url } = ctx;

  const nordics = [
    { img: P.norway, title: t('Norway', 'Norvegia'), text: t('Fjord cruises, the Bergen railway and the Lofoten islands.', 'Crociere nei fiordi, la ferrovia di Bergen e le isole Lofoten.'), alt: t('A red wooden house on a Norwegian fjord', 'Una casa di legno rossa su un fiordo norvegese'), r: 0.8 },
    { img: P.iceland, title: t('Iceland', 'Islanda'), text: t('Waterfalls, glaciers and black beaches along the Ring Road.', 'Cascate, ghiacciai e spiagge nere lungo la Ring Road.'), alt: t('Mount Vestrahorn reflected on a black sand beach', 'Il monte Vestrahorn riflesso sulla sabbia nera'), r: 1.1 },
    { img: P.aurora, title: t('Finnish Lapland', 'Lapponia finlandese'), text: t('Northern lights, husky safaris and winter stays among the snow.', 'Aurore boreali, safari con gli husky e soggiorni invernali tra la neve.'), alt: t('Northern lights over snowy trees', 'Aurora boreale sugli alberi innevati'), r: 1.1 },
    { img: P.stockholm, title: t('Sweden & Denmark', 'Svezia e Danimarca'), text: t('Stockholm, Copenhagen and the archipelagos, easy to combine in one trip.', 'Stoccolma, Copenaghen e gli arcipelaghi, facili da combinare in un solo viaggio.'), alt: t('Stockholm old town seen from the water', 'Gamla Stan, Stoccolma, vista dall’acqua'), r: 0.8 },
  ];

  const body = `
${pageHero(ctx, {
  gate: 'D',
  kicker: t('Worldwide', 'Nel mondo'),
  title: ['Global Reach'],
  sub: t('The same care, other horizons: the Nordics and, on request, the rest of the world.', 'La stessa cura, altri orizzonti: i Paesi nordici e, su richiesta, il resto del mondo.'),
  image: P.lofoten,
  alt: t('Red fishermen’s cabins below a granite peak in the Lofoten islands', 'Capanne rosse dei pescatori sotto un picco di granito alle Lofoten'),
  jump: [['#nordics', t('The Nordics', 'Paesi nordici')], ['#on-request', t('On request', 'Su richiesta')]],
})}

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
      <p class="lead">${t('Not on this page? Ask anyway.', 'Non è in questa pagina? Chiedetecela comunque.')}</p>
      ${btn(url('contact'), t('Request a quote', 'Richiedi un preventivo'))}
    </div>
  </div>
</section>

${ctaBand(ctx)}
`;

  return {
    title: t('Global Reach — Nordics and beyond | Travel Hub', 'Global Reach — Paesi nordici e altre destinazioni | Travel Hub'),
    description: t(
      'Group travel to Norway, Iceland, Finnish Lapland, Sweden and Denmark, and to other destinations on request.',
      'Viaggi di gruppo in Norvegia, Islanda, Lapponia finlandese, Svezia e Danimarca e in altre destinazioni su richiesta.'
    ),
    ogImage: imgUrl(P.lofoten, 1200, 0.525),
    body,
  };
}
