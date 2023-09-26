// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
require('dotenv').config();

const Server = require('./Server');

const server = new Server();

server.listen();