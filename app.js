const express = require('express');
const session = require('./app/utils/session');
const config = require('./app/config/application');
const routes = require('./app/config/routes');
const app = express();

config.list(express, app);
session.start(app);
routes.list(app);

const port = app.get('port');
app.listen(port, () => {
    console.log('Application listening on port ' + port + '!');
});