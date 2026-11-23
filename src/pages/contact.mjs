import { P, COMPANY } from '../data.mjs';
import { img, imgUrl, lines, ICON, clock, telHref, pageHero } from '../lib.mjs';

export default function contact(ctx) {
  const { t, pick } = ctx;
  const [mia, lug, ita] = COMPANY.offices;

  const field = (name, label, o = {}) => {
    const { type = 'text', req = false, ph = '', ac = '', cls = '' } = o;
    return `<label class="f ${cls}"><span class="f__l">${label}${req ? ' <i aria-hidden="true">*</i>' : ''}</span><input name="${name}" type="${type}"${req ? ' required' : ''}${ph ? ` placeholder="${ph}"` : ''}${ac ? ` autocomplete="${ac}"` : ''}><span class="f__err" aria-live="polite"></span></label>`;
  };
  const select = (name, label, opts, cls = '') =>
    `<label class="f f--sel ${cls}"><span class="f__l">${label}</span><select name="${name}">${opts.map((o) => `<option>${o}</option>`).join('')}</select></label>`;

  const body = `
${pageHero(ctx, {
  gate: 'D',
  kicker: t('Contact', 'Contatti'),
  title: t(['Let’s plan', 'your next group'], ['Organizziamo', 'il prossimo gruppo']),
  image: P.airportDusk,
  alt: t('Silhouettes of travellers in an airport terminal at sunset', 'Sagome di viaggiatori in un terminal al tramonto'),
  short: true,
  side: `<a class="hp__mail" href="mailto:${COMPANY.email}">${COMPANY.email}</a><a class="hp__tel" href="${telHref(lug.phone)}">${lug.phone}</a>`,
  jump: [['#form', t('Request form', 'Modulo di richiesta')]],
})}

<section class="sec contact">
  <div class="wrap contact__grid">
    <div class="contact__form" id="form">
      <p class="lead" data-r>${t('Send us the basics: destination, dates, number of travellers. We’ll reply with a few questions or a first proposal.', 'Mandateci le informazioni di base: destinazione, date, numero di partecipanti. Vi risponderemo con qualche domanda o con una prima proposta.')}</p>
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
            t('Services only (hotels, transfers, guides)', 'Solo servizi (hotel, transfer, guide)'),
            t('Other', 'Altro'),
          ])}
          ${select('destination', t('Destination', 'Destinazione'), ['USA', 'Canada', 'USA + Canada', t('Nordics', 'Paesi nordici'), t('Other', 'Altro')])}
          ${field('period', t('Travel period', 'Periodo di viaggio'), { ph: t('e.g. May 2027', 'es. maggio 2027') })}
          ${field('pax', t('Number of travellers', 'Numero di partecipanti'), { type: 'number', ph: t('e.g. 24', 'es. 24') })}
          <label class="f f--full"><span class="f__l">${t('Message', 'Messaggio')}</span><textarea name="message" rows="5" placeholder="${t('Itinerary ideas, hotel category, special requests…', 'Idee di itinerario, categoria degli hotel, richieste particolari…')}"></textarea></label>
        </div>
        <label class="check"><input type="checkbox" name="consent" required><span class="check__box" aria-hidden="true"></span><span>${t('I agree that Travel Hub may use these details to reply to my request.', 'Acconsento all’uso di questi dati da parte di Travel Hub per rispondere alla mia richiesta.')}</span><span class="f__err" aria-live="polite"></span></label>
        <div class="form__foot">
          <button class="btn btn--sign" type="submit"><span>${t('Send request', 'Invia richiesta')}</span><i class="btn__ic">${ICON.arrow}</i></button>
          <p class="mute form__alt">${t('Prefer email?', 'Preferite l’email?')} <a href="mailto:${COMPANY.email}">${COMPANY.email}</a></p>
        </div>
        <div class="form__done" role="status" hidden>
          <span class="form__done-ic">${ICON.plane}</span>
          <h2 class="d3">${t('Request received', 'Richiesta ricevuta')}</h2>
          <p class="lead">${t('Thank you. We’ll get back to you shortly with questions or a first proposal.', 'Grazie. Vi ricontatteremo a breve con qualche domanda o con una prima proposta.')}</p>
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
          <li><span>USA</span><a href="${telHref(mia.phone)}">${mia.phone}</a></li>
          <li><span>${t('Italy · booking', 'Italia · booking')}</span><a href="${telHref(ita.phone)}">${ita.phone}</a></li>
          <li><span></span><a href="${telHref(ita.phone2)}">${ita.phone2}</a></li>
        </ul>
      </div>
      <div class="contact__block contact__offices" data-r>
        <p class="label">${t('Offices', 'Sedi')}</p>
        ${[mia, lug]
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
      'Request a proposal for your group. Travel Hub, offices in Miami and Bioggio (Lugano): sales@travel-hub.biz, +41 76 483 36 96, +1 786 654 4670.',
      'Richiedi una proposta per il tuo gruppo. Travel Hub, sedi a Miami e Bioggio (Lugano): sales@travel-hub.biz, +41 76 483 36 96, +1 786 654 4670.'
    ),
    ogImage: imgUrl(P.airportDusk, 1200, 0.525),
    body,
  };
}
