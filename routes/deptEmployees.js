const express = require("express")
const deptEmployees = require("../controllers/deptEmployees")
const router = express.Router()

// Route for all department employees: root/departmentEmployees
router.get("/departmentEmployees", getDeptEmployees)

// Route for getting department employees by ID
router.get("/departmentEmployee/:id", getDeptEmployeeByID)

// Route for gettign department employees by first name
router.get("departmentEmployee/first_name", getDeptEmployeesByFN)

module.exports = router