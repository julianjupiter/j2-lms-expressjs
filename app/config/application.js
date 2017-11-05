const path = require('path');
const twig = require('twig');
var bodyParser = require('body-parser');

exports.list = (express, app) => {
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, '../views/templates'));
    app.set('view engine', 'html');
    app.engine('html', twig.__express);
    app.use(express.static(path.join(__dirname, '../../public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 
};