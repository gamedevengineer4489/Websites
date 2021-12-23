const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        ['/auth', '/store', '/api'],
        createProxyMiddleware({
            target: 'http://localhost:5000'
        })
    )
}