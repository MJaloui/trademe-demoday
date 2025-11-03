// app/models/item.js

// define the schema for our item model
var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    username: String,
    brand: String,
    size: String,
    category: String,
    imageURL: String,
    contactInfo: String
}, {
    timestamps: true
});

// create the model for items and expose it to our app
module.exports = mongoose.model('Item', itemSchema);

