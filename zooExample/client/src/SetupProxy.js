const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        ['/api', '/auth', '/store'],
        createProxyMiddleware({
            target: 'http://localhost:5000'
        })
    )
}