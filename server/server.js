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
    rejectUnauthorized: false
  }
});

client.connect();

// Front-end Pages via react-router-dom
app.get('/random', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
// app.get('/breakfast', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/beef', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/chicken', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/vegetarian', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/pork', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/seafood', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/dessert', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
//   app.get('/side', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//   });
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
    let category = req.query.category;
    let query = `INSERT INTO ${category} (apiid) values('${apiId}') RETURNING id`
    let result = await client.query(query);
    result = result.rows
    console.log(result)
    let query2 = `INSERT INTO favorites (token, id, category) values('${token}', ${result[0]['id']}, category)`;
    let result2 = await client.query(query2);
    console.log(result2)
    return res.status(200).json(result)
})

app.delete('/api/favorites', async (req, res) => {
    let token = req.query.token;
    let apiId = req.query.apiId;
    let category = req.query.category;
    let query = `SELECT id FROM ${category} WHERE apiid='${apiId}'`
    let result = await client.query(query)
    result = result.rows
    return res.status(200).json(result)
    // if (result.length === 0) {
    //     return res.status(200)
    // }
    // result = result.map((res) => res['id'])
    // let query2 = `SELECT * FROM favorites WHERE token='${token}' and id=` + result.join(' or id=')
    // let result2 = await client.query(query2)
    // result2 = result2.rows
    // if (result2.length === 0) {
    //     return res.status(200)
    // }
    // result2 = result2.map((res) => res['id'])
    // let query3 = `DELETE FROM favorites WHERE token='${token}' and id=` + result2[0]
    // let result3 = await client.query(query3)
    // let query4 = `DELETE FROM ${category} WHERE id=` + result2[0]
    // let result4 = await client.query(query4)
    // return res.status(200)
})

// LISTEN
app.listen(port, () => {
    console.log(`Listening on: ${port}`)
})