const db = require("../models");

const newEmail =  (req, res) => {
    db.Email.create(req.body, function(err, createdEmail) {
        if (err) return res.send(err);
        return res.redirect(req.get('referer'));
    });
};
    
module.exports = {
    newEmail
};