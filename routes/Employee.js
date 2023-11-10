var express = require('express');
const Employee_controlers= require('../controllers/Employee');
var router = express.Router();
/* GET Employees */
router.get('/', Employee_controlers.Employee_view_all_Page );
module.exports = router;