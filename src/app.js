const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Connect to DB
mongoose.connect('mongodb://localhost/parcial')
    .then(db => console.log('DB Connected'))
    .catch(err => console.log(err));

//Import Routes
const indexRoutes = require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/', indexRoutes);

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})