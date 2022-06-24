var express = require('express');
var router = express.Router();
const getMetaData = require('metadata-scraper')
/* GET og listing. */
router.get('/', function(req, res, next) {

var siteUrl = req.query['u'];
getMetaData(siteUrl).then((data) => {
	console.log(data);
   res.json(data);
})
});

module.exports = router;
