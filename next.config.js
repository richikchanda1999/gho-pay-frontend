/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false };
        return config;
    },
    env:{
        PROJECT_ID: "f538cd1b9ff4c55a4f80b9ce125e4d63",
        INFURA_ID: "3910c181289d41b89fa6dad40f7595c7"
    }
}

module.exports = nextConfig
