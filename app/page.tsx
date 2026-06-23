import ThemeToggle from "./components/ThemeToggle";
import Calculator from "./components/Calculator";
import { PHONE_DISPLAY, PHONE_HREF, COMPANY, SLOGAN } from "./site-config";

const trust = [
  { icon: "⏱", text: "Быстрая подача эвакуатора от 20 минут" },
  { icon: "24", text: "Работаем круглосуточно, без выходных" },
  { icon: "🛡", text: "Бережная погрузка и безопасная доставка" },
  { icon: "₽", text: "Честные цены — без скрытых платежей" },
];

const services = [
  { icon: "🚗", title: "Легковые авто", text: "Седаны, хэтчбеки и кроссоверы — аккуратная погрузка и фиксация.", price: "от 1 500 ₽ по городу" },
  { icon: "🚐", title: "Внедорожники и микроавтобусы", text: "Полноразмерные SUV, джипы и буса. Учитываем габариты и клиренс.", price: "от 2 000 ₽ по городу" },
  { icon: "🏍", title: "Мотоциклы и квадроциклы", text: "Бережная перевозка мото, скутеров и квадриков с мягкой фиксацией.", price: "от 1 500 ₽" },
  { icon: "🛠", title: "Техпомощь на дороге", text: "Запуск двигателя, замена колеса, подвоз топлива, отключённый АКБ.", price: "от 800 ₽" },
  { icon: "🛣", title: "Доставка авто по России", text: "Перевозка между городами по фиксированному тарифу за километр.", price: "от 45 ₽/км" },
  { icon: "🛟", title: "Выкуп авто после ДТП", text: "Срочно выкупим битый или неисправный автомобиль. Оценка бесплатно.", price: "оценка бесплатно" },
];

const steps = [
  { n: "1", title: "Звоните", text: "Описываете машину и адрес — диспетчер сразу называет цену." },
  { n: "2", title: "Выезжаем", text: "Ближайший эвакуатор едет к вам, в среднем 20 минут по городу." },
  { n: "3", title: "Грузим", text: "Аккуратно фиксируем авто. Платите по факту, без сюрпризов." },
  { n: "4", title: "Доставляем", text: "Везём в сервис, гараж или по нужному адресу." },
];

const reviews = [
  { stars: "★★★★★", text: "Заглох на трассе ночью — приехали за 25 минут, хотя я был за городом. Цену назвали сразу, доплат не было.", name: "Андрей, Владимир" },
  { stars: "★★★★★", text: "Перевозили мотоцикл, переживал за фиксацию. Закрепили на совесть, довезли без единой царапины.", name: "Игорь М." },
  { stars: "★★★★★", text: "После ДТП помогли вытащить машину и довезли до сервиса. Спокойные, всё объяснили. Рекомендую.", name: "Ольга К." },
];

const zones = ["Владимир", "Боголюбово", "Суздаль", "Юрьев-Польский", "Собинка", "Лакинск", "Радужный", "Камешково", "Ковров", "По всей области"];

