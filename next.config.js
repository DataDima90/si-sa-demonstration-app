/** @type {import('next').NextConfig} */

/* const withTM = require("next-transpile-modules")(["react-reader", "epubjs"]);
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com'],
},
}

module.exports = nextConfig
