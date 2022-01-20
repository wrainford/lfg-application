// LOCAL LOGIN
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('./models/user')

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