const oswald = { fontFamily: "var(--font-oswald)" } as const;

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "var(--header-bg)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="site-header-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={`${COMPANY} 24/7 — эвакуатор Владимир`} style={{ height: 58, width: "auto", display: "block" }} />
            <span style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: 2, textTransform: "uppercase", lineHeight: 1.35, maxWidth: 130 }}>Владимир и область</span>
          </a>
          <div className="site-header-cta" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div className="site-header-phone" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", lineHeight: 1.2 }}>
              <span style={{ fontSize: 11, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: 1.5 }}>Круглосуточно · 24/7</span>
              <a href={PHONE_HREF} style={{ ...oswald, fontWeight: 600, fontSize: 22, color: "var(--text)", textDecoration: "none" }}>{PHONE_DISPLAY}</a>
            </div>
            <a href="#zvonok" className="btn-accent site-header-call" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--accent)", color: "var(--on-accent)", fontWeight: 800, fontSize: 15, padding: "12px 22px", borderRadius: 10, textDecoration: "none", whiteSpace: "nowrap" }}>Вызвать эвакуатор</a>
            <span className="site-header-toggle"><ThemeToggle /></span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(36px, 6vw, 64px) clamp(18px, 5vw, 24px) clamp(36px, 6vw, 56px)", display: "flex", gap: "clamp(28px, 5vw, 48px)", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 440px", minWidth: "min(320px, 100%)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-soft)", border: "1px solid var(--accent-border)", color: "var(--accent-2)", padding: "7px 14px", borderRadius: 100, fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 0 4px rgba(255,106,26,.25)" }} />
            Быстрая подача эвакуатора от 20 минут
          </div>
          <h1 style={{ ...oswald, fontWeight: 700, fontSize: "clamp(36px, 8vw, 60px)", lineHeight: 1.02, textTransform: "uppercase", margin: "22px 0 0", letterSpacing: -0.5 }}>
            Эвакуатор во&nbsp;Владимире <span style={{ color: "var(--accent)" }}>круглосуточно</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--text-2)", maxWidth: 520, margin: "22px 0 0" }}>
            Приедем быстро, погрузим аккуратно. Легковые, внедорожники, мотоциклы, техпомощь на дороге и доставка по России. Честная цена — называем её до выезда.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34, alignItems: "center" }}>
            <a href={PHONE_HREF} style={{ display: "inline-flex", flexDirection: "column", gap: 2, background: "var(--accent)", color: "var(--on-accent)", padding: "16px 30px", borderRadius: 14, textDecoration: "none", animation: "ev-pulse 2.4s infinite" }}>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, opacity: 0.8 }}>Звоните сейчас</span>
              <span style={{ ...oswald, fontWeight: 700, fontSize: 26, lineHeight: 1 }}>{PHONE_DISPLAY}</span>
            </a>
            <a href="#calc" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", padding: "16px 26px", borderRadius: 14, border: "1.5px solid var(--border-cta)", color: "var(--text)", textDecoration: "none", fontWeight: 700, fontSize: 16 }}>Рассчитать стоимость</a>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginTop: 38 }}>
            {[["8 лет", "на дорогах области"], ["24/7", "без выходных"], ["12 000+", "выездов"]].map(([big, small]) => (
              <div key={small}>
                <div style={{ ...oswald, fontWeight: 700, fontSize: 30, color: "var(--accent)" }}>{big}</div>
                <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 2 }}>{small}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: "1 1 380px", minWidth: "min(300px, 100%)", position: "relative" }}>
          <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "4 / 3" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/truck-hero.png" alt={`Эвакуатор ${COMPANY} во Владимире — эвакуация авто ночью`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div className="hero-badge" style={{ position: "absolute", left: -10, bottom: 22, background: "var(--surface)", border: "1px solid var(--border-mid)", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, boxShadow: "var(--shadow)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: "50%", background: "var(--ok-soft)", color: "var(--ok)", fontSize: 20 }}>✓</span>
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Едем уже к вам</div>
              <div style={{ fontSize: 12, color: "var(--text-3)" }}>Среднее время подачи — 20 мин</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 24px", display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "space-between" }}>
          {trust.map((t) => (
            <div key={t.text} style={{ flex: "1 1 200px", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ ...oswald, fontWeight: 700, fontSize: 22, color: "var(--accent)", minWidth: 34 }}>{t.icon}</span>
              <span style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.3 }}>{t.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(44px, 7vw, 72px) clamp(18px, 5vw, 24px) 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 34 }}>
          <div>
            <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>Что мы возим</div>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: "clamp(30px, 6vw, 40px)", textTransform: "uppercase", margin: "10px 0 0" }}>Услуги эвакуатора</h2>
          </div>
          <p style={{ maxWidth: 380, fontSize: 15, color: "var(--text-3)", margin: 0, lineHeight: 1.5 }}>Работаем с любым транспортом массой до 3,5 тонн. Подберём способ погрузки под вашу ситуацию.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {services.map((s) => (
            <div key={s.title} className="service-card" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 26, display: "flex", flexDirection: "column", gap: 12 }}>
              {/* <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 12, background: "var(--accent-soft)", fontSize: 26 }}>{s.icon}</span> */}
              <h3 style={{ ...oswald, fontWeight: 600, fontSize: 21, margin: "6px 0 0", textTransform: "uppercase", letterSpacing: 0.3 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.5, margin: 0 }}>{s.text}</p>
              <span style={{ marginTop: "auto", fontSize: 13, color: "var(--accent-2)", fontWeight: 700 }}>{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(40px, 6vw, 64px) clamp(18px, 5vw, 24px)" }}>
        <Calculator />
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "16px 24px 40px" }}>
        <h2 style={{ ...oswald, fontWeight: 700, fontSize: "clamp(28px, 6vw, 36px)", textTransform: "uppercase", margin: "0 0 30px", textAlign: "center" }}>Как это работает</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          {steps.map((st) => (
            <div key={st.n} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ ...oswald, fontWeight: 700, fontSize: 18, color: "var(--on-accent)", background: "var(--accent)", width: 38, height: 38, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>{st.n}</span>
              <h4 style={{ ...oswald, fontWeight: 600, fontSize: 19, margin: "4px 0 0", textTransform: "uppercase" }}>{st.title}</h4>
              <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.5, margin: 0 }}>{st.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(40px, 6vw, 56px) clamp(18px, 5vw, 24px)" }}>
          <h2 style={{ ...oswald, fontWeight: 700, fontSize: "clamp(28px, 6vw, 34px)", textTransform: "uppercase", margin: "0 0 28px" }}>Отзывы клиентов</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {reviews.map((r) => (
              <div key={r.name} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div style={{ color: "var(--accent-2)", fontSize: 15, letterSpacing: 2 }}>{r.stars}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-2)", margin: "12px 0 16px" }}>{r.text}</p>
                <div style={{ fontSize: 13, color: "var(--text-3)", fontWeight: 700 }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(40px, 6vw, 64px) clamp(18px, 5vw, 24px)" }}>
        <div style={{ display: "flex", gap: "clamp(28px, 5vw, 48px)", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: "1 1 320px", minWidth: "min(300px, 100%)" }}>
            <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>География</div>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: "clamp(28px, 6vw, 36px)", textTransform: "uppercase", margin: "10px 0 16px" }}>Зона работы</h2>
            <p style={{ fontSize: 15, color: "var(--text-3)", lineHeight: 1.55, margin: "0 0 22px" }}>
              Весь Владимир, а также выезды по области и в соседние регионы. Межгород — по фиксированному тарифу за километр.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {zones.map((z) => (
                <span key={z} style={{ background: "var(--surface)", border: "1px solid var(--border-mid)", borderRadius: 100, padding: "8px 16px", fontSize: 14, color: "var(--text-2)" }}>{z}</span>
              ))}
            </div>
          </div>
          {/* Блок карты временно скрыт — доделаю позже
          <div style={{ flex: "1 1 320px", minWidth: "min(300px, 100%)" }}>
            <div style={{ borderRadius: 18, overflow: "hidden", backgroundColor: "var(--surface-3)", backgroundImage: "repeating-linear-gradient(45deg, var(--stripe) 0 16px, transparent 16px 32px)", border: "1px solid var(--border)", aspectRatio: "16 / 10", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "var(--text-4)", letterSpacing: 1 }}>[ карта зоны выезда ]</span>
            </div>
          </div>
          */}
        </div>
      </section>

      {/* CALL CTA */}
      <section id="zvonok" style={{ maxWidth: 1180, margin: "0 auto", padding: "24px clamp(18px, 5vw, 24px) clamp(48px, 8vw, 80px)" }}>
        <div style={{ background: "var(--accent)", borderRadius: 24, padding: "clamp(28px, 5vw, 56px)", display: "flex", gap: "clamp(28px, 5vw, 48px)", flexWrap: "wrap", alignItems: "center", color: "var(--on-accent)", position: "relative", overflow: "hidden" }}>
          <div style={{ flex: "1 1 360px", minWidth: "min(300px, 100%)" }}>
            <h2 style={{ ...oswald, fontWeight: 700, fontSize: "clamp(30px, 7vw, 44px)", textTransform: "uppercase", margin: 0, lineHeight: 1.05 }}>Нужен эвакуатор<br />прямо сейчас?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.5, margin: "18px 0 0", maxWidth: 460, fontWeight: 500 }}>
              Просто позвоните — диспетчер на связи круглосуточно. Никаких форм и анкет: опишете машину и адрес по телефону, сразу назовём цену и отправим ближайший эвакуатор.
            </p>
          </div>
          <div style={{ flex: "0 1 360px", minWidth: "min(280px, 100%)", display: "flex", flexDirection: "column", gap: 14 }}>
            <a href={PHONE_HREF} style={{ display: "flex", flexDirection: "column", gap: 4, background: "#14161b", color: "#fff", padding: "22px 28px", borderRadius: 16, textDecoration: "none", animation: "ev-pulse 2.4s infinite" }}>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, opacity: 0.65 }}>Горячая линия · 24/7</span>
              <span style={{ ...oswald, fontWeight: 700, fontSize: "clamp(28px, 6vw, 36px)", lineHeight: 1 }}>{PHONE_DISPLAY}</span>
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: "#14161b" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 30, height: 30, borderRadius: "50%", background: "rgba(20,22,27,.12)" }}>⏱</span>
              Среднее время подачи по городу — 20 минут
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", background: "var(--surface-2)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "44px 24px", display: "flex", gap: 32, flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt={`${COMPANY} — эвакуатор Владимир`} style={{ height: 58, width: "auto", display: "block" }} />
              <span style={{ fontSize: 12, color: "var(--text-3)", letterSpacing: 2, textTransform: "uppercase", lineHeight: 1.35, maxWidth: 130 }}>Владимир и область</span>
            </div>
            <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.6, margin: "16px 0 0", maxWidth: 320 }}>
              Эвакуация авто и мотоциклов во Владимире и области. Круглосуточно, без выходных и праздников.
            </p>
            <p style={{ ...oswald, fontWeight: 600, fontSize: 15, color: "var(--accent-2)", letterSpacing: 0.5, textTransform: "uppercase", margin: "14px 0 0" }}>
              {SLOGAN}
            </p>
          </div>
          <div style={{ flex: "0 1 200px" }}>
            <div style={{ fontSize: 12, color: "var(--text-4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>Контакты</div>
            <a href={PHONE_HREF} style={{ ...oswald, fontWeight: 600, fontSize: 22, color: "var(--text)", textDecoration: "none", display: "block" }}>{PHONE_DISPLAY}</a>
            <div style={{ fontSize: 14, color: "var(--text-3)", marginTop: 10, lineHeight: 1.7 }}>Работаем 24 часа<br />г. Владимир</div>
          </div>
          <div style={{ flex: "0 1 200px" }}>
            <div style={{ fontSize: 12, color: "var(--text-4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>Разделы</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <a href="#uslugi" className="link-muted" style={{ fontSize: 14, color: "var(--text-2)", textDecoration: "none" }}>Услуги</a>
              <a href="#calc" className="link-muted" style={{ fontSize: 14, color: "var(--text-2)", textDecoration: "none" }}>Калькулятор цены</a>
              <a href="#zvonok" className="link-muted" style={{ fontSize: 14, color: "var(--text-2)", textDecoration: "none" }}>Вызвать эвакуатор</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", padding: "18px 24px", textAlign: "center", fontSize: 13, color: "var(--text-4)" }}>
          © 2026 {COMPANY} · Владимир
        </div>
      </footer>
    </div>
  );
}
