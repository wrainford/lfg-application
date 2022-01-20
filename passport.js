// LOCAL LOGIN
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('./models/user')
const bcrypt = require('bcryptjs')

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {

    }
}

