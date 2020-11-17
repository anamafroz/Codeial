const express = require('express');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();
const router = express.Router();

const postsController = require('../controllers/post_controller');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/create',urlencodedParser,postsController.create);

module.exports = router;