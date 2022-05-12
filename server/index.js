/**
 *  Connect Middleware to Express Server.
 */
const express = require('express');
const app = express();
const devMiddleware = require('./middleware');
const webpackDevConfig = require('../webpack/webpack.dev.config');

// Setup middleware.
devMiddleware(app, webpackDevConfig);

// Start app.
app.listen('4000');