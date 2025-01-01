const { Pool } = require('pg');

// Replace these with your actual database credentials
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shopi_store',
  password: 'taha123',
  port: 5432, // Default PostgreSQL port
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
