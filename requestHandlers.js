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

    // request(options, function(error, response) {
    //     if (error) throw new Error(error);
    //     let jsonData = JSON.parse(response.body);
    //     let array = []
    //     for (let i = 0; i < jsonData.businesses.length; i++) {
    //         let business = {
    //             name: jsonData.businesses[i].name,
    //             location: jsonData.businesses[i].location,
    //             coordinates: jsonData.businesses[i].coordinates,
    //             id: jsonData.businesses[i].id
    //         };
    //         array.push(business);            
    //     }
    //     res.send(array)
    // })
};

const responseSender = function(res) {
    return function(err, result) {
        if (err) {
            res.status(500).sendStatus(err);
        } else {
            //res.sendStatus(200); 
            res.send(result)
        }
    };
}

//#1
const updateEntry = (id, sustainability, reviewCount, cb) => {
    dataBase.updateScore(id, sustainability, reviewCount, cb);
}
//#2
const updateExisting = (id, result, newRating, cb) => {
    let averageRating = ((result[0].reviewCount * result[0].sustainability ) + newRating ) / (result[0].reviewCount + 1)
    let newRatingCount = result[0].reviewCount + 1
    updateEntry(id, averageRating, newRatingCount, cb)
};
//#3
const yelpRequest = function(req, cb) {
    var options = {
        'method': 'GET',
        'url': `https://api.yelp.com/v3/businesses/${req.body.id}`,
        'headers': {
            'Authorization': 'Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx'
        }
    };
    
    request(options, function (error, response) { 
        if (error) {
            cb(error);
        }
        let jsonData = JSON.parse(response.body);
        
        var alias = function() {
            return jsonData.categories.map(function(category) {
              return category.alias;
            })
          };
          
        let ratingOutput = {
            name: jsonData.name,
            category: alias(),
            location: jsonData.location.display_address.toString(),
            zip: jsonData.location.zip_code,
            coordinates: Object.values(jsonData.coordinates).toString(),
            id: req.body.id,
            sustainability: req.body.sustainability,
            reviewCount: 1
        };

        cb(undefined, ratingOutput);
     })
   }

const createNewEntry = (req, cb) => {
    const yelpCb = (err, yelpResult) => {
        if (err) {
            cb(err)
        } else {
            dataBase.insertData(yelpResult, cb);
        }
    };
    yelpRequest(req, yelpCb);    
};

const ratingRequest = (req, res) => {
    const sendResponse = responseSender(res);
    dataBase.getEntry(req.body.id, function(err, result) {
        if (result.length > 0) {
            updateExisting(req.body.id, result, req.body.sustainability, sendResponse);
        } else {
            createNewEntry(req, sendResponse);
        }
   });
}

const categoryRequest = (req, res) => {
    const sendResponse = responseSender(res);
    dataBase.getEntries(req.body.zip, req.body.category, function(err, result) {
        if (result.length > 0) {
            sendResponse(err,result)
        } else {
            res.send("No Result")
        }
   });
}

module.exports = {searchRequest, ratingRequest, categoryRequest};
//updateEntry




//let pushData = -1;
        //dataBase.getEntry(req.body.id, function(err, result) {

            // old sustainability = result[0].sustainability 
            // new sustainability = ratingOutput.sustainability
            //let averageRating = ((result[0].reviewCount * result[0].sustainability ) + ratingOutput.sustainability ) / (result[0].reviewCount + 1)
            //result[0].sustainability = averageRating
            //let newRatingCount = result[0].reviewCount ++
            //dataBase.updateScore(averageRating, newRatingCount)
            //} 
        //);

        //if (pushData = -1) {
            //console.log("pushed")
            
            //places.push(ratingOutput)
            //dataBase.insertData(ratingOutput.category, ratingOutput.location, ratingOutput.zip, ratingOutput.coordinates, ratingOutput.id, ratingOutput.sustainability, ratingOutput.reviewCount)
            //console.log(typeof ratingOutput.category)
        //} 
       // places.push(ratingOutput)
        //res.send(places)

 
        //dataBase.filterData(req.body.id)
       // console.log(typeof dataBase.insertData )
        













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