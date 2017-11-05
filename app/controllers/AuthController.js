const sessionUtil = require('../utils/session');

exports.index = (req, res) => {
    let session = sessionUtil.session(req);

    let authenticated = sessionUtil.isAuthenticated(session);

    if (authenticated) {
        res.redirect('/');
    }

    let attribute = {
        appTitle : "J2 Library Management System",
        pageTitle : "Login"
    };

    res.render("auth/index", { attribute : attribute }); 
};

exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.status(400);
        res.render('error/page_not_found', {message: 'Page not found!'});
    } else {
        let session = sessionUtil.session(req);
        sessionUtil.authenticate(session);
        sessionUtil.set(session, 'username', username);
        sessionUtil.set(session, 'username', 'Julez');
        res.redirect('/');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(function(){
      console.log('USER LOGGED OUT');
    });
    
    res.redirect('/auth/login');
};