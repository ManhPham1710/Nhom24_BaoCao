const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456',
    server: 'localhost',
    database: 'SchoolMealDB',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB(){
    try{
        const pool = await sql.connect(config);
        console.log("Connected to SQL Server");
        return pool;
    }catch(err){
        console.log("DB connection error:", err);
    }
}

module.exports = connectDB;