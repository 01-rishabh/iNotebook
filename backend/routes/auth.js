
const express = require('express');
const User = require('../models/User');
const router = express.Router();
//using a good validation - here we are going to use express vaildator.


//Create a user using : POST "/api/auth/".  
router.post('/', (req, res) =>{
    console.log(req.body)
    const user = User(req.body)
    user.save()
    res.send(req.body);
})

module.exports = router