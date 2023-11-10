var express = require("express");
var router = express.Router();
// Require controller modules.
var api_controller = require("../controllers/api");
var Employee_controller = require("../controllers/Employee");
/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
 router.post("/Employee", Employee_controller.Employee_create_post);
// // DELETE request to delete Costume.
 router.delete("/Employee/:id", Employee_controller.Employee_delete);
// // PUT request to update Costume.
router.put("/Employee/:id", Employee_controller.Employee_update_put);
// // GET request for one Costume.
 router.get("/Employee/:id", Employee_controller.Employee_detail);
// // GET request for list of all Costume items.
 router.get("/Employee", Employee_controller.Employee_list);
module.exports = router;