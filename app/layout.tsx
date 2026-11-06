import type { Metadata, Viewport } from "next";
import { Oswald, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF, COMPANY, CITY } from "./site-config";

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Эвакуатор ${CITY} круглосуточно — от 20 минут | ${COMPANY}`,
    template: `%s | ${COMPANY}`,
  },
  description:
    `Услуги эвакуатора во Владимире и области 24/7. Эвакуация легковых авто, кроссоверов, мотоциклов, помощь при ДТП, межгород. Фиксированная цена, подача от 20 минут. Звоните ${PHONE_DISPLAY}.`,
  keywords: [
    "эвакуатор Владимир",
    "вызвать эвакуатор Владимир",
    "эвакуатор Владимир круглосуточно",
    "эвакуатор недорого Владимир",
    "эвакуация авто Владимир",
    "эвакуатор мотоцикла Владимир",
    "помощь при ДТП Владимир",
    "эвакуатор межгород Владимирская область",
  ],
  authors: [{ name: COMPANY }],
  creator: COMPANY,
  publisher: COMPANY,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: COMPANY,
    title: `Эвакуатор ${CITY} круглосуточно — от 20 минут`,
    description:
      "Эвакуатор во Владимире и области 24/7. Легковые, кроссоверы, мотоциклы, помощь при ДТП, межгород. Фиксированная цена, подача от 20 минут.",
  },
  twitter: {
    card: "summary_large_image",
    title: `Эвакуатор ${CITY} круглосуточно — ${COMPANY}`,
    description:
      "Эвакуатор во Владимире и области 24/7. Фиксированная цена, подача от 20 минут.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Автоуслуги",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#14161b" },
  ],
};

// Runs before paint: use saved theme, otherwise the device preference. No flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

const metrikaId = 114112737;
const metrikaScript = `
  (function (url) {
    window.ym = window.ym || function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = Date.now();
    if (Array.from(document.scripts).some(function (script) { return script.src === url; })) return;
    var tag = document.createElement('script');
    tag.async = true;
    tag.src = url;
    document.head.appendChild(tag);
  })('https://mc.yandex.ru/metrika/tag.js?id=${metrikaId}');

  ym(${metrikaId}, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true
  });
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TowingService",
  name: COMPANY,
  image: `${SITE_URL}/og.jpg`,
  url: SITE_URL,
  telephone: PHONE_HREF.replace("tel:", ""),
  priceRange: "₽₽",
  description:
    "Круглосуточная служба эвакуатора во Владимире и области: легковые, кроссоверы, мотоциклы, помощь при ДТП, межгород.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Владимир",
    addressRegion: "Владимирская область",
    addressCountry: "RU",
  },
  areaServed: [
    { "@type": "City", name: "Владимир" },
    { "@type": "AdministrativeArea", name: "Владимирская область" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_HREF.replace("tel:", ""),
    contactType: "customer service",
    areaServed: "RU",
    availableLanguage: "Russian",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${oswald.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {metrikaScript}
            </Script>
            {/* Raw markup keeps React from preloading the fallback image. */}
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<img src="https://mc.yandex.ru/watch/${metrikaId}" style="position:absolute;left:-9999px" alt="">`,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
