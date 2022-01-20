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
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
//Passport
const initializePassport = require('./passport')
initializePassport(
    passport,
    async (email) => {
        const userFound = await User.findOne({ email })
        return userFound
    },
    async (id) => {
        const userFound = await User.findOne({ _id: id });
        return userFound
    }
)

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


app.use(morgan('tiny'));

app.use(session({
    secret: "LFG App",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

/* ====  Routes & Controllers  ==== */
//Home Route
app.get("/", (req, res) => {
    res.render('index')
});

//LOGIN ROUTE
app.get("/login", (req, res) => {
    res.render('users/login')
});

//Account creation route
app.get("/create", (req,res) => {
    res.render("users/create")
});
app.use('/create', usersRouter) // need to edit this and user routing for create account
//404 Route
/* ====  Server Listener  ==== */

app.listen(PORT, () => {
    console.log(`LFG App is connected on port: ${PORT}`)
});