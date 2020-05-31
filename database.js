var mysql = require('mysql');

var db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345",
  database: "restaurantdb"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

let sql = 'CREATE TABLE IF NOT EXISTS restaurants (num INT AUTO_INCREMENT PRIMARY KEY, category VARCHAR(255), location VARCHAR(255), zip VARCHAR(255), coordinates VARCHAR(255), id VARCHAR(255), sustainability VARCHAR(255), reviewCount VARCHAR(255))';
db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("created");
});

// Insert 
function insertData(category, location, zip, coordinates, id, sustainability, reviewCount) {
    let sql = `INSERT INTO restaurants (category, location, zip, coordinates, id, sustainability, reviewCount) VALUES ('${category}', '${location}', '${zip}','${coordinates}', '${id}', '${sustainability}', '${reviewCount}')`
    db.query(sql, function (err, result) {
         if (err) throw err;
       })
}

function filterData() {
    let sql = 'SELECT * FROM restaurants where '
}


module.exports = {insertData}