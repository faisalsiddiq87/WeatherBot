var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.status(200).send({'status' : true, 'data' : 'Api is working'});
});
 
module.exports = router;
 
