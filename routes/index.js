const express =require('express');
const router = express.Router()
console.log('Router loaded');
// const User = require('../models/users');


const homeController=require('../controllers/home_controller');
// const userController=require('../controllers/users_controller');
// const signUpController=require('../controllers/signup_controller');

router.get('/',homeController.home);


router.use('/users', require('./users'));
router.use('/upload', require('./upload'));
router.use('/viewfile', require('./viewfile'));

router.use('/api', require('./api'));

module.exports= router;