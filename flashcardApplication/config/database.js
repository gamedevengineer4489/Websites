const { Pool } = require('pg');

if(process.env.NODE_ENV === 'development') {
    
    require('custom-env').env('development')
} 


const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PGADMIN_PORT,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    
}

const client = new Pool(config);

module.exports = client;