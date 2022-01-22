const mongoose = require('mongoose');
const User = require('../models/user');
const Game = require("../models/game");
const passport = require('passport');
const flash = require('express-flash');
const bcrypt = require('bcryptjs');
const multer = require('multer');


// INDEX Profile Page
const userHome = (req, res) => {
    res.render('index', { title: 'User Profile',
    id: req.user.id,
    name: req.user.name,
    userName: req.user.userName,
    location: req.user.location,
    discordId: req.user.discordId,
    favoriteGames: req.user.favoriteGames,
    pfImg: req.user.pfImg,
    });
}

const showFav = (req, res) => {
    User.findById(req.params.id)
    .populate("favoriteGames").exec(function (err, foundUser) {
        if (err) return res.send(err);
        const context = { user: foundUser };
        return res.render("favorites", context);
    });
};

const editFav = (req, res) => {
    User.findById(req.params.id)
    .populate("favoriteGames").exec(function (err, foundUser) {
        if (err) return res.send(err);
        Game.find(function(err, foundGames) {
            const context = { user: foundUser, games: foundGames };
            return res.render("addfavorite", context);
        });
    });
};

const addFav = (req, res) => {
    User.findById(req.params.id, function(err, user) {
        user.favoriteGames.push(req.body.gameId);
        user.save(function(err) {
            res.redirect(`/addfavorites/${user.id}`);
        });
    });
};

const removeFav = (req, res) => {
    User.findById(req.params.id, function(err, user) {
        const idx = user.favoriteGames.indexOf(req.body.gameId);
        user.favoriteGames.splice(idx, 1);
        user.save(function(err) {
            res.redirect(`/addfavorites/${user.id}`);
        });
    });
};

// CREATE New User Page
// NEW USER / CREATE ACCOUNT PAGE
const newUser = (req,res) => {
    res.render("create")
};

//LOGIN Login Page 
const loginPage = (req, res) => {
    res.render('login')
};

// CREATE New User Handling
const createAccount = async (req, res) => {
    const userFound = await User.findOne( { email: req.body.email})
    if (userFound) {
        req.flash('error', 'This email already exists! Please try another.')
        res.redirect('/create')
    }
    else {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                userName: req.body.userName,
                password: hashedPassword,
                location: req.body.location,
                email: req.body.email,
                discordId: req.body.discordId,
                pfImg: req.file.filename,
            })
            await user.save()
            res.redirect('/login');
        } catch (error) {
            console.log(error);
            res.redirect('/create')
        }
    }
}

//LOGOUT User Delete Handling
const logoutUser = (req, res) => {
    req.logout();
    res.redirect("/login");
}

module.exports = {
    userHome,
    newUser,
    createAccount,
    loginPage,
    logoutUser,
    showFav,
    editFav,
    addFav,
    removeFav

}