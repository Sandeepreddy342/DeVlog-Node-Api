const mongoose = require('mongoose');
const authController = require('../controllers/auth');
const { userById } = require('../controllers/user');
const express = require('express');
const router = express.Router();
const validator = require('../validator/index');

// const myCheck = (req,res,next) =>{
//     console.log("Reached middleware")
//     next()
// }

router.post('/signup', authController.signup);

router.post('/signin',
// myCheck,
 authController.signin);
router.get('/signout', authController.signout);

router.param('userId', userById);



module.exports = router;

