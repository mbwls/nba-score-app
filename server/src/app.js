require('dotenv').config({ path: process.env.ENV_FILE });

const express = require('express');
const app = express();
const CONFIG = require('./config/constant.config');
const allRoutes = require('./routes/index');
const path = require('path');
const pe = require('parse-error');

/* SET THE VIEW FOLDER TO EMPTY -- NEEDED TO USE REACT index.html */
let views = app.get('views');
app.set(
    'views',
    typeof views == 'string'
        ? [views]
        : views || [].concat([path.join(__dirname, '../../client/build')])
);

/* PATH TO STATIC FOLDER FOR REACT BUILD FILES */
app.use(
    `${CONFIG.app_route}/static`,
    express.static(path.join(__dirname, '../../client/build/static'), {
        maxAge: '30m'
    })
);

/* INITIALIZE ALL ROUTES TO APP */
app.use(CONFIG.app_route, allRoutes);

/* IF NO ROUTE MATCHES FALL BACK TO REACT ROUTES */
app.use(function(req, res, next) {
    req.path.includes(CONFIG.app_route)
        ? res.sendFile(path.join(__dirname, '../../client/build/index.html'))
        : next();
});

/* LOG IF THE APP CRASHES FOR SOME REASON */
process.on('unhandledRejection', error => {
    console.error('Uncaught Error', pe(error));
});

process.on('uncaughtException', error => {
    console.error('Uncaught Error', pe(error));
});

const server = app.listen(process.env.PORT, () => {
    console.log(`Node server started on ${process.env.PORT}`);
});
