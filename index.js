const express = require('express');
var request = require('request');

const app = express();

app.get('/search', function(req, res) {
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

});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("hello"))