const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'OT534%83=hj24@',
    database: '3dddb'
});

module.exports = { pool };