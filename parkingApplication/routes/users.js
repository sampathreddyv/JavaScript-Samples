var express = require('express');
var router = express.Router();

/*  If not signed in  */
router.use('/', function(req,res,next){
	if(!req.user){
		res.redirect("/");
	}
	next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users',{user: {
  	name: req.user.displayName, image: req.user.image
  }
  });
});

module.exports = router;