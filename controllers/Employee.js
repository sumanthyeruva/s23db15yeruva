var Employee = require('../models/Employee');
// List of all Employees
exports.Employee_list = async function(req, res) {
    try{
    theEmployee = await Employee.find();
    res.send(theEmployee);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
  
// for a specific Employee.
exports.Employee_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id);
};
// Handle Employee create on POST.
exports.Employee_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Employee();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Employee_type":"goat", "cost":12, "size":"large"}
    document.Employee_fname = req.body.Employee_fname;
    document.Employee_lname = req.body.Employee_lname;
    document.Employee_id = req.body.Employee_id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle Employee delete form on DELETE.
exports.Employee_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id);
};
// Handle Employee update form on PUT.
exports.Employee_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.Employee_view_all_Page = async function(req, res) {
  try{
  theEmployee = await Employee.find();
  res.render('Employee', { title: 'Employee Search Results', results: theEmployee });
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };

  // VIEWS
// Handle a show all view
exports.Employee_view_all_Page = async function(req, res) {
    try{
    theEmployee = await Employee.find();
    res.render('Employee', { title: 'Employee Search Results', results: theEmployee });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };