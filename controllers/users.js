const mongoose = require('mongoose');
const User = require('../models/user');

// INDEX - will display all users

const index = (req, res) => {
    User.find({}, function (err, allUsers) {
        if (err) return res.send(err);
        const context = {users: allUsers}
        return res.render('users/index', {title: 'All Users',
            context
        })
    })
}

// SHOW

const showUser = (req, res) => {
    console.log(req.params.id);
    User.findById(req.params.id, function (err, foundUser) {
        if (err) return res.send(err);
        const context = {user: foundUser}
        return res.render('users/show', { title: 'Profile',
            context
        })
    })
}

// NEW USER / CREATE ACCOUNT PAGE
const newUser = (req, res) => {
    res.render('users/new', {title: 'Create an Account'})
}


// CREATE NEW USER
const createUser = (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.render('users/exists') // create page for email already used
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                userName: req.body.userName,
                password: req.body.password,
                location: req.body.location,
                email: req.body.email,
                discordId: req.body.discordId,
            })
            user.save(function (err) {
                if (err) return res.send(err);
                console.log(user)
                return res.redirect('/users') // need to alter the redirect after user creates account
            })

        }
    })
    
}

// LOGGING IN USER
const loginUser = (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length <1) {
            return res.render('users/invalid') // account doesnt exist
        }
        User.compare(req.body.password, user[0].password, (err, result) => {
            if (err) {
                return res.send(err)
            }
            if (result) {
                return res.redirect('/users') //need to alter the redirect after user login
            }
        })
    })
    .catch(err => {
        res.send(err)
    })
}

// DELETE USER - Remove Account
const destroyUser = (req, res, next) => {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if(err) return res.send(err);
        return res.redirect('index') //redirect back tot he views/index page
    })
}





module.exports = {
    index,
    showUser,
    newUser,
    createUser,
    destroyUser,
    loginUser,

}