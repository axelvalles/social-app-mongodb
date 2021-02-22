const express = require('express')
const {json, urlencoded} = require('express')
const morgan = require('morgan')
const path = require('path')
const exhbs = require('express-handlebars')


//initializations
const app = express ()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

//midlewares
app.use(json())
app.use(urlencoded({extended: false}))
app.use(morgan('dev'))

//import routes
const IndexRoutes = require('./routes/index.routes') 

//routes
app.get('/', IndexRoutes)

//static files
app.use(express.static(path.join(__dirname, 'public')))





module.exports = app