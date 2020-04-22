const express = require('express')
const app = express()
const parser = require('body-parser')
const logger = require('morgan')
// const cors = require('cors')
const PORT = process.env.PORT || 4000

// Middleware configuration
app.use(logger('dev'))
app.use(parser.json())
// app.use(cors())

// Default route
app.get('/', (req, res) => {
    res.redirect('/api/items')
})

// Routes
const itemRoutes = require('./controllers/itemRoutes')
const reviewRoutes = require('./controllers/reviewRoutes')

app.use('/api/items', itemRoutes)
app.use('/api/reviews', reviewRoutes)


// Set the port and configure server to listen on that port
app.set('port', PORT)
app.listen(app.get('port'), () => {console.log(`PORT: ${app.get('port')}`)})

// heroku config:set DB_URL="mongodb+srv://dbadmin:dbadmin@cluster0-vpnbc.mongodb.net/test?retryWrites=true&w=majority"