// notloggedin
function notAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.render('/')
    }
    next();
}

// isloggedin
function authenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }    
    res.render("/login");
}

module.exports = {
    notAuthenticated,
    authenticated,
}