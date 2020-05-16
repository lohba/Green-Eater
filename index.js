const express = require('express');
var handlers = require('./requestHandlers');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/search', handlers.searchRequest);
app.get('/test', handlers.testRequest);
app.get('/id', handlers.idRequest);
app.post('/rating', handlers.ratingRequest);

const PORT = 3000;

app.listen(PORT, () => console.log("hello"))  