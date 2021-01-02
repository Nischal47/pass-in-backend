const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

//help in parsing request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//connecting routes
require('./routes')(app)

module.exports = app;