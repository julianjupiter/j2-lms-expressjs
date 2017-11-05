const sessionUtil = require('../utils/session');

exports.index = (req, res, next) => {
    let session = sessionUtil.session(req);
    let authenticated = sessionUtil.isAuthenticated(session);

    if (!authenticated) {
        console.log('AUTHENTICATED|' + authenticated);
        res.redirect('/auth/login');
    }

    let firstName = sessionUtil.get(session, 'firstName');

    let attribute = {
        appTitle : "J2 Library Management System",
        pageTitle : "About",
        session: {
            firstName: firstName
        }
    };

    res.render("about/index", { attribute : attribute }); 
};