import mysql from 'mysql2/promise';

export const getConnection = async () => {
    return mysql.createPool({
        host: 'localhost',       // Your database host
        user: 'root',            // Your MySQL username
        password: '21doi@wng2__3', // Your MySQL password
        database: 'Kazonlineshop'  // Your database name
    });
};
