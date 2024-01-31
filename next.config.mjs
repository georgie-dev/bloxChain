/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.blockchain.com',
              port: '',
            },
            {
                protocol: 'https',
                hostname: 'login.blockchain.com',
                port: '',
              },
          ],
        },
};

export default nextConfig;
