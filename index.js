const express = require('express');
var handlers = require('./requestHandlers')

const app = express();

app.get('/search', handlers.searchRequest);
app.get('/test', handlers.testRequest);

const PORT = 3000;

app.listen(PORT, () => console.log("hello"))  