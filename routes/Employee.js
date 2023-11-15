var express = require('express');
const Employee_controlers= require('../controllers/Employee');
var router = express.Router();

// GET request for one Employee
router.get('/Employee/:id', Employee_controlers.Employee_detail);
/* GET detail Employee page */
router.get('/detail', Employee_controlers.Employee_view_one_Page);
module.exports = router;