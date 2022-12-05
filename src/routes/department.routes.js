const router = require("express").Router();
const departmentCtrl = require("../controllers/department.controller");
/* GET users listing. */
router.post("/create-department", departmentCtrl.createDepartment);
router.get("/show", departmentCtrl.showAllDepartment);
router.get("/show-id/:id", departmentCtrl.showById);
router.put("/update/:id", departmentCtrl.updateDepartment);

module.exports = router;
