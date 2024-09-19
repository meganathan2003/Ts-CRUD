/**
 * here the file connect 
 * with the Db 
 * 
 * @author meganathan
 */

import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'todo_app'
})

// Test the connection
connection.connect(err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Db Connected');

})

export default connection;