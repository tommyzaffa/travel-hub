/* Travel Hub — interactions
   GSAP + ScrollTrigger + Lenis (loaded from CDN, deferred) */
(() => {
  'use strict';

  const d = document;
  const html = d.documentElement;
  const body = d.body;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const store = (s) => ({
    get: (k) => { try { return s().getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { s().setItem(k, v); } catch (e) {} },
    del: (k) => { try { s().removeItem(k); } catch (e) {} },
  });
  const ss = store(() => sessionStorage);
  const ls = store(() => localStorage);

  const gsap = window.gsap;
  const ST = window.ScrollTrigger;
  const anim = !!(gsap && ST) && !reduce;
  if (anim) gsap.registerPlugin(ST);
  else html.classList.add('no-anim');

  /* ---------------- hero image: fade in over the placeholder ---------------- */
  d.querySelectorAll('[data-hero-media] img').forEach((im) => {
    const ok = () => im.classList.add('is-loaded');
    if (im.complete && im.naturalWidth) ok();
    else { im.addEventListener('load', ok, { once: true }); im.addEventListener('error', ok, { once: true }); }
  });

  /* ---------------- rails: arrow buttons ---------------- */
  d.querySelectorAll('[data-rail-btn]').forEach((b) => {
    b.addEventListener('click', () => {
      const rail = d.querySelector('[data-rail]');
      const card = rail && rail.querySelector('.rail__card');
      if (!card) return;
      const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap || 20);
      rail.scrollBy({ left: step * Number(b.dataset.railBtn), behavior: 'smooth' });
    });
  });

  /* ---------------- clocks ---------------- */
  const fmts = {};
  const tick = () => {
    d.querySelectorAll('[data-clock]').forEach((el) => {
      const tz = el.dataset.clock;
      try {
        fmts[tz] = fmts[tz] || new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz });
        const [h, m] = fmts[tz].format(new Date()).split(':');
        const t = el.querySelector('.clock__t');
        if (t) t.innerHTML = `${h}<span class="clock__sep">:</span>${m}`;
      } catch (e) {}
    });
  };
  tick();
  setInterval(tick, 15000);

  /* ---------------- split-flap ---------------- */
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const prepFlap = (el, blank) => {
    const text = el.dataset.text || el.textContent;
    el.setAttribute('aria-label', text);
    el.setAttribute('role', 'text');
    el.innerHTML = [...text]
      .map((ch) => (ch === ' ' ? '<span class="c sp" aria-hidden="true">&nbsp;</span>' : `<span class="c" aria-hidden="true" data-f="${ch}">${blank ? '&nbsp;' : ch}</span>`))
      .join('');
  };
  const runFlap = (el, speed = 1) => {
    const cells = [...el.querySelectorAll('.c[data-f]')];
    const t0 = performance.now();
    cells.forEach((c, i) => {
      const final = c.dataset.f;
      const delay = (i * 38 + Math.random() * 120) * speed;
      const end = delay + (280 + Math.random() * 520) * speed;
      let last = 0;
      const step = (now) => {
        const t = now - t0;
        if (t < delay) return requestAnimationFrame(step);
        if (t >= end) { c.textContent = final; return; }
        if (now - last > 55) { c.textContent = CHARS[(Math.random() * CHARS.length) | 0]; last = now; }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };

  /* ---------------- smooth scroll ---------------- */
  let lenis = null;
  if (anim && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', ST.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const hdrH = () => d.querySelector('[data-hdr]').offsetHeight;
  const scrollToEl = (el) => {
    if (lenis) lenis.scrollTo(el, { offset: -hdrH() - 8, duration: 1.4 });
    else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };
  d.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = d.getElementById(id.slice(1));
    if (!target) return;
    e.preventDefault();
    scrollToEl(target);
    history.replaceState(null, '', id);
  });

  /* ---------------- header ---------------- */
  const hdr = d.querySelector('[data-hdr]');
  const prog = d.querySelector('.hdr__progress');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    hdr.classList.toggle('is-solid', y > 40);
    if (!body.classList.contains('menu-open') && Math.abs(y - lastY) > 4) {
      hdr.classList.toggle('is-hidden', y > lastY && y > 360);
      lastY = y;
    }
    const max = html.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
  };
  if (lenis) lenis.on('scroll', onScroll);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- menu ---------------- */
  const burger = d.querySelector('.burger');
  const menu = d.getElementById('menu');
  if (burger && menu) {
    burger.dataset.labelOpen = burger.getAttribute('aria-label');
    menu.inert = true;
    const setMenu = (open) => {
      body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? burger.dataset.labelClose : burger.dataset.labelOpen);
      menu.setAttribute('aria-hidden', String(!open));
      menu.inert = !open;
      if (lenis) open ? lenis.stop() : lenis.start();
      else body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setMenu(!body.classList.contains('menu-open')));
    d.addEventListener('keydown', (e) => { if (e.key === 'Escape' && body.classList.contains('menu-open')) setMenu(false); });
    addEventListener('resize', () => { if (innerWidth > 1080 && body.classList.contains('menu-open')) setMenu(false); });
  }

  /* ---------------- language preference ---------------- */
  d.querySelectorAll('[data-lang]').forEach((a) => a.addEventListener('click', () => ls.set('th-lang', a.dataset.lang)));

  /* ---------------- page transitions ---------------- */
  const curtain = d.querySelector('.curtain');
  const signBox = curtain && curtain.querySelector('.curtain__sign');
  const signTxt = signBox && signBox.querySelector('b');

  const internal = (a) => {
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return false;
    const href = a.getAttribute('href') || '';
    if (!href || href[0] === '#' || /^(mailto|tel):/i.test(href)) return false;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin) return false;
    if (u.pathname === location.pathname && u.search === location.search) return false;
    return true;
  };
  const labelFor = (a) => {
    if (a.dataset.label) return a.dataset.label;
    if (a.dataset.lang) return a.dataset.lang === 'it' ? 'Italiano' : 'English';
    if (a.classList.contains('logo')) return 'Travel Hub';
    const tEl = a.querySelector('.menu__t, span, h3') || a;
    const txt = (tEl.textContent || '').trim().replace(/\s+/g, ' ');
    return txt && txt.length < 34 ? txt : 'Travel Hub';
  };

  if (anim && curtain) {
    gsap.set(signBox, { opacity: 0, y: 14 });
    if (html.classList.contains('from-nav')) {
      ss.del('th-nav');
      gsap.set(curtain, { yPercent: 0 });
      html.classList.remove('from-nav');
      gsap.to(curtain, {
        yPercent: -100, duration: 0.8, ease: 'power3.inOut', delay: 0.05,
        onComplete: () => gsap.set(curtain, { yPercent: 100 }),
      });
    } else {
      gsap.set(curtain, { yPercent: 100 });
    }
    d.addEventListener('click', (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest('a');
      if (!internal(a)) return;
      e.preventDefault();
      signTxt.textContent = labelFor(a);
      ss.set('th-nav', '1');
      gsap.timeline({ onComplete: () => { location.href = a.href; } })
        .set(curtain, { yPercent: 100 })
        .to(curtain, { yPercent: 0, duration: 0.6, ease: 'power3.inOut' })
        .to(signBox, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2')
        .to({}, { duration: 0.12 });
    });
    addEventListener('pageshow', (e) => {
      if (!e.persisted) return;
      ss.del('th-nav');
      gsap.set(curtain, { yPercent: 100 });
      gsap.set(signBox, { opacity: 0, y: 14 });
    });
  } else {
    html.classList.remove('from-nav');
    ss.del('th-nav');
  }

  /* ---------------- intro screen (first visit per session) ---------------- */
  let heroDelay = 0.15;
  if (html.classList.contains('intro')) {
    ss.set('th-intro', '1');
    const scr = d.querySelector('.intro-screen');
    if (!anim || !scr) {
      html.classList.remove('intro');
    } else {
      const f = scr.querySelector('.flap');
      prepFlap(f, true);
      if (lenis) lenis.stop();
      setTimeout(() => runFlap(f, 0.9), 120);
      heroDelay = 1.55;
      gsap.timeline({ delay: 1.45 })
        .to(scr.querySelector('.intro-screen__in'), { opacity: 0, y: -20, duration: 0.35, ease: 'power2.in' })
        .to(scr, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '-=0.1')
        .add(() => {
          html.classList.remove('intro');
          scr.remove();
          if (lenis) lenis.start();
        });
    }
  }

  /* ---------------- board flaps ---------------- */
  const boardFlaps = [...d.querySelectorAll('.board .flap')];
  boardFlaps.forEach((f) => prepFlap(f, anim));

  /* ---------------- home hero: flip-board slideshow ---------------- */
  const hx = d.querySelector('.hx');
  const hxData = d.getElementById('hero-data');
  if (hx && hxData) {
    html.classList.add('hx-ready');
    const data = JSON.parse(hxData.textContent);
    const items = data.items;
    const flapEl = hx.querySelector('[data-hero-flap]');
    const win = hx.querySelector('.hx__win');
    const imgs = [...win.querySelectorAll('img')];
    const codeEl = hx.querySelector('.hx__code');
    const nameEl = hx.querySelector('.hx__name');
    const statusEl = hx.querySelector('.hx__plate .status');
    const gates = [...hx.querySelectorAll('[data-go]')];
    const bar = hx.querySelector('.hx__bar i');
    const DUR = 4.4;

    flapEl.innerHTML = Array.from({ length: data.len }, () => '<span class="c" data-f="">&nbsp;</span>').join('');
    const cells = [...flapEl.children];
    const flick = (c, final, delay) => {
      const t0 = performance.now();
      const end = delay + 240 + Math.random() * 360;
      let last = 0;
      const step = (now) => {
        const t = now - t0;
        if (t < delay) return requestAnimationFrame(step);
        if (t >= end) { c.textContent = final || ' '; return; }
        if (now - last > 50) { c.textContent = CHARS[(Math.random() * CHARS.length) | 0]; last = now; }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const flipTo = (word, animate) => {
      const chars = [...word];
      cells.forEach((c, i) => {
        const f = chars[i] && chars[i] !== ' ' ? chars[i] : '';
        if (c.dataset.f === f && c.dataset.set) return;
        c.dataset.f = f;
        c.dataset.set = '1';
        if (animate) flick(c, f, i * 42);
        else c.textContent = f || ' ';
      });
    };
    const load = (i) => {
      const im = imgs[i];
      if (im && !im.getAttribute('src') && im.dataset.src) {
        im.srcset = im.dataset.srcset;
        im.src = im.dataset.src;
      }
      return im;
    };
    const reveal = (i) => {
      const im = load(i);
      const swap = () => { if (cur === i) imgs.forEach((x, k) => x.classList.toggle('is-on', k === i)); };
      if (im.complete && im.naturalWidth) requestAnimationFrame(swap);
      else im.addEventListener('load', swap, { once: true });
    };

    let cur = 0;
    let timer = null;
    let visible = true;
    const restart = () => {
      if (!anim) return;
      if (timer) timer.kill();
      timer = gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: DUR, ease: 'none', onComplete: () => show(cur + 1) });
      if (!visible || d.hidden) timer.pause();
    };
    const show = (i, animate = anim) => {
      cur = (i + items.length) % items.length;
      const it = items[cur];
      reveal(cur);
      flipTo(it.word, animate);
      codeEl.textContent = it.code;
      nameEl.textContent = it.name;
      statusEl.textContent = it.status;
      statusEl.classList.toggle('status--req', !!it.req);
      win.href = it.href;
      win.dataset.label = it.label;
      win.setAttribute('aria-label', it.name);
      gates.forEach((g, k) => { g.classList.toggle('is-on', k === cur); g.setAttribute('aria-pressed', String(k === cur)); });
      load((cur + 1) % items.length); // preload the next photo
      restart();
    };

    gates.forEach((g, k) => g.addEventListener('click', () => show(k)));
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (timer) visible && !d.hidden ? timer.resume() : timer.pause();
      }).observe(hx);
    }
    d.addEventListener('visibilitychange', () => { if (timer) d.hidden || !visible ? timer.pause() : timer.resume(); });

    flipTo('', false);
    reveal(0);
    if (anim) setTimeout(() => show(0, true), (heroDelay + 0.45) * 1000);
    else show(0, false);
  }

  if (!anim) return; // everything below is animation only

  /* ---------------- helpers: split words ---------------- */
  const splitWords = (el, cls) => {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = d.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(d.createTextNode(' ')); return; }
            const w = d.createElement('span');
            w.className = cls;
            const i = d.createElement('span');
            i.textContent = p;
            w.appendChild(i);
            frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'BR' && !n.classList.contains('inl')) {
          walk(n);
        }
      });
    };
    walk(el);
    return el.querySelectorAll(`.${cls} > span`);
  };

  /* ---------------- hero entrance ---------------- */
  const hero = d.querySelector('[data-hero]');
  if (hero) {
    const lns = hero.querySelectorAll('.ln > span');
    const rest = hero.querySelectorAll('[data-hero-rest]');
    const sign = hero.querySelector('.hp__gate, .hx__arr');
    const win = hero.querySelector('.hx__win, .hp__win');
    const pageImg = hero.querySelector('.hp__win img');
    gsap.set(lns, { y: 0, yPercent: 108 });
    gsap.set(rest, { opacity: 0, y: 20 });
    if (sign) gsap.set(sign, { scale: 0 });
    if (win) gsap.set(win, { clipPath: 'inset(100% 0% 0% 0%)' });
    const tl = gsap.timeline({ delay: heroDelay });
    tl.to(lns, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.08 }, 0);
    if (sign) tl.to(sign, { scale: 1, duration: 0.8, ease: 'back.out(2.2)' }, 0.2);
    if (win) tl.to(win, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut' }, 0.05);
    if (pageImg) tl.fromTo(pageImg, { scale: 1.2 }, { scale: 1, duration: 1.8, ease: 'power3.out' }, 0.05);
    tl.to(rest, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }, 0.35);
    if (pageImg) {
      gsap.to(pageImg, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    }
  }

  /* ---------------- headings: word reveal ---------------- */
  d.querySelectorAll('[data-split]').forEach((el) => {
    const words = splitWords(el, 'w');
    gsap.set(words, { yPercent: 110 });
    ST.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.to(words, { yPercent: 0, duration: 1.05, ease: 'power4.out', stagger: 0.045 }),
    });
  });

  /* ---------------- statement: words light up while scrolling ---------------- */
  d.querySelectorAll('[data-words]').forEach((el) => {
    const words = [...splitWords(el, 'sw')].map((s) => s.parentNode);
    const items = [...el.querySelectorAll('.sw, .inl')];
    gsap.fromTo(items, { opacity: 0.14 }, {
      opacity: 1, ease: 'none', stagger: 0.06,
      scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 52%', scrub: 0.6 },
    });
    return words;
  });

  /* ---------------- generic reveals ---------------- */
  gsap.set('[data-r]', { opacity: 0, y: 28 });
  ST.batch('[data-r]', {
    start: 'top 90%', once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.08, overwrite: true }),
  });

  d.querySelectorAll('[data-clip]').forEach((el) => {
    const im = el.querySelector('img');
    gsap.set(el, { clipPath: 'inset(100% 0% 0% 0%)' });
    ST.create({
      trigger: el, start: 'top 90%', once: true,
      onEnter: () => {
        gsap.to(el, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.35, ease: 'power4.inOut' });
        if (im) gsap.fromTo(im, { scale: 1.22 }, { scale: 1, duration: 1.8, ease: 'power3.out', onComplete: () => gsap.set(im, { clearProps: 'transform' }) });
      },
    });
  });

  d.querySelectorAll('[data-parallax]').forEach((el) => {
    gsap.fromTo(el, { yPercent: -9 }, {
      yPercent: 9, ease: 'none',
      scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* ---------------- departure board ---------------- */
  const table = d.querySelector('.board__table');
  if (table) {
    ST.create({
      trigger: table, start: 'top 82%', once: true,
      onEnter: () => {
        d.querySelectorAll('.board__row:not(.board__row--head)').forEach((row, i) => {
          setTimeout(() => row.querySelectorAll('.flap').forEach((f) => runFlap(f)), i * 110);
        });
        // preload hover images
        d.querySelectorAll('[data-peek]').forEach((el) => { const im = new Image(); im.src = el.dataset.peek; });
      },
    });
  }

  /* ---------------- hover preview ("peek") ---------------- */
  const peek = d.querySelector('.peek');
  const peekIn = peek && peek.querySelector('.peek__in');
  if (fine && peek && d.querySelector('[data-peek]')) {
    const xTo = gsap.quickTo(peek, 'x', { duration: 0.7, ease: 'power3' });
    const yTo = gsap.quickTo(peek, 'y', { duration: 0.7, ease: 'power3' });
    let cur = null;
    const cache = {};
    const show = (url) => {
      if (cur === url) return;
      cur = url;
      let im = cache[url];
      if (!im) { im = new Image(); im.src = url; im.alt = ''; cache[url] = im; }
      [...peekIn.children].forEach((o) => { if (o !== im) gsap.to(o, { opacity: 0, duration: 0.35, onComplete: () => o.remove() }); });
      if (im.parentNode !== peekIn) {
        peekIn.appendChild(im);
        gsap.fromTo(im, { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' });
      }
      peek.classList.add('is-on');
      gsap.to(peek, { opacity: 1, duration: 0.3 });
    };
    const hide = () => {
      cur = null;
      peek.classList.remove('is-on');
      gsap.to(peek, { opacity: 0, duration: 0.3 });
    };
    d.querySelectorAll('[data-peek]').forEach((el) => {
      el.addEventListener('mouseenter', () => show(el.dataset.peek));
      el.addEventListener('mouseleave', hide);
    });
    addEventListener('mousemove', (e) => {
      const w = peek.offsetWidth;
      const h = peek.offsetHeight;
      let x = e.clientX + 36;
      if (x + w > innerWidth - 16) x = e.clientX - w - 36;
      xTo(x);
      yTo(Math.max(16, Math.min(innerHeight - h - 16, e.clientY - h / 2)));
    }, { passive: true });
    if (lenis) lenis.on('scroll', () => { if (cur) hide(); });
  }

  /* ---------------- refresh on layout changes ---------------- */
  d.querySelectorAll('details').forEach((el) => el.addEventListener('toggle', () => ST.refresh()));
  addEventListener('load', () => ST.refresh());
  if (d.fonts && d.fonts.ready) d.fonts.ready.then(() => ST.refresh());
})();

/* ---------------- horizontal rails: drag with mouse ---------------- */
(() => {
  document.querySelectorAll('[data-rail]').forEach((rail) => {
    let down = false, startX = 0, startL = 0, moved = false;
    rail.addEventListener('mousedown', (e) => {
      down = true; moved = false; startX = e.clientX; startL = rail.scrollLeft;
      e.preventDefault();
    });
    addEventListener('mousemove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) { moved = true; rail.classList.add('is-drag'); }
      rail.scrollLeft = startL - dx;
    });
    addEventListener('mouseup', () => {
      if (!down) return;
      down = false;
      setTimeout(() => rail.classList.remove('is-drag'), 0);
    });
    rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  });
})();

/* ---------------- contact form ---------------- */
(() => {
  const form = document.querySelector('[data-form]');
  if (!form) return;
  const msg = {
    required: form.dataset.msgRequired,
    email: form.dataset.msgEmail,
    consent: form.dataset.msgConsent,
  };

  // prefill from ?trip=
  const trip = new URLSearchParams(location.search).get('trip');
  if (trip) {
    const ta = form.querySelector('textarea[name="message"]');
    if (ta && !ta.value) ta.value = `${form.dataset.tripPrefix}${trip}\n\n`;
    const type = form.querySelector('select[name="type"]');
    if (type && /small group/i.test(trip)) type.value = 'Small group tour';
  }

  const errOf = (input) => input.closest('.f, .check').querySelector('.f__err');
  const check = (input) => {
    let m = '';
    if (input.type === 'checkbox') { if (input.required && !input.checked) m = msg.consent; }
    else if (input.required && !input.value.trim()) m = msg.required;
    else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) m = msg.email;
    const holder = input.closest('.f, .check');
    holder.classList.toggle('is-bad', !!m);
    const e = errOf(input);
    if (e) e.textContent = m;
    input.setAttribute('aria-invalid', m ? 'true' : 'false');
    return !m;
  };
  const fields = [...form.querySelectorAll('input[required], input[type="email"]')];
  fields.forEach((i) => {
    i.addEventListener('blur', () => { if (i.value || i.type === 'checkbox') check(i); });
    i.addEventListener('input', () => { if (i.closest('.is-bad')) check(i); });
    i.addEventListener('change', () => { if (i.type === 'checkbox') check(i); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const bad = fields.filter((i) => !check(i));
    if (bad.length) { bad[0].focus(); return; }
    form.classList.add('is-sending');
    const fail = form.querySelector('.form__fail');
    fail.hidden = true;
    const ep = form.dataset.endpoint;
    const send = ep
      ? fetch(ep, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }).then((r) => { if (!r.ok) throw new Error(String(r.status)); })
      : new Promise((r) => setTimeout(r, 700)); // demo mode: no endpoint configured yet
    send
      .then(() => {
        form.classList.add('is-done');
        const done = form.querySelector('.form__done');
        done.hidden = false;
        if (window.gsap) window.gsap.fromTo(done, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
        done.setAttribute('tabindex', '-1');
        done.focus({ preventScroll: true });
      })
      .catch(() => { fail.hidden = false; })
      .finally(() => form.classList.remove('is-sending'));
  });
})();
