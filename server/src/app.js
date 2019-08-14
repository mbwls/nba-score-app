require('dotenv').config({ path: process.env.ENV_FILE });

const express = require('express');
const app = express();
const CONFIG = require('./config/constant.config');
const allRoutes = require('./routes/index');
const path = require('path');
const cors = require('cors');
const pe = require('parse-error');

app.use(cors());

/* SET THE VIEW FOLDER TO EMPTY -- NEEDED TO USE REACT index.html */
let views = app.get('views');
app.set(
    'views',
    typeof views == 'string'
        ? [views]
        : views || [].concat([path.join(__dirname, '../../client/build')])
);

/* PATH TO STATIC FOLDER FOR REACT BUILD FILES */
app.use(express.static(path.join(__dirname, '../../client/build')));
app.get('/nba-scores', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

/* INITIALIZE ALL ROUTES TO APP */
app.use(CONFIG.app_route, allRoutes);

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
