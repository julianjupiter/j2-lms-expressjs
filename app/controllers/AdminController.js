const sessionUtil = require('../utils/session');

exports.index = (req, res, next) => {
    let session = sessionUtil.session(req);
    let authenticated = sessionUtil.isAuthenticated(session);

    if (!authenticated) {
        console.log('AUTHENTICATED|' + authenticated);
        res.redirect('/auth/login');
    }

    let firstName = sessionUtil.get(session, 'firstName');

    let attributes = {
        appTitle : "Topzeluj Co. Ltd.",
        pageTitle : "Admin",
        session: {
            firstName: firstName
        }
    };

    res.render("admin/index", { attributes : attributes }); 
};