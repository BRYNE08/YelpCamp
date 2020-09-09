var mongoose = require('mongoose');

var campgroundSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,    
});

module.exports = mongoose.model("Campground", campgroundSchema);