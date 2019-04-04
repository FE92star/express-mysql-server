var express = require('express');
var router = express.Router();
var cityFind = require('../controllers/demo.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/city', function(req, res, next) {
  cityFind(req, res, next)
})

module.exports = router;
