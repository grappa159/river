/* =========================================================
   Ривер — настройки (правьте здесь)
   ========================================================= */
const CONFIG = {
  whatsapp: '73422368000',
  // 0 = воскресенье … 6 = суббота (по данным Яндекс Карт)
  hours: [
    ['10:00', '23:00'], // Вс
    ['08:00', '22:00'], // Пн
    ['08:00', '22:00'], // Вт
    ['08:00', '22:00'], // Ср
    ['08:00', '22:00'], // Чт
    ['08:00', '23:00'], // Пт
    ['10:00', '23:00'], // Сб
  ],
  dayFrom: '12:00',     // начало «дня» (обед)
  eveningFrom: '17:00', // начало «вечера» (ужин)
};

/* Меню: [название, вес, состав, цена, new?] — по меню ресторана на Яндекс Картах
   и фото меню (десерты, напитки, коктейли) */
const MENU = {
  'Закуски': [
    ['Антипасти', '230 г', 'мясо двух видов, фуэт, пармезан, камамбер, сыр с плесенью, оливки', 1200],
    ['Сырная тарелка', '140 г', 'пармезан, бри, сыр с плесенью, мёд, инжир в вине и орехи', 650],
    ['Бабагануш', '180 г', 'тартин, баклажаны, сливочный сыр и специи', 360],
    ['Маринованные оливки', '60 г', 'греческие сорта Халкидики и Каламата', 390],
    ['Грибная икра со страчателлой и вялеными томатами', '140 г', 'грибная икра, сыр страчателла, вяленые томаты и багет', 390],
    ['Тартар из мраморной говядины', '140 г', 'говядина, каперсы, горчица, желток, пармезан и бородинские гренки', 720],
    ['Карпаччо из осьминога с лаймовым сорбетом', '140 г', 'осьминог, средиземноморская заправка, лайм', 790],
    ['Карпаччо из тунца с соусом тамаринд', '140 г', 'тунец, оливковое масло, соус тамаринд, сок лимона и лайма', 650],
    ['Буррата с томатами', '180 г', 'буррата, томаты, песто, зелень, заправка', 790],
    ['Риет из форели', '180 г', 'форель, творожный сыр, зелень и масла, багет', 690],
    ['Пирожки с морепродуктами', '220 г', 'слоёное тесто, рыба, креветки, творожный сыр, соусы манго-чили и тартар', 570],
    ['Пирожки с томлёной мраморной грудинкой', '180 г', 'слоёное тесто, говядина bbq, зелёный горошек, соусы тартар и чимичурри', 360],
    ['Крокеты с разварной говядиной bbq и сырным муссом', '180 г', 'говядина в сухарях панко, сырный мусс', 390],
    ['Тостада с лососем', '150 г', 'опалённый лосось, гуакамоле, чипсы из рисовой муки', 790],
  ],
  'Салаты': [
    ['Зелёный салат с киноа и авокадо', '240 г', 'микс салата, огурцы, редис, шпинат, бобы эдамаме, брокколи, киноа, авокадо, семена тыквы, медово-горчичная заправка', 590],
    ['Салат с форелью', '240 г', 'микс салата, форель су-вид, картофельные дольки, яйцо, томат, соус тартар', 790],
    ['Цезарь с курицей', '260 г', 'микс салата, куриное филе, томаты, соус цезарь, сухари из чиабатты', 540],
    ['Цезарь с креветками', '260 г', 'микс салата, тигровые креветки, томаты, соус цезарь, сухари из чиабатты', 650],
    ['Стейк-салат', '220 г', 'вырезка из говядины, микс салата, томаты, картофельные дольки, домашний соус и терияки', 790],
    ['Салат с вяленой уткой, инжиром в вине и сырным кремом', '230 г', 'утиная грудка, инжир, микс салата, апельсин, сырный крем, фундук, медово-лимонная заправка', 690],
  ],
  'Супы': [
    ['Томатный суп чоппино с морепродуктами', '300 г', 'мидии, судак, форель, креветки, томат, специи', 590],
    ['Суп-гуляш из мраморной говядины', '300 г', 'разварная говядина, томат, лук, морковь, картофель, чеснок, тимьян, сметана, зелень', 590],
    ['Зелёный суп-пюре со страчателлой', '300 г', 'шпинат, брокколи, сливки, творожный сыр, чеснок, лук, тимьян', 490],
    ['Суп-лапша с мисо-бульоном и говядиной ростбиф', '320 г', 'мисо-бульон, лапша, говядина ростбиф, сливки, зелень, горошек, соус якитори, кунжут', 610],
  ],
  'Паста и равиоли': [
    ['Феттучини с морепродуктами', '390 г', 'паста, тигровые креветки, мидии, сливочный соус', 740],
    ['Спагетти аль помодоро со страчателлой', '390 г', 'паста, страчателла, соус томат-базилик', 620],
    ['Паста с разварной говядиной брискет', '390 г', 'паста, разварная говядина, соус чимичурри, пармезан', 690],
    ['Паста фузилли с курицей и сливочно-шпинатным соусом', '300 г', 'паста, курица, сливочно-шпинатный соус и пармезан', 590, 1],
    ['Грибные равиоли с сырным муссом', '300 г', 'тесто, грибы, сырный мусс, сливочный соус, трюфельное масло', 590],
    ['Равиоли с креветками в соусе биск', '260 г', 'тесто, креветки, соусы устричный и биск, пармезан, кинза', 710],
    ['Равиоли с разварной говядиной и соусом bbq', '260 г', 'тесто, говядина, мясной соус, пармезан, зелень', 690, 1],
  ],
  'Горячее': [
    ['Куриные биточки с картофельным пюре', '360 г', 'куриный фарш, картофельное пюре, маринованные огурцы, соус жю', 590, 1],
    ['Грудинка брискет с картофельным пюре и соусом демиглас', '310 г', 'томлёная говядина, картофельное пюре, брокколи, маринованные огурцы и лук, соус демиглас', 750],
    ['Бургер смэш с котлетой из говядины', '330 г', '', 790],
    ['Бифштекс из мраморной говядины с миксом салата и соусом bbq', '230 г', '', 690],
    ['Рибай со свежим салатом и соусом демиглас', '390 г', '', 1890],
    ['Медальоны из мраморной вырезки', '350 г', 'говядина, картофельный пай, соус, трюфельное масло', 2100, 1],
    ['Судак в соусе бёр-блан с картофельным пюре', '310 г', 'филе рыбы, картофельное пюре, брокколи, зелёный горошек, соус бёр-блан', 790],
    ['Стейк из форели с птитим и сливочно-грибным соусом', '270 г', 'рыба, птитим, грибы, обжаренный шпинат, сливочный соус', 980],
    ['Креветки с соусом манго-чили и хрустящим багетом с песто', '250 г', '', 990],
    ['Осьминог с печёным томатом и кремом из моркови', '270 г', '', 2190],
  ],
  'Десерты': [
    ['Ромовая баба', '', 'тесто по классической рецептуре, сироп на основе рома и апельсинов, крем на основе белого шоколада, ванили и сливок', 390],
    ['Карамелизированное канеле со сливочным муссом и мороженым крем-брюле', '', '', 420, 1],
    ['Баскский чизкейк', '', 'нежная творожная основа с ванильной пастой и вишнёвым компоте', 390],
    ['Клубничное тирамису', '', 'печенье савоярди, сыр маскарпоне, сливки, клубника', 390],
    ['Меренговый рулет', '', 'меренга, крем-чиз, соус из малины, миндаль, клубника', 390],
    ['Брауни', '', 'воздушный бисквит на основе какао, глазурь на тёмном шоколаде, фундук', 210],
    ['Тарт с сезонными ягодами', '', 'тарталетка из песочного теста, заварной крем, сезонные ягоды', 380],
    ['Эклер с заварным кремом', '', '', 260],
    ['Мадлен с лаймовой глазурью', '', 'бисквитное печенье с цедрой и сиропом лайма, белый шоколад', 180],
    ['Канеле', '', 'в ассортименте: с фундуком / с фисташкой', 250],
    ['Шарик мороженого', '', 'шоколадное / пломбир / крем-брюле', 140],
    ['Сорбет', '', 'в ассортименте', 290],
  ],
  'Напитки': [
    ['Лимонад манго — маракуйя', '400 мл', '1 л — 760 ₽', 380],
    ['Лимонад смородина — базилик', '400 мл', '1 л — 760 ₽', 380],
    ['Грушевый мохито (б/а)', '400 мл', '1 л — 760 ₽', 380],
    ['Айс латте', '330 мл', '', 310],
    ['Айс матча манго', '300 мл', '', 380],
    ['Айс матча земляника', '300 мл', '', 380],
    ['Смузи малина — персик', '500 мл', '', 420],
    ['Смузи манго', '500 мл', '', 420],
    ['Зелёный смузи', '400 мл', '', 420],
    ['Молочный коктейль', '300 мл', 'ванильный / клубничный / шоколадный', 420],
    ['Морс облепиховый', '200 мл', '1 л — 790 ₽', 180],
    ['Морс клюквенный', '200 мл', '1 л — 790 ₽', 180],
    ['Свежевыжатый сок', '100 мл', 'апельсиновый / грейпфрутовый / яблочный / морковный', 280],
  ],
  'Коктейли': [
    ['Aperol Spritz', '', 'игристое вино, апероль, содовая', 690],
    ['Campari Spritz', '', 'игристое вино, Кампари, содовая', 690],
    ['Bellini', '', 'игристое вино, персиковое пюре', 690],
    ['Negroni', '', 'джин, вермут россо, кампари', 690],
    ['New York Sour', '', 'бурбон, красное вино, лимонный сок, сахарный сироп, заменитель яичного белка', 690],
    ['Clover Club', '', 'джин, малина, лимонный сок, сахарный сироп, заменитель яичного белка', 690],
    ['Paloma', '', 'текила, грейпфрутовый фреш, содовая, сок лимона, сироп маракуйи', 690],
    ['Basil Smash', '', 'джин, базилик, лимон, сахарный сироп', 690],
    ['Margarita', '', 'текила, апельсиновый ликёр, сок лайма', 690],
    ['Пина колада', '', 'ром, ананасовый сок, сливки, кокосовое молоко, лимон, кокосовый сироп', 690],
    ['Мохито', '', 'ром, мята, лайм, содовая, сахарный сироп', 690],
    ['Long Island Ice Tea', '', 'водка, джин, ром, текила, ликёр трипл сек, сахарный сироп, лимонный сок, кола', 790],
  ],
};

