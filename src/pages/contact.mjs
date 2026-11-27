import { P, COMPANY } from '../data.mjs';
import { imgUrl, ICON, clock, telHref, pageHero } from '../lib.mjs';

export default function contact(ctx) {
  const { t, pick } = ctx;
  const [lug, nyc, ita] = COMPANY.offices;

  const field = (name, label, o = {}) => {
    const { type = 'text', req = false, ph = '', ac = '', cls = '' } = o;
    return `<label class="f ${cls}"><span class="f__l">${label}${req ? ' <i aria-hidden="true">*</i>' : ''}</span><input name="${name}" type="${type}"${req ? ' required' : ''}${ph ? ` placeholder="${ph}"` : ''}${ac ? ` autocomplete="${ac}"` : ''}><span class="f__err" aria-live="polite"></span></label>`;
  };
  const select = (name, label, opts, cls = '') =>
    `<label class="f f--sel ${cls}"><span class="f__l">${label}</span><select name="${name}">${opts.map((o) => `<option>${o}</option>`).join('')}</select></label>`;

  const body = `
${pageHero(ctx, {
  gate: 'E',
  kicker: t('Contact', 'Contatti'),
  title: t(['Let’s plan', 'your next group'], ['Organizziamo', 'il prossimo gruppo']),
  image: P.airportDusk,
  alt: t('Silhouettes of travellers in an airport terminal at sunset', 'Sagome di viaggiatori in un terminal al tramonto'),
  short: true,
  side: `<a class="hp__mail" href="mailto:${COMPANY.email}">${COMPANY.email}</a><a class="hp__tel" href="${telHref(lug.phone)}">${lug.phone}</a>`,
  jump: [['#form', t('Quote request', 'Richiesta di preventivo')]],
})}

<section class="sec contact">
  <div class="wrap contact__grid">
    <div class="contact__form" id="form">
      <p class="lead" data-r>${t('Destination, dates, group size and the itinerary you have in mind: that’s all we need to start.', 'Destinazione, periodo, numero di persone e l’itinerario che avete in mente: è tutto ciò che serve per partire.')}</p>
      <form class="form" data-form data-endpoint="" novalidate
        data-msg-required="${t('Please fill in this field.', 'Compila questo campo.')}"
        data-msg-email="${t('Please enter a valid email address.', 'Inserisci un indirizzo email valido.')}"
        data-msg-consent="${t('Please confirm to continue.', 'Conferma per continuare.')}"
        data-trip-prefix="${t('I’m interested in: ', 'Mi interessa: ')}">
        <div class="form__grid">
          ${field('name', t('Name and surname', 'Nome e cognome'), { req: true, ac: 'name' })}
          ${field('company', t('Company or agency', 'Azienda o agenzia'), { req: true, ac: 'organization' })}
          ${field('email', 'Email', { type: 'email', req: true, ac: 'email' })}
          ${field('phone', t('Phone', 'Telefono'), { type: 'tel', ac: 'tel' })}
          ${select('type', t('Type of request', 'Tipo di richiesta'), [
            t('Group tour', 'Tour di gruppo'),
            'Small group tour',
            t('Incentive or business travel', 'Incentive o viaggio aziendale'),
            t('Self-drive or private tour', 'Self-drive o tour privato'),
            t('Services only (hotels, transfers, guides)', 'Solo servizi (hotel, transfer, guide)'),
            t('Other', 'Altro'),
          ])}
          ${select('destination', t('Destination', 'Destinazione'), ['USA', 'Canada', 'USA + Canada', t('Nordics', 'Paesi nordici'), t('Other', 'Altro')])}
          ${field('period', t('Travel period', 'Periodo di viaggio'), { req: true, ph: t('e.g. May 2027, even approximate', 'es. maggio 2027, anche indicativo') })}
          ${field('pax', t('Number of travellers', 'Numero di partecipanti'), { type: 'number', ph: t('e.g. 24', 'es. 24') })}
          <label class="f f--full"><span class="f__l">${t('Tell us about the itinerary you have in mind', 'Raccontateci l’itinerario che avete in mente')} <i aria-hidden="true">*</i></span><textarea name="message" rows="5" required placeholder="${t('Stops, duration, hotel category, special requests…', 'Tappe, durata, categoria degli hotel, richieste particolari…')}"></textarea><span class="f__err" aria-live="polite"></span></label>
        </div>
        <label class="check"><input type="checkbox" name="consent" required><span class="check__box" aria-hidden="true"></span><span>${t('I agree that Travel Hub may use these details to reply to my request.', 'Acconsento all’uso di questi dati da parte di Travel Hub per rispondere alla mia richiesta.')}</span><span class="f__err" aria-live="polite"></span></label>
        <div class="form__foot">
          <button class="btn btn--sign" type="submit"><span>${t('Send request', 'Invia richiesta')}</span><i class="btn__ic">${ICON.arrow}</i></button>
          <p class="mute form__alt">${t('Prefer email?', 'Preferite l’email?')} <a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p>
        </div>
        <div class="form__done" role="status" hidden>
          <span class="form__done-ic">${ICON.plane}</span>
          <h2 class="d3">${t('Request received', 'Richiesta ricevuta')}</h2>
          <p class="lead">${t('Thank you. We’ll get back to you shortly.', 'Grazie. Vi ricontatteremo a breve.')}</p>
        </div>
        <p class="form__fail" role="alert" hidden>${t('Something went wrong. Please write to', 'Qualcosa non ha funzionato. Scriveteci a')} <a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p>
      </form>
    </div>

    <aside class="contact__aside">
      <div class="contact__block" data-r>
        <p class="label">Email</p>
        <a class="contact__mail" href="mailto:${COMPANY.email}">${COMPANY.email}</a>
      </div>
      <div class="contact__block" data-r>
        <p class="label">${t('Phone', 'Telefono')}</p>
        <ul class="contact__tels">
          <li><span>${t('Switzerland', 'Svizzera')}</span><a href="${telHref(lug.phone)}">${lug.phone}</a></li>
          <li><span>USA</span><a href="${telHref(nyc.phone)}">${nyc.phone}</a></li>
          <li><span>${t('Italy', 'Italia')}</span><a href="${telHref(ita.phone)}">${ita.phone}</a></li>
        </ul>
      </div>
      <div class="contact__block contact__offices" data-r>
        <p class="label">${t('Offices', 'Sedi')}</p>
        ${[lug, nyc]
          .map(
            (o) => `
        <div class="office">
          <div class="office__top"><strong>${pick(o.city)}</strong>${clock(ctx, o)}</div>
          <p class="mute">${pick(o.role)}<br>${o.lines.map((l) => pick(l)).join(', ')}</p>
        </div>`
          )
          .join('')}
      </div>
      <a class="contact__ig" href="${COMPANY.instagram}" target="_blank" rel="noopener" data-r>${ICON.ig}<span>@travel_hub_usa</span></a>
    </aside>
  </div>
</section>
`;

  return {
    title: t('Contact — Travel Hub', 'Contatti — Travel Hub'),
    description: t(
      'Request a quote for your group. Travel Hub, offices in Lugano and New York: sales@travel-hub.biz, +41 76 483 36 96, +1 646 269 7133.',
      'Richiedete un preventivo per il vostro gruppo. Travel Hub, sedi a Lugano e New York: sales@travel-hub.biz, +41 76 483 36 96, +1 646 269 7133.'
    ),
    ogImage: imgUrl(P.airportDusk, 1200, 0.525),
    body,
  };
}
