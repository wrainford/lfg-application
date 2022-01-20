// LOCAL LOGIN
const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const User = require('./models/user')
const bcrypt = require('bcryptjs')

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'Invalid Email - Create an Account!'})
        }

        try{

            if(await bcrypt.compare(password, user.password)){
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password is Incorrect!'})
            }
        }catch(err){
            return done(e)
        }
    };
    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser(async (id, done) => {
        return done(null, await getUserById(id))
    })
}

module.exports = initialize;

