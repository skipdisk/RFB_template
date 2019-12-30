const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api-token-auth', '/messages'], { target: 'https://messaging-test.bixly.com' }));
}