var express = require('express');
var router = express.Router();
var cityFind = require('../controllers/demo/demo1.js')
var articleFind = require('../controllers/demo/demo2.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/city', function(req, res, next) {
  cityFind(req, res, next)
})

router.get('/article', function(req, res, next) {
  articleFind(req, res, next)
})

module.exports = router;
