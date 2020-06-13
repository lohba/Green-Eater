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

let sql = 'CREATE TABLE IF NOT EXISTS restaurants (num INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), category VARCHAR(255), location VARCHAR(255), zip VARCHAR(255), coordinates VARCHAR(255), id VARCHAR(255), sustainability INT(255), reviewCount INT(255))';
db.query(sql, function (err, result) {
  if (err) throw err;
  console.log("created");
});

// Insert 
function insertData(data, cb) {
    let {name, category, location, zip, coordinates, id, sustainability, reviewCount} = data;
    let sql = `INSERT INTO restaurants (name, category, location, zip, coordinates, id, sustainability, reviewCount) VALUES ('${name}', '${category}', '${location}', '${zip}','${coordinates}', '${id}', '${sustainability}', '${reviewCount}')`
    db.query(sql, cb)
}

//Update
function updateScore(id, sustainability, reviewCount, cb) {
    let sql = `UPDATE restaurants SET sustainability = '${sustainability}', reviewCount = '${reviewCount}' WHERE id='${id}'`
    db.query(sql, cb); 
};

//Get Entry
function getEntry(id, cb) {
    let sql = `SELECT * FROM  restaurants WHERE id = '${id}'`
    db.query(sql, cb);
}
//Get Entries
function getEntries(zip, category, cb) {
    let sql = `SELECT * FROM  restaurants WHERE (zip = '${zip}') AND CATEGORY LIKE '%${category}%'`
    db.query(sql, cb)
}
// Filter by category and zip
// function ratingRequest(categoryy, location, zip, coordinates, id, sustainability, reviewCount) {
   
//    let sql = `UPDATE restaurants SET sustainability = '${sustainability}', reviewCount = '${reviewCount}' WHERE EXISTS (SELECT id FROM restaurants WHERE id = ('${id}'))`
//     console.log(sql);
//    // `UPDATE restaurants SET (sustainability, reviewCount) VALUES ('${sustainability}','${reviewCount}') SELECT IF (EXISTS (SELECT id FROM restaurants WHERE id = ('${id}')))
//   // ELSE INSERT INTO restaurants (category, location, zip, coordinates, id, sustainability, reviewCount) VALUES ('${category}', '${location}', '${zip}','${coordinates}', '${id}', '${sustainability}', '${reviewCount}')`
//     db.query(sql, function (err, result) {
//         if (err) console.log("no") ;
//         console.log(result)
//     }) 
    
// }


module.exports = {insertData, getEntry, updateScore, getEntries}