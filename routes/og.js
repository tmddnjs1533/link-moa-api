var express = require('express');
var router = express.Router();
const urlMetadata = require('url-metadata')
/* GET og listing. */
router.get('/', function(req, res, next) {
  var siteUrl = req.query['u'];

  urlMetadata(siteUrl).then((data) => {
    //console.log(data);
     res.json(data);
  },err=> {
    //console.log("에러")
    //console.log(err);
    res.send(err);
  })
});

module.exports = router;
