const connection = require('./connection');

exports.route = (app, connection) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok'
        }
        response.json(status);
    });
}