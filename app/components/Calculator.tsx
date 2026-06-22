"use client";

import { useState } from "react";

type TypeKey = "legkovoe" | "krossover" | "moto" | "dtp";

const TYPES: Record<TypeKey, { label: string; base: number; km: number }> = {
  legkovoe: { label: "Легковое", base: 1500, km: 45 },
  krossover: { label: "Кроссовер / джип", base: 2000, km: 55 },
  moto: { label: "Мотоцикл", base: 1500, km: 45 },
  dtp: { label: "После ДТП", base: 2500, km: 60 },
};

const fmt = (n: number) => n.toLocaleString("ru-RU") + " ₽";

export default function Calculator() {
  const [calcType, setCalcType] = useState<TypeKey>("legkovoe");
  const [distance, setDistance] = useState(0);

  const t = TYPES[calcType];
  const kmCost = t.km * distance;
  const total = t.base + kmCost;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, var(--surface), var(--surface-2))",
        border: "1px solid var(--border)",
        borderRadius: 22,
        padding: "clamp(24px, 4vw, 40px)",
        display: "flex",
        gap: "clamp(28px, 5vw, 48px)",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1 1 300px", minWidth: "min(280px, 100%)" }}>
        <div style={{ fontSize: 13, color: "var(--accent)", fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>
          Прозрачные цены
        </div>
        <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 700, fontSize: "clamp(28px, 6vw, 36px)", textTransform: "uppercase", margin: "10px 0 14px" }}>
          Калькулятор стоимости
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-3)", lineHeight: 1.55, margin: "0 0 28px" }}>
          Прикиньте цену за пару секунд. Окончательную сумму назовём по телефону — без скрытых доплат.
        </p>

        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)", marginBottom: 10 }}>Тип транспорта</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {(Object.keys(TYPES) as TypeKey[]).map((key) => {
            const active = key === calcType;
            return (
              <button
                key={key}
                type="button"
                className="calc-type"
                onClick={() => setCalcType(key)}
                style={{
                  padding: "10px 16px",
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: `1.5px solid ${active ? "var(--accent)" : "var(--border-strong)"}`,
                  background: active ? "var(--accent)" : "transparent",
                  color: active ? "var(--on-accent)" : "var(--text-2)",
                }}
              >
                {TYPES[key].label}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", margin: "26px 0 10px" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text-2)" }}>Расстояние за город</span>
          <span style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, fontSize: 20, color: "var(--accent-2)" }}>
            {distance === 0 ? "По городу" : distance + " км"}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={200}
          step={5}
          value={distance}
          onChange={(e) => setDistance(parseInt(e.target.value, 10))}
          style={{ width: "100%", height: 6 }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-4)", marginTop: 6 }}>
          <span>По городу</span>
          <span>200 км</span>
        </div>
      </div>

      <div
        style={{
          flex: "1 1 260px",
          minWidth: 260,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 18,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 13, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: 1.5 }}>Ориентировочно</div>
        <div style={{ fontFamily: "var(--font-oswald)", fontWeight: 700, fontSize: 56, lineHeight: 1, color: "var(--accent)", margin: "10px 0" }}>
          ≈ {fmt(total)}
        </div>
        <div style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.5, borderTop: "1px solid var(--border)", paddingTop: 16, marginTop: 6 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span>Подача и погрузка</span>
            <span style={{ color: "var(--text-2)" }}>{fmt(t.base)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>За город ({t.km} ₽/км)</span>
            <span style={{ color: "var(--text-2)" }}>{distance === 0 ? "—" : fmt(kmCost)}</span>
          </div>
        </div>
        <a
          href="#zvonok"
          className="btn-accent"
          style={{ marginTop: 22, textAlign: "center", background: "var(--accent)", color: "var(--on-accent)", fontWeight: 800, padding: 14, borderRadius: 12, textDecoration: "none", fontSize: 15 }}
        >
          Зафиксировать цену
        </a>
      </div>
    </div>
  );
}
