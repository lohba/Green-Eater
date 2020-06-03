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

let sql = 'CREATE TABLE IF NOT EXISTS restaurants (num INT AUTO_INCREMENT PRIMARY KEY, category VARCHAR(255), location VARCHAR(255), zip VARCHAR(255), coordinates VARCHAR(255), id VARCHAR(255), sustainability INT(255), reviewCount INT(255))';
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

function updateScore(sustainability, reviewCount) {
  //((reviewCount * currSustainability) + newSustainability ) / reviewCount + 1
    let sql = `UPDATE restaurants SET sustainability = ${sustainability}, reviewCount = ${reviewCount}`
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result)
       })
}

function getEntry(id) {
    //get the values for the row
    let sql = `SELECT * FROM  restaurants WHERE id = '${id}'`
    db.query(sql, function (err, result) {

         console.log(result.length)
    });
}

function getEntries(category, zip) {
    //LIKE
  

}

// Filter by category and zip
function ratingRequest(category, location, zip, coordinates, id, sustainability, reviewCount) {
   
   let sql = `UPDATE restaurants SET sustainability = '${sustainability}', reviewCount = '${reviewCount}' WHERE EXISTS (SELECT id FROM restaurants WHERE id = ('${id}'))`
    console.log(sql);
   // `UPDATE restaurants SET (sustainability, reviewCount) VALUES ('${sustainability}','${reviewCount}') SELECT IF (EXISTS (SELECT id FROM restaurants WHERE id = ('${id}')))
  // ELSE INSERT INTO restaurants (category, location, zip, coordinates, id, sustainability, reviewCount) VALUES ('${category}', '${location}', '${zip}','${coordinates}', '${id}', '${sustainability}', '${reviewCount}')`
    db.query(sql, function (err, result) {
        if (err) console.log("no") ;
        console.log( result)
    }) 
    
}


module.exports = {insertData, ratingRequest, getEntry, updateScore}