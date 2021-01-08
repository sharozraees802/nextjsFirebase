const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    scope: "http://localhost:3000/",
    sw: "sw.js",
    runtimeCaching,
  },
});
