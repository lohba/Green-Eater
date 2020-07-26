var request = require("request");
var myArgs = process.argv.slice(2);

function searchRequest() {
  var options = {
    method: "GET",
    url: `http://localhost:3000/search?location=${myArgs[1]}&term=${myArgs[2]}`,
    headers: {},
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}

//node myArgs searchRequest 10009 coffee

function categoryRequest() {
  var options = {
    method: "POST",
    url: "http://localhost:3000/category",
    headers: {
      Authorization:
        "Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ zip: myArgs[1], category: myArgs[2] }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}
function ratingRequest() {
  var options = {
    method: "POST",
    url: "http://localhost:3000/rating",
    headers: {
      Authorization:
        "Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: myArgs[1], sustainability: myArgs[2] }),
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
}

switch (myArgs[0]) {
  case "searchRequest":
    searchRequest();
    break;
  case "categoryRequest":
    categoryRequest(myArgs);
    break;
  case "ratingRequest":
    ratingRequest(myArgs);
    break;
}

console.log(myArgs[0]);

//Create Write Review Page which pulls restaurant name and zip from Yelp API. From this page you can rate sustainability rating.

// function searchRequest() {
//     var options = {
//         'method': 'GET',
//         'url': `https://api.yelp.com/v3/businesses/search?location=${myArgs[1]}&term=${myArgs[2]}`,
//         'headers': {
//             'Authorization': 'Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx'
//         }
//     }

// request(options, function(error, response) {
//         if (error) throw new Error(error);
//         let jsonData = JSON.parse(response.body);
//         let array = []
//         for (let i = 0; i < jsonData.businesses.length; i++) {
//             let business = {
//                 name: jsonData.businesses[i].name,
//                 location: jsonData.businesses[i].location,
//                 coordinates: jsonData.businesses[i].coordinates,
//                 id: jsonData.businesses[i].id
//             };
//             array.push(business);
//         }
//         console.log(array)
//         //res.send(array)
//     })
// }

// const responseSender = function(res) {
//     return function(err, result) {
//         if (err) {
//             //console.log(res.status(500).sendStatus(err));
//             console.log(res)
//         } else {
//             //res.sendStatus(200);
//             console.log(result)//res.send(result)
//         }
//     };
// }

// function categoryRequest (myArgs, res) {
//     const sendResponse = responseSender(res);
//     dataBase.getEntries(myArgs[1], myArgs[2], function(err, result) {
//         if (result.length > 0) {
//             sendResponse(err,result)
//         } else {
//             console.log('no result')
//         }
//    });
// }

// //#1
// const updateEntry = (id, sustainability, reviewCount, cb) => {
//     dataBase.updateScore(id, sustainability, reviewCount, cb);
// }
// //#2
// const updateExisting = (id, result, newRating, cb) => {
//     let averageRating = ((result[0].reviewCount * result[0].sustainability ) + newRating ) / (result[0].reviewCount + 1)
//     let newRatingCount = result[0].reviewCount + 1
//     updateEntry(id, averageRating, newRatingCount, cb)
// };
// //#3
// const yelpRequest = function(myArgs, cb) {
//     var options = {
//         'method': 'GET',
//         'url': `https://api.yelp.com/v3/businesses/${myArgs[1]}`,
//         'headers': {
//             'Authorization': 'Bearer mxBzGh0rfHIhoMZJjbkVdLClsarZFfCf-RtU7U1EzOzN7kEWTHUSCJEB-H_L638R_3D69s1ua7kDOvp5Cza47AqmU1u5YBgOmIwTTZkV5ZqajygKoMI6s-ALVeiAXnYx'
//         }
//     };

//     request(options, function (error, response) {
//         if (error) {
//             cb(error);
//         }
//         let jsonData = JSON.parse(response.body);

//         var alias = function() {
//             return jsonData.categories.map(function(category) {
//               return category.alias;
//             })
//           };

//         let ratingOutput = {
//             name: jsonData.name,
//             category: alias(),
//             location: jsonData.location.display_address.toString(),
//             zip: jsonData.location.zip_code,
//             coordinates: Object.values(jsonData.coordinates).toString(),
//             id: myArgs[1],
//             sustainability:myArgs[2],
//             reviewCount: 1
//         };
//         cb(undefined, ratingOutput);
//      })
//    }

// const createNewEntry = (myArgs, cb) => {
//     const yelpCb = (err, yelpResult) => {
//         if (err) {
//             cb(err)
//         } else {
//             console.log("New Entry: "  )
//             console.log(yelpResult)
//             //dataBase.insertData(yelpResult, cb);
//         }
//     };
//     yelpRequest(myArgs, yelpCb)
// };

// const ratingRequest = (myArgs, res) => {
//     const sendResponse = responseSender(res);
//     dataBase.getEntry(myArgs[1], function(err, result) {
//         if (result.length > 0) {
//             updateExisting(myArgs[1], result, myArgs[2], sendResponse);
//          } else {
//             createNewEntry(myArgs, sendResponse);
//              //console.log('going to create')
//          }
//    });
// }

switch (myArgs[0]) {
  case "searchRequest":
    searchRequest();
    break;
  case "categoryRequest":
    categoryRequest(myArgs);
    break;
  case "ratingRequest":
    ratingRequest(myArgs);
    break;
}
