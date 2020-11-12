const express = require('express');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json();


const router = express.Router();
const userController = require('../controllers/users_controller');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/profile',userController.profile);

router.get('/sign-up',userController.signUp);

router.get('/sign-in',userController.signIn);

router.post('/create',urlencodedParser, userController.create);

router.post('/create-session',urlencodedParser, userController.createSession);
router.post('/log-out',userController.logout);
module.exports = router;