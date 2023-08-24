/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "app.econverse.com.br",
        }]
    },
    sassOptions: {
        includePaths: ["./src"],
        prependData: `@import "./app/variables.scss";`
    }
}

module.exports = nextConfig
