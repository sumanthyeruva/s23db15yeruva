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
exports.Employee_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Employee.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.Employee_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Employee.findById( req.params.id)
// Do updates of properties
if(req.body.Employee_fname)
toUpdate.Employee_fname = req.body.Employee_fname;
if(req.body.Employee_lname) toUpdate.Employee_lname = req.body.Employee_lname;
if(req.body.Employee_id) toUpdate.Employee_id = req.body.Employee_id;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
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
    // Handle Employee delete on DELETE.
exports.Employee_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Employee.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.Employee_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Employee.findById( req.query.id)
    res.render('Employeedetail',
    { title: 'Employee Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for creating a Employee.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Employee_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Employeecreate', { title: 'Employee Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a Employee.
// query provides the id
exports.Employee_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Employee.findById(req.query.id)
    res.render('Employeeupdate', { title: 'Employee Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.Employee_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Employee.findById(req.query.id)
    res.render('Employeedelete', { title: 'Employee Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
       