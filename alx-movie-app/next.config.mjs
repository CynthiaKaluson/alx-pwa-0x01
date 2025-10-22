import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
    dest: 'public'
})

const nextConfig = {
    // reactStrictMode should be here, not in PostCSS
    reactStrictMode: true,
    images: {
        domains: ['m.media-amazon.com'],
    },
};

export default withPWA(nextConfig)