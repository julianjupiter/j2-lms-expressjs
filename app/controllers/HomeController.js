const sessionUtil = require('../utils/session');

exports.index = (req, res) => {
    let session = sessionUtil.session(req);
    let authenticated = sessionUtil.isAuthenticated(session);

    if (!authenticated) {
        console.log('AUTHENTICATED|' + authenticated);
        res.redirect('/auth/login');
    }

    let firstName = sessionUtil.get(session, 'firstName');

    let attribute = {
        appTitle : "J2 Library Management System",
        pageTitle : "Dashboard",
        session: {
            firstName: firstName
        }
    };

    res.render("home/index", { attribute : attribute }); 
};