const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'root123!',
        database: 'bloodhound'
    },
    console.log('Connected to the bloodhound database.')
);

module.exports = db;