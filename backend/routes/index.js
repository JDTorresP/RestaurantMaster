var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var Restaurant = require('../modules/restaurant');
var mongoose = require('mongoose');

var uri = "mongodb://adminresta:elrestaurantepro@restaurantcluster-shard-00-00-nc7qp.mongod" +
        "b.net:27017,restaurantcluster-shard-00-01-nc7qp.mongodb.net:27017,restaurantclus" +
        "ter-shard-00-02-nc7qp.mongodb.net:27017/test?ssl=true&replicaSet=restaurantClust" +
        "er-shard-0&authSource=admin";

/* GET home page. */
router.get('/restaurants', function (req, res) {
    getRestaurants(function (restaurants) {
        res.json(restaurants);
    });
});

router.post('/restaurant', function (req, res) {
    mongoose.connect(uri);
    var restaur = new Restaurant();
    restaur.name = req.body.name;
    restaur.product = req.body.product;
    restaur.prodDescrip = req.body.prodDescrip;
    restaur.address = req.body.address;
    restaur.photo = req.body.photo;

    restaur.save(function (err) {
        if (err) {
            if (err.code == 11000) 
                return res.json({success: false, message: 'el restaurante con ese nombre ya existe'});
            else 
                return res.send(err);
            }
        res.json({message: 'Restaurante creado!'});
        mongoose
            .connection
            .close();
    });

})

router
    .route('/restaurant/:rest_id')
    .get(function (req, res) {
        mongoose.connect(uri);
        Restaurant.findById(req.params.rest_id, function (err, resta) {
            if (err) 
                res.send(err);
            
            // return that user
            res.json(resta);
            mongoose
                .connection
                .close();
        })
    })
    .put(function (req, res) {
        mongoose.connect(uri);
        Restaurant.findById(req.params.rest_id, function (err, resta) {
            if (err) 
                res.send(err);
            if (req.body.name) 
                resta.name = req.body.name;
            if (req.body.product) 
                resta.product = req.body.product;
            if (req.body.prodDescrip) 
                resta.prodDescrip = req.body.prodDescrip;
            if (req.body.address) 
                resta.address = req.body.address;
            if (req.body.photo) 
                resta.photo = req.body.photo;
            
            resta
                .save(function (err) {
                    if (err) 
                        res.send(err);
                    
                    // return a message
                    res.json({message: 'restaurant updated!'});
                    mongoose
                        .connection
                        .close();
                });
        });
    })

router
    .route('                                                                                                                                                                                                                                                                                                                                                                                                            ')
    .get(function (req, res) {
        mongoose.connect(uri);
        Restaurant.findById(req.params.rest_id, function (err, resta) {
            if (err) 
                res.send(err);
            
            resta.comments.findById(req.params.comm_id, function (err, com) {
                if (err) 
                res.send(err);
                res.json(com);
                mongoose
                .connection
                .close();
            })
        })
    })
router
    .route('/restaurant/:rest_id/comment')
    .post(function (req, res) {
        mongoose.connect(uri);
        Restaurant.findById(req.params.rest_id, function (err, resta) {
            if (err) 
                res.send(err);
            resta
                .comments
                .push({user_mail: req.body.user_mail, text: req.body.text, vote: req.body.vote});
            resta.save(function (err) {
                if (err) 
                    res.send(err);
                res.json(resta);
                mongoose
                    .connection
                    .close();
            });

        })
    })

function getRestaurants(callback) {
    MongoClient
        .connect(uri, function (err, db) {
            if (err) 
                throw err;
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
