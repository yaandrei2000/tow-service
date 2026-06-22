/** @type {import('next').NextConfig} */
const nextConfig = {
  // Полностью статический экспорт — без SSR/сервера.
  // `next build` генерирует готовые HTML/CSS/JS в папку ./out
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // next/image без серверной оптимизации (требование статического экспорта)
    unoptimized: true,
  },
};

export default nextConfig;
