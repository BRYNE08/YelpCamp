var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require("body-parser");
var app = express();

var indexRoutes            = require("./routes/index"),    
    campgroundRoutes       = require("./routes/campgrounds");
// const seedDB = require('./seeds');

//mongoose.connect("mongodb://localhost/yelpcamp");

mongoose.connect("mongodb+srv://Bryne:Lloyd1996@yelpcamp.iml75.mongodb.net/yelpcamp?retryWrites=true&w=majority");
mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected");
});



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
// seedDB();

// requiring routes
app.use(indexRoutes);
app.use(campgroundRoutes);



app.listen(5000, () =>{
    console.log("Server running");
});