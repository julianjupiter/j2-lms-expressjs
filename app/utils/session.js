const expressSession = require('express-session');

exports.start = (app) => {
    app.use(expressSession({secret: 'secret'}));
};

exports.session = (req) => {
    return req.session;
};

exports.authenticate = (session) => {
    session.authenticated = true;
};

exports.set = (session, key, value) => {
    session.key = value;
};

exports.get = (session, key) => {
    return session.key
};

exports.isAuthenticated = (session) => {
    return session.authenticated;
}