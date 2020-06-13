const express = require('express');
var handlers = require('./requestHandlers');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/search', handlers.searchRequest);
app.post('/category', handlers.categoryRequest);
app.post('/rating', handlers.ratingRequest);

const PORT = 3000;

app.listen(PORT, () => console.log("hello"))  