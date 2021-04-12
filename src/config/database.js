const { Client } = require('pg')
require('dotenv')

const client = new Client({
    connectionString: process.env.db
})

client.connect()

module.exports = client;