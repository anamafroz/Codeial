const express = require('express');
var bodyParser = require('body-parser');


var jsonParser = bodyParser.json();


const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/users_controller');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/profile/:id',passport.checkAuthentication,userController.profile);

router.post('/update/:id',passport.checkAuthentication,urlencodedParser,userController.update);


router.get('/sign-up',userController.signUp);

router.get('/sign-in',userController.signIn);

router.post('/create',urlencodedParser, userController.create);

// use passport as a middleware to authenticate
router.post('/create-session',urlencodedParser,passport.authenticate(
    'local',
    {failureRedirect :'/user/sign-in'}
    
),userController.createSession )

router.get('/sign-out',userController.destroySession);
module.exports = router;