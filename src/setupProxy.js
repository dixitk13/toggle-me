const proxy = require("http-proxy-middleware");

module.exports = function serverProxy(app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:4000",
      changeOrigin: true
    })
  );
};
