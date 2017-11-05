const sessionUtil = require('../utils/session');
const moment = require('moment');
const book = require('../models/Book');

exports.findAll = (req, res, next) => {
    console.log('BookController.findAll()'); 
    
    let session = sessionUtil.session(req);
    let authenticated = sessionUtil.isAuthenticated(session);

    if (!authenticated) {
        console.log('AUTHENTICATED|' + authenticated);
        res.redirect('/auth/login');
    }

    let firstName = sessionUtil.get(session, 'firstName');

    book.findAll().then(books => {
        let attribute = {
            appTitle : "J2 Library Management System",
            pageTitle : "Book",
            session: {
                firstName: firstName
            },
            books: [],
        };
        books.forEach(book => {
            attribute.books.push({id: book.id, title: book.title, description: book.description, created_at: moment(book.created_at).format('L')});
        });
        console.log(JSON.stringify(attribute.books));   

        res.render("book/findAll", { attribute : attribute }); 
    });    
};

exports.findById = (req, res, next) => {
    let id = req.params.id;
    console.log('BookController.findById(' + id + ')');

    book.findById(id).then(book => {
        book.created_at = moment(book.created_at).format('L');
        console.log(JSON.stringify(book));
        res.json(book); 
    });
};