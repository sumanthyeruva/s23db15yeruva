var express = require('express');
const Employee_controlers= require('../controllers/Employee');
var router = express.Router();

// GET request for one Employee
router.get('/Employee/:id', Employee_controlers.Employee_detail);
module.exports = router;