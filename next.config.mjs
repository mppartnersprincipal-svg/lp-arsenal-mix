/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Se a hospedagem do cliente NÃO suportar Node (SSR), descomente para exportar estático:
  // output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
