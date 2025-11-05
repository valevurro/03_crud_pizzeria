const mysql = require('mysql');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: '8pt_pizzeria'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connect to MySQL!');

});

module.exports = connection;