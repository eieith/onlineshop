import mysql from 'mysql2/promise';

const pool = mysql.createPool({
        host: 'localhost',       // Your database host
        user: 'root',            // Your MySQL username
        password: '21doi@wng2__3', // Your MySQL password
        database: 'Kazonlineshop',  // Your database name
        waitForConnections: true,
       connectionLimit: 10,       // Limit on concurrent connections
        queueLimit: 0  
    });
    export const db = pool;