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

let sql = 'CREATE TABLE IF NOT EXISTS restaurants (num INT AUTO_INCREMENT PRIMARY KEY, category VARCHAR(255), location VARCHAR(255), coordinates VARCHAR(255), id VARCHAR(255), sustainability VARCHAR(255), reviewCount VARCHAR(255))';
db.query(sql, function (err, result) {
  if (err) throw err;
  //console.log(result);
});

// Insert 
function insertData(category, location, coordinates, id, sustainability, reviewCount) {
    let sql = 'INSERT INTO restaurants (category, location, coordinates, id, sustainability, reviewCount) VALUES (category, location, coordinates, id, sustainability, reviewCount)'
     db.query(sql, function (err, result) {
         if (err) throw err;
         console.log(result);
       })
}

export default {insertData}