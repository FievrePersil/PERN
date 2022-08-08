const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "01021997",
    host: "localhost",
    database: "PERN",
    port : 5432

})

module.exports = pool;