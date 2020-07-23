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
        response.json({...request.body});
    });

    app.get("/role", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM role`);
        response.json(data);
    });

    app.post("/role", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO role SET ?`, request.body);
        response.json({...request.body});
    });

    app.get("/employee", async (request, response) => {
        const [data] = await connection.query(`SELECT * FROM employee`);
        response.json(data);
    });

    app.post("/employee", async (request, response) => {
        const [data] = await connection.query(`INSERT INTO employee SET ?`, request.body);
        response.json({...request.body});
    });    
}