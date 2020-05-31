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

function filterData(id, reviewCount) {
    //let sql = 'SELECT * FROM restaurants where '
   // let sql = `SELECT EXISTS(SELECT id FROM restaurants WHERE id = ('${id}'))`
   let sql = `UPDATE restaurants SET (rating, reviewCount) VALUES ('${id}','${reviewCount}' ) IF EXISTS (SELECT id FROM restaurants WHERE id = ('${id}'))
   ELSE INSERT INTO restaurants VALUES New_review)`
    db.query(sql, function (err, result) {
        if (err) console.log("no") ;
        console.log(result)
    }) 
    UPDATE Reviews
SET Reviews.rating = new rating average
WHERE EXISTS (SELECT ID_column FROM Reviews WHERE Review.ID = New_review.ID
}


module.exports = {insertData, filterData}