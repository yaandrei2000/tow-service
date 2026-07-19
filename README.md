# Крутой Эвакуатор — Владимир

Одностраничный сайт службы эвакуатора на **Next.js 14 (App Router) + TypeScript**.
Полностью **статический** — без SSR и сервера. `next build` собирает готовые файлы в папку `out/`.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Сборка статики (в `/out`)

```bash
npm run build       # генерирует статические файлы в ./out
npm run preview     # локально посмотреть содержимое ./out
```

Папку `out/` можно залить на любой статический хостинг (Nginx, GitHub Pages,
Netlify, Vercel, обычный сервер) — серверная часть не нужна.

## Что внутри

### Тема (светлая / тёмная)
- Переключатель в шапке (кнопка солнце/луна).
- **Первый заход** — тема берётся из настроек устройства (`prefers-color-scheme`).
- После ручного переключения выбор запоминается в `localStorage` и имеет приоритет.
- Тема выставляется инлайн-скриптом в `<head>` **до отрисовки**, поэтому нет «мигания» при загрузке.
- Вся палитра — на CSS-переменных в `app/globals.css` (`[data-theme="light"]` / `[data-theme="dark"]`).

### SEO
- Метаданные, OpenGraph и Twitter-карточки в `app/layout.tsx` (`Metadata` API).
- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`.
- Микроразметка **JSON-LD `TowingService`**: телефон, район обслуживания (Владимир и область), режим 24/7.
- Семантические заголовки, `lang="ru"`, шрифты через `next/font` (без layout shift).
- `themeColor` для светлой и тёмной темы.

> Перед публикацией замените домен `https://krutoy-evakuator.ru` и телефон в `app/site-config.ts`,
> а также добавьте картинку `public/og.jpg` (1200×630) для соцсетей.

## Структура

```
app/
  layout.tsx              # SEO, шрифты, скрипт темы, JSON-LD
  page.tsx                # лендинг (серверный компонент)
  globals.css             # токены тем + сброс стилей
  site-config.ts          # телефон, домен, название — меняйте здесь
  robots.ts / sitemap.ts  # SEO-роуты
  components/
    ThemeToggle.tsx        # переключатель темы (client)
    Calculator.tsx         # калькулятор стоимости (client)
```

## Что заменить на боевые данные
- Телефон — в `app/site-config.ts`.
- Домен — в `app/site-config.ts` и `app/robots.ts`.
- Тарифы калькулятора — в `app/components/Calculator.tsx` (объект `TYPES`).
- Фото эвакуатора и карту зоны — сейчас стоят заглушки в `app/page.tsx`.