/* «Что сейчас подают» — только реальные позиции меню */
const PHASES = {
  morning: {
    kicker: 'Утро · завтраки до 16:00',
    title: 'Завтраки и кофе',
    text: 'Утром в «Ривере» действует отдельное меню завтраков — гости хвалят сырники. Полный состав завтраков уточняйте у официанта, а к ним из меню:',
    img: 'img/morning-table.jpg',
    alt: 'Завтрак в «Ривере»',
    items: [
      ['Сырники', 'из меню завтраков', null],
      ['Свежевыжатый апельсиновый сок', '100 мл', 280],
      ['Смузи малина — персик', '500 мл', 420],
      ['Айс латте', '330 мл', 310],
      ['Канеле', 'с фундуком / с фисташкой', 250],
      ['Мадлен с лаймовой глазурью', 'десерт', 180],
    ],
  },
  day: {
    kicker: 'День · обед',
    title: 'Бизнес-ланч, супы и паста',
    text: 'В обед есть бизнес-ланч — его отмечают гости в отзывах. Состав и цену ланча на сегодня уточняйте по телефону. Из основного меню:',
    img: 'img/trout-caesar.jpg',
    alt: 'Горячее и салат',
    items: [
      ['Зелёный суп-пюре со страчателлой', '300 г', 490],
      ['Суп-гуляш из мраморной говядины', '300 г', 590],
      ['Цезарь с курицей', '260 г', 540],
      ['Паста фузилли с курицей и сливочно-шпинатным соусом', '300 г', 590],
      ['Куриные биточки с картофельным пюре', '360 г', 590],
      ['Морс облепиховый', '200 мл', 180],
    ],
  },
  evening: {
    kicker: 'Вечер · ужин',
    title: 'Ужин на закате',
    text: 'Вечером — горячее из мраморной говядины и морепродуктов, коктейли и десерты.',
    img: 'img/sun-evening.jpg',
    alt: 'Панно-закат в зале вечером',
    items: [
      ['Тартар из мраморной говядины', '140 г', 720],
      ['Рибай со свежим салатом и соусом демиглас', '390 г', 1890],
      ['Осьминог с печёным томатом и кремом из моркови', '270 г', 2190],
      ['Стейк из форели с птитим и сливочно-грибным соусом', '270 г', 980],
      ['Aperol Spritz', 'коктейль', 690],
      ['Баскский чизкейк', 'десерт', 390],
    ],
  },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rub = n => n.toLocaleString('ru-RU') + ' ₽';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
const fmt = m => `${Math.floor(m / 60) % 24}:${String(m % 60).padStart(2, '0')}`;
const permNow = () => new Date(Date.now() + (5 * 60 + new Date().getTimezoneOffset()) * 60000);

/* ---------- Меню ---------- */
function renderMenu() {
  const cats = Object.keys(MENU);
  const tabs = $('#menuTabs'), list = $('#menuList');
  tabs.innerHTML = cats.map((c, i) => `<button class="tab" role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  const show = cat => {
    list.innerHTML = MENU[cat].map(([name, w, desc, price, isNew], i) => `
      <div class="mi" style="animation-delay:${Math.min(i, 12) * 30}ms">
        <span class="mi__name">${esc(name)}${isNew ? '<span class="mi__new">NEW</span>' : ''}</span>
        <span class="mi__price">${rub(price)}</span>
        ${w || desc ? `<span class="mi__desc">${w ? `<i>${esc(w)}</i>` : ''}${esc(desc)}</span>` : ''}
      </div>`).join('');
    $$('.tab', tabs).forEach(t => t.setAttribute('aria-selected', t.dataset.cat === cat));
  };
  tabs.addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) show(b.dataset.cat); });
  show(cats[0]);
}

/* ---------- Часы и статус ---------- */
function openState() {
  const p = permNow();
  const now = p.getHours() * 60 + p.getMinutes();
  const d = p.getDay();
  const today = CONFIG.hours[d];
  const yest = CONFIG.hours[(d + 6) % 7];
  if (yest && toMin(yest[1]) <= toMin(yest[0]) && now < toMin(yest[1])) return { open: true, text: `до ${yest[1]}`, now, d };
  if (today) {
    const o = toMin(today[0]); let c = toMin(today[1]); if (c <= o) c += 1440;
    if (now >= o && now < c) return { open: true, text: `сегодня до ${fmt(c)}`, now, d, o, c };
    if (now < o) return { open: false, text: `откроемся сегодня в ${fmt(o)}`, now, d, o, c, before: true };
  }
  for (let k = 1; k <= 7; k++) {
    const h = CONFIG.hours[(d + k) % 7];
    if (h) return { open: false, text: `откроемся ${k === 1 ? 'завтра' : 'в ' + ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][(d + k) % 7]} в ${fmt(toMin(h[0]))}`, now, d, after: true, nextOpen: toMin(h[0]) };
  }
  return { open: false, text: '', now, d };
}

function renderHours() {
  const names = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const order = [1, 2, 3, 4, 5, 6, 0];
  const rows = [];
  order.forEach((d, i) => {
    const h = CONFIG.hours[d];
    const key = h ? `${fmt(toMin(h[0]))}–${fmt(toMin(h[1]))}` : 'выходной';
    const last = rows[rows.length - 1];
    if (last && last.key === key) last.to = i; else rows.push({ from: i, to: i, key });
  });
  $('#hoursList').innerHTML = rows.map(r => `${names[r.from]}${r.from !== r.to ? '–' + names[r.to] : ''}: ${r.key}`).join('<br>');
  updateStatus();
}

function updateStatus() {
  const s = openState();
  [['#openNow', '#openNowText', '#openDot'], ['#heroStatus', '#heroStatusText', '#heroDot']].forEach(([a, b, c]) => {
    $(a).textContent = s.open ? 'Открыто' : 'Закрыто';
    $(b).textContent = s.text;
    $(c).classList.toggle('is-open', s.open);
  });
  return s;
}

/* ---------- Что сейчас подают ---------- */
let manualPhase = null;
function currentPhase(s) {
  if (!s.open) return 'morning';
  if (s.now < toMin(CONFIG.dayFrom)) return 'morning';
  if (s.now < toMin(CONFIG.eveningFrom)) return 'day';
  return 'evening';
}

function renderNow() {
  const s = updateStatus();
  const p = permNow();
  $('#permClock').textContent = `${p.getHours()}:${String(p.getMinutes()).padStart(2, '0')}`;
  const h = CONFIG.hours[s.d];
  const o = h ? toMin(h[0]) : 480, c = h ? toMin(h[1]) : 1320;
  $('#phMorning').textContent = `${fmt(o)}–${CONFIG.dayFrom}`;
  $('#phEvening').textContent = `${CONFIG.eveningFrom}–${fmt(c)}`;
  const live = currentPhase(s);
  $('#nowState').textContent = s.open ? `открыто, ${s.text}` : `сейчас закрыто, ${s.text}`;

  // солнце на дуге
  const t = s.open ? (s.now - o) / (c - o) : (s.before ? 0 : 1);
  const tt = Math.max(0, Math.min(1, t));
  const th = Math.PI * (1 - tt);
  const sun = $('#sunDot');
  sun.setAttribute('cx', (300 + 270 * Math.cos(th)).toFixed(1));
  sun.setAttribute('cy', (150 - 130 * Math.sin(th)).toFixed(1));
  sun.style.opacity = s.open ? 1 : .35;
  const done = $('#arcDone');
  const L = done.getTotalLength();
  done.style.strokeDasharray = L;
  done.style.strokeDashoffset = L * (1 - (s.open ? tt : 0));
  const xAt = m => { const a = Math.PI * (1 - (m - o) / (c - o)); return (300 + 270 * Math.cos(a)) / 600 * 100; };
  $('#dayLabels').innerHTML = [o, toMin(CONFIG.dayFrom), toMin(CONFIG.eveningFrom), c]
    .map(m => `<span style="left:${xAt(m).toFixed(2)}%">${fmt(m)}</span>`).join('');

  $$('.phase').forEach(b => b.classList.toggle('is-live', s.open && b.dataset.phase === live));
  showPhase(manualPhase || live, s, live);
}

function showPhase(key, s, live) {
  const ph = PHASES[key];
  $$('.phase').forEach(b => b.setAttribute('aria-selected', b.dataset.phase === key));
  let kicker = ph.kicker;
  if (key === live && s.open) kicker = 'Сейчас · ' + kicker;
  else if (!s.open && key === 'morning') kicker = `Закрыто · ${s.text}`;
  $('#serveKicker').textContent = kicker;
  $('#serveTitle').textContent = ph.title;
  $('#serveText').textContent = ph.text;
  $('#serveList').innerHTML = ph.items.map(([n, sub, pr]) =>
    `<li><span class="n">${esc(n)}<small>${esc(sub)}</small></span><span class="p">${pr ? rub(pr) : 'в меню'}</span></li>`).join('');
  const morningNote = key === 'day' ? 'Завтраки подают до 16:00. ' : '';
  $('#serveFoot').innerHTML = `${morningNote}По будням открываемся в 8:00, в выходные — в 10:00. <a href="#menu">Всё меню →</a>`;
  const img = $('#serveImg');
  if (!img.src.endsWith(ph.img)) {
    img.classList.add('is-fading');
    const n = new Image(); n.src = ph.img;
    n.onload = () => { img.src = ph.img; img.alt = ph.alt; img.classList.remove('is-fading'); };
  } else img.alt = ph.alt;
}

function initNow() {
  $('.phases').addEventListener('click', e => {
    const b = e.target.closest('.phase'); if (!b) return;
    manualPhase = b.dataset.phase; renderNow();
  });
  renderNow();
  setInterval(renderNow, 30000);
}

/* ---------- Бронь через WhatsApp ---------- */
function initBooking() {
  const form = $('#bookForm'), date = form.date, time = $('#timeSelect');
  const p = permNow();
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  date.min = iso(p); date.value = iso(p);
  const fillTimes = () => {
    const d = date.value ? new Date(date.value + 'T12:00').getDay() : p.getDay();
    const h = CONFIG.hours[d]; const prev = time.value;
    if (!h) { time.innerHTML = '<option>выходной</option>'; return; }
    const isToday = date.value === iso(p);
    const nowMin = p.getHours() * 60 + p.getMinutes() + 30;
    const opts = [];
    for (let m = toMin(h[0]); m <= toMin(h[1]) - 60; m += 30) if (!isToday || m >= nowMin) opts.push(fmt(m));
    if (!opts.length) { const t = new Date(p); t.setDate(t.getDate() + 1); date.value = iso(t); return fillTimes(); }
    const pick = opts.includes(prev) ? prev : (opts.includes('19:00') ? '19:00' : opts[0]);
    time.innerHTML = opts.map(t => `<option${t === pick ? ' selected' : ''}>${t}</option>`).join('');
  };
  date.addEventListener('change', fillTimes); fillTimes();
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    [form.name, date].forEach(f => { const bad = !f.value.trim(); f.classList.toggle('is-error', bad); if (bad) ok = false; });
    if (!ok) { $('#formNote').textContent = 'Укажите имя и дату.'; return; }
    const [y, m, d] = date.value.split('-');
    const text = [
      'Здравствуйте! Хочу забронировать стол в «Ривере».',
      `Дата: ${d}.${m}.${y}`,
      `Время: ${time.value}`,
      `Гостей: ${form.guests.value}`,
      `Имя: ${form.name.value.trim()}`,
      form.comment.value.trim() ? `Комментарий: ${form.comment.value.trim()}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    $('#formNote').textContent = 'Открываем WhatsApp — отправьте сообщение, и администратор подтвердит бронь.';
  });
}

