"use strict";
/**
 * here the file connect
 * with the Db
 *
 * @author meganathan
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const connection = mysql2_1.default.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'todo_app'
});
// Test the connection
connection.connect(err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Db Connected');
});
exports.default = connection;
