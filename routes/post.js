const express = require('express');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();
const router = express.Router();
const passport = require('passport');

const postsController = require('../controllers/post_controller');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/create',passport.checkAuthentication,urlencodedParser,postsController.create);
router.get('/destroy/:id',passport.checkAuthentication,postsController.destroy);
module.exports = router;