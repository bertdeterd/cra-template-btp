const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://<your_target>',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '' }
    })
  );
};
