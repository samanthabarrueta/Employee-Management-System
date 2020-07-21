const connection = require('./connection');

exports.route = (app, connection) => {
    app.get('/status', (request, response) => {
        const status = {
            status: 'ok'
        }
        response.json(status);
    });

    app.get("/departments", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM department`);
        response.json(data);
    });

    app.post("/departments", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO department SET ?`, request.body);
        response.json({created: true, customer_id: data.insertId, ...request.body});
    });
}