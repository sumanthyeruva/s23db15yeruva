var express = require("express");
var router = express.Router();
var passport = require('passport');
var Account = require('../models/account');
// Require controller modules.
var api_controller = require("../controllers/api");
var Employee_controller = require("../controllers/Employee");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);
/// Employee ROUTES ///
// POST request for creating a Employee.
 router.post("/Employee", Employee_controller.Employee_create_post);
// // DELETE request to delete Employee.
 router.delete("/Employee/:id", Employee_controller.Employee_delete);
// // PUT request to update Employee.
router.put("/Employee/:id", Employee_controller.Employee_update_put);
// // GET request for one Employee.
 router.get("/Employee/:id", Employee_controller.Employee_detail);
// // GET request for list of all Employee items.
 router.get("/Employee", Employee_controller.Employee_list);

 router.get('/login', function(req, res) {
    res.render('login', { title: 'Employee App Login', user : req.user });
    });
    router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    router.get('/logout', function(req, res) {
    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
    });
    });
    router.get('/ping', function(req, res){
    res.status(200).send("pong!");
    });
    router.get('/ping', function(req, res){
    res.status(200).send("pong!");
    });
module.exports = router;