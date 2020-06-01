var request = require('request');
var testData = require('./testData');
var dataBase = require('./database');

const searchRequest = function(req, res) {
    var options = {
        'method': 'GET',
        'url': `https://api.yelp.com/v3/businesses/search?location=${req.query.location}&term=${req.query.term}`,
        'headers': {
            'Authorization': 'Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx'
        }
    }

    request(options, function(error, response) {
        if (error) throw new Error(error);
        let jsonData = JSON.parse(response.body);
        let array = []
        for (let i = 0; i < jsonData.businesses.length; i++) {
            let business = {
                name: jsonData.businesses[i].name,
                location: jsonData.businesses[i].location,
                coordinates: jsonData.businesses[i].coordinates,
                id: jsonData.businesses[i].id
            };
            array.push(business);
            
        }
        res.send(array)
        
    })
};

const filterRequest = function(req, res) {
//LIKE REQUEST
    let places = testData.testData
    let category = req.query.category;
    let zipcode = req.query.location;

    function containsCategory(restaurant, category) {
        for (let i = 0; i < restaurant.category.length ; i++) {
            if (restaurant.category[i] === category) {
                return true
            }
        }
    }
   
    let filteredPlaces = places.filter(restaurant => restaurant.location.zip_code === zipcode && containsCategory(restaurant, category))
   
    res.send(filteredPlaces)
}


 
// POST request 
//ID and sustainabiltiy rating
//The data sent to the server with POST is stored in the request body of the HTTP request:
//${id}
const ratingRequest = function(req, res) {
//QUERY BY ID
    let places = testData.testData;
    let indexOfData = -1;
    for (var i = 0; i < places.length; i++) {
        if (req.body.id === places[i].id) {
            places[i].reviewSum += req.body.sustainability
            places[i].reviewCount++
            console.log(places[i].reviewSum)
            let averageRating = (places[i].reviewSum) / (places[i].reviewCount)   
            places[i].sustainability = averageRating 
            indexOfData = i
        } 
    } 

    var options = {
        'method': 'GET',
        'url': `https://api.yelp.com/v3/businesses/${req.body.id}`,
        'headers': {
            'Authorization': 'Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx'
        }
    };
    request(options, function (error, response) { 
        if (error) throw new Error(error);
        let jsonData = JSON.parse(response.body);

        var alias = function() {
            return jsonData.categories.map(function(category) {
              return category.alias
            })
          };

        let ratingOutput = {
            category: alias().toString(),
            location: jsonData.location.display_address.toString(),
            zip: jsonData.location.zip_code,
            coordinates: Object.values(jsonData.coordinates).toString(),
            id: req.body.id,
            sustainability: req.body.sustainability,
            reviewCount: 1
        };

        if (indexOfData < 0) {
            console.log("pushed")
            places.push(ratingOutput)
            //dataBase.insertData(ratingOutput.category, ratingOutput.location, ratingOutput.zip, ratingOutput.coordinates, ratingOutput.id, ratingOutput.sustainability, ratingOutput.reviewCount)
            //console.log(typeof ratingOutput.category)
        } 
       // places.push(ratingOutput)
        //res.send(places)

        dataBase.getEntry(req.body.id, function(result) {
            console.log(result)
        });
        //dataBase.filterData(req.body.id)
       // console.log(typeof dataBase.insertData )
        
    });
    
}

module.exports = {searchRequest, filterRequest, ratingRequest };



















   // for (let i = 0; i < testDataArray.length; i++) {
    //      if (testDataArray[i].category === category && testDataArray[i].location.zip_code === zipcode) {
    //         array.push(testDataArray[i])    
    //      }
    // }
    // filter method
    // let filterData = testData.filter(function(e) {
    //     console.log(e.category)
    // })
    
    //console.log(filterData)
    //let filterData = testDataArray.filter(restaurant => restaurant[0].category === req.query.category);
    //console.log(testDataArray)
    //console.log(testDataArray.filter(restaurant => restaurant[0]))
    // function filterRestaurant(testDataArray) {
    //     if(testDataArray[0].category === req.query.category) {
    //         console.log("yes")
    //     }
    // }
    // filterRestaurant(testDataArray)