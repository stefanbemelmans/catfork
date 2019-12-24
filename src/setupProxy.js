const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/cats',
    proxy({
      target: "https://thecatapi.com/",
      changeOrigin: true,
    })
  );
};