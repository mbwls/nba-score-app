require('dotenv').config({ path: process.env.ENV_FILE });

const express = require('express');
const app = express();

const server = app.listen(process.env.PORT, () => {
    console.log(`Node server started on ${process.env.PORT}`);
});
