const express = require("express")
const deptManagers = require("../controllers/deptManagers")
const router = express.Router()

// Route for /all department managers
router.get("/departmentManagers", deptManagers.getDeptManagers);

//Route for department manager by id

router.get("/departmentManager/:id", deptManagers.getDeptManagerById)


module.exports = router