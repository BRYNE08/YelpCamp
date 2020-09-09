var express =   require("express");    

var router = express.Router();


//root router
router.get('/', (req,res) =>{
    res.render("landing");
});

router.get('/login', (req,res) => {
    res.render("login");
});

module.exports = router;