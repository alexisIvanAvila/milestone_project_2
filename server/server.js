// DEPENDENCIES
const express = require('express')
const app = express()
const port = process.env.PORT || 5001;

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use('/', express.static('client/build'));
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Anyone Can Cook API'
    })
})

// LISTEN
app.listen(port, () => {
    console.log(`Listening on: ${port}`)
})