/* ---------- Шапка ---------- */
function initHeader() {
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  });
}

/* ---------- Лайтбокс ---------- */
function initLightbox() {
  const lb = $('#lightbox'), img = $('img', lb);
  const pics = $$('#galleryGrid img, #aboutPhotos img');
  let i = 0;
  const open = k => { i = (k + pics.length) % pics.length; img.src = pics[i].src; img.alt = pics[i].alt; lb.hidden = false; };
  pics.forEach((p, k) => p.addEventListener('click', () => open(k)));
  $('.lightbox__prev', lb).addEventListener('click', e => { e.stopPropagation(); open(i - 1); });
  $('.lightbox__next', lb).addEventListener('click', e => { e.stopPropagation(); open(i + 1); });
  lb.addEventListener('click', e => { if (e.target !== img) lb.hidden = true; });
  addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') lb.hidden = true;
    if (e.key === 'ArrowLeft') open(i - 1);
    if (e.key === 'ArrowRight') open(i + 1);
  });
}

/* ---------- Появление ---------- */
function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const els = $$('.now__head, .serve, .about__text, .about__photos, .events, .menu__head, .gallery__head, .g, .reviews__grid blockquote, .book__text, .form, .contacts__info, .map');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -6% 0px' });
  els.forEach(el => io.observe(el));
}

renderMenu();
renderHours();
initNow();
initBooking();
initHeader();
initLightbox();
initReveal();
