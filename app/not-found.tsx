import type { Metadata } from "next";
import ThemeToggle from "./components/ThemeToggle";
import { COMPANY, PHONE_HREF } from "./site-config";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="/" className={styles.brand}>{COMPANY}</a>
        <ThemeToggle />
      </header>
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.description}>
            Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную или позвоните, если нужен эвакуатор.
          </p>
          <div className={styles.actions}>
            <a href="/" className={`${styles.action} ${styles.primary} btn-accent`}>На главную</a>
            <a href={PHONE_HREF} className={`${styles.action} ${styles.secondary}`}>Позвонить диспетчеру</a>
          </div>
        </div>
        <svg className={styles.scene} viewBox="0 0 480 320" aria-hidden="true">
          <path d="M0 138h480" stroke="#363943" />
          <path d="M189 138h102l138 182H51Z" fill="#30343d" />
          <path d="M189 138 51 320m240-182 138 182" stroke="#676d78" strokeWidth="2" />
          <path d="M240 254v22m0 18v26" stroke="#a0a5ae" strokeWidth="4" />
          <ellipse cx="240" cy="241" rx="62" ry="7" fill="#242730" />
          <path d="M168 168v66m144-66v66m-152 0h16m128 0h16" stroke="#a0a5ae" strokeWidth="6" strokeLinecap="round" />
          <rect x="125" y="63" width="230" height="119" rx="13" fill="var(--accent)" />
          <rect x="133" y="71" width="214" height="103" rx="7" fill="none" stroke="var(--on-accent)" strokeWidth="2" />
          <circle cx="143" cy="82" r="2" fill="var(--on-accent)" />
          <circle cx="337" cy="82" r="2" fill="var(--on-accent)" />
          <text x="240" y="151" textAnchor="middle" className={styles.code}>404</text>
        </svg>
      </main>
    </div>
  );
}
