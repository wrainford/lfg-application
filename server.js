require('dotenv').config();

const express = require('express');
const flash = require('express-flash')
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
/* ==== Internal Modules ==== */
//Require Models for Mongoose
require('./models')
const User = require('./models/user')
const Games = require("./models/game")
const routes = require('./routes/index')
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games");
const emailsRouter = require("./routes/emails")
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
// express flash
app.use(flash());
//server public files
app.use(express.static('public'));


app.use(morgan('tiny'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


/* ====  Routes & Controllers  ==== */

app.use('/users', usersRouter)
app.use('/', usersRouter) // need to edit this and user routing for create account
app.use("/games", gamesRouter);
app.use('/create', usersRouter)
app.use('/emails', emailsRouter);
//404 Route
/* ====  Server Listener  ==== */

app.listen(PORT, () => {
    console.log(`LFG App is connected on port: ${PORT}`)
});

