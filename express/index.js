const env = require('dotenv').config()
const path = require('path')
const mongoose = require('mongoose')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

//  db connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
.then(result => console.log(`DB is running at: ${result.connections[0].host}`))
.catch(error => console.log(`DB connection fuckup: ${error}`))

// headers
app.use(helmet())
app.use(cors())

// body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes
app.use(require('./api/tasks/taskController'))

module.exports = app
// app.listen(process.env.PORT || 3000, () => console.log(`Server is listening on port: ${process.env.PORT || 3000}`))