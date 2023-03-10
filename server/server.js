// DEPENDENCIES
const express = require('express')
const app = express()
const port = process.env.PORT || 5001;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use('/', express.static('client/build'));
const path = require('path');
app.use(express.urlencoded({ extended: false }))

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
});

client.connect();

// Front-end Pages via react-router-dom
app.get('/random', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });

app.get('/favorites', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });

  // ROOT
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Anyone Can Cook API'
    })
})

app.get('/api/favorites', async (req, res) => { 
    let token = req.query.token;
    let query = `SELECT * FROM favorites WHERE token='${token}'`;
    let result = await client.query(query); 
    return res.status(200).json(result)
})

app.post('/api/favorites', async (req, res) => {
    let token = req.query.token;
    let apiId = req.query.apiId;
    let query = `INSERT INTO favorites (apiid, token) values('${apiId}', ${token})`
    let result = await client.query(query);
    result = result.rows
    console.log(result)
    return res.status(200).json({})
})

app.delete('/api/favorites', async (req, res) => {
    let token = req.query.token;
    let apiId = req.query.apiId;
    let query = `DELETE FROM favorites WHERE token='${token}' AND apiid='${apiId}'`
    let result = await client.query(query)
    result = result.rows
    return res.status(200).json(result)
})

// LISTEN
app.listen(port, () => {
    console.log(`Listening on: ${port}`)
})