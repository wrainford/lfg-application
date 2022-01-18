require('dotenv').config();

/* ==== External Modules ==== */
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
/* ==== Internal Modules ==== */
//Require Models for Mongoose
require('./models')
const routes = require('./routes/index')
/* ==== Instanced Modules  ==== */
const app = express();
/* ====  Configuration  ==== */
const PORT = 4000;

app.set('view engine', 'ejs');
/* ====  Middleware  ==== */
//body data middleware
app.use(express.urlencoded({extended: true}));
//method override middleware
app.use(methodOverride('_method'));
//server public files
app.use(express.static('public'));
//morgan
app.use(morgan('tiny'));

/* ====  Routes & Controllers  ==== */
//Home Route
app.get("/", (req, res) => {
    res.render('index')
});
//404 Route
/* ====  Server Listener  ==== */

app.listen(PORT, () => {
    console.log(`LFG App is connected on port: ${PORT}`)
});