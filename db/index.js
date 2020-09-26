const { Client } = require('pg');

const client = new Client({
  user: 'jchan',
  host: 'localhost',
  database: 'reader',
  password: '',
})

client.connect();

module.exports = client;