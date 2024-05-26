const mysql = require("mysql2");

// const mySqlPool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "node-express-mysql",
// });


// MySQL connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-express-mysql'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL');
});

module.exports = connection;