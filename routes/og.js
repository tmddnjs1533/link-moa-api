var express = require('express');
var opengraph = require('opengraph-io')({appId: 'f1685deb-90b2-459a-b59a-91fdb9fe6297'});
var router = express.Router();

/* GET og listing. */
router.get('/', function(req, res, next) {

// opengraph.getSiteInfo(u, {
//       cacheOk: false,
//       retryStrategies: [
//         {
//           // Requests using the default options.
//           requires: ["openGraph.title"]
//         },
//         {
//           // Make a full request to full render
//           fullRender: true,
//           requires: ["openGraph.title"]
//         },
//         {
//           // Make a request using the proxy
//           useProxy: true,
//           requires: ["openGraph.title"]
//         }
//       ]
//     })
//     .then(function(result){
//       console.log('Site title is', result.hybridGraph.title);
//     });
var siteUrl = req.query['u'];

  opengraph.getSiteInfo( decodeURIComponent(siteUrl) , function(err, siteInfo){
    console.log('hey err', err);
    console.log('hey result', siteInfo);
    res.json(siteInfo);
  });
  // res.send('응답이 완료되었습니다.쨔잔');
});

module.exports = router;
