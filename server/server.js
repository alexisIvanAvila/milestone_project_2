// DEPENDENCIES
const express = require('express')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Anyone Can Cook API'
    })
})

// LISTEN
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on: ${process.env.SERVER_PORT}`)
})