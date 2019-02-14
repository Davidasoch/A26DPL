var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Deploy automatico en heroku - Deploy manual provisional');
});

module.exports = router;
