const express = require("express");
var handlers = require("./requestHandlers");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    methods: ["GET"],
  })
);
app.use(bodyParser.json());

app.get("/search", handlers.searchRequest);
app.post("/category", handlers.categoryRequest);
app.post("/rating", handlers.ratingRequest);

const PORT = 3000;

app.listen(PORT, () => console.log("hello"));
