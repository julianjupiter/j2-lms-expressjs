const home = require('../routes/home');
const auth = require('../routes/auth');
const admin = require('../routes/admin');
const about = require('../routes/about');
const contact = require('../routes/contact');
const book = require('../routes/book');
const transaction = require('../routes/transaction');
const report = require('../routes/report');

exports.list = (app) => {
    app.use((req, res, next) => {
        let appName = 'J2 Library Management System';
        console.log(new Date() + '|' + appName + '|' + req.url);
        next();
    });

    app.use('/', home);
    app.use('/auth', auth);
    app.use('/admin', admin);
    app.use('/about', about);
    app.use('/contact', contact);
    app.use('/books', book);
    app.use('/transactions', transaction);
    app.use('/reports', report);
};