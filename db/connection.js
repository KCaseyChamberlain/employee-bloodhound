const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // my MySQL username,
        user: 'root',
        // my MySQL password
        password: 'root123!',
        database: 'bloodhound'
    },
    console.log('Connected to the bloodhound database.')
);

module.exports = db;