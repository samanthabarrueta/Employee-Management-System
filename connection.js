const mysql = require('mysql2/promise');

exports.connect = async () => {
    const connection = await mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "ems_db"
    });
    return connection;
}