var express =   require("express");    

var router = express.Router();


//root router
router.get('/', (req,res) =>{
    res.render("landing");
});

router.get('/login', (req,res) => {
    res.render("login");
});

router.get('/signup', (req,res) => {
    res.render("signup");
});

router.get("/about", (req,res) => {
    res.render("about")
});

module.exports = router;