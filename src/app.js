'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config'),
    router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(express.static('public'))
app.use('/', router);
var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});

module.exports = app;
