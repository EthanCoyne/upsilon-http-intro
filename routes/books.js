var router = require('express').Router();

router.get('/', function(req, res) {
  res.send('Pokemon are cool')
});

module.exports = router;
