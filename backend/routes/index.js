var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/restaurants', function (req, res) {
  getRestaurants(function (restaurants) {
    res.json(restaurants);
  });
});
var uri = "mongodb://adminresta:elrestaurantepro@restaurantcluster-shard-00-00-nc7qp.mongod" +
        "b.net:27017,restaurantcluster-shard-00-01-nc7qp.mongodb.net:27017,restaurantclus" +
        "ter-shard-00-02-nc7qp.mongodb.net:27017/test?ssl=true&replicaSet=restaurantClust" +
        "er-shard-0&authSource=admin";

function getRestaurants(callback) {
    MongoClient.connect(uri, function (err, db) {
            if (err) throw err;
            console.log("conectado!");
            var restaur = db.collection("restaurants");
            console.log("seleccionado la db restaurant");
            restaur
                .find({})
                .toArray(function (err2, restaurants) {
                    if (err2) 
                        throw err2;
                    console.log(restaurants.length);
                    callback(restaurants);
                });
            db.close();
        });
}

module.exports = router;
