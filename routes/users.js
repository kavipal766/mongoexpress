var express = require('express');
var router = express.Router();
var controller = require('../controllers/users.js');
console.log("users12332242424424242424242424");
router.post('/users',controller.createUser);
router.post('/iteams',controller.createIteam);
router.get('/find',controller.findCollection);
router.get('/update',controller.updateOne);
router.get('/findAnd',controller.findAnd);
router.get('/count',controller.Count);
router.get('/regexfind',controller.regex);

module.exports = router;
