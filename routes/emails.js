const router = require('express').Router();
const Email = require('../models/email');
const flash = require('express-flash');
const mongoose = require('mongoose');
const email = require('../models/email');
// Newsletter Signup Email Route



router.post('/emails', (req, res) => {
        if (err)  {
            return req.flash('error', 'Please try again')
        }
        else {
            const email = new Email({
                _id: new mongoose.Types.ObjectId(),
                emailAddress: req.body.emailAddress,
            })
            email.save()
            return res.redirect('/create')
        }
        
    })
module.exports = router;