const express = require('express');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();
const router = express.Router();
const passport = require('passport');

const commentsController = require('../controllers/comments_controller');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/create',passport.checkAuthentication,urlencodedParser,commentsController.create);

module.exports = router;