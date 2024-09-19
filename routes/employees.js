// Create a router and make GET routes for /, /:id, firstname/:first_name

const express = require("express")
const employees = ("../controllers/employees")
const router = express.Router()

// Route for /employees
router.get("/employees", (req, res) => {
    //employees.getEmployees
    res.send("getting employees...")
}) 

// Route to get employee by ID
router.get("/employee/:id", (req, res) => {
    // employees.getEmployeesById
    res.send("getting employees by id...")
})

// Route to get employee by firstname /first_name
router.get("/employee/firstname/:first_name", (req, res) => {
    // employees.getEmployeesByFirstName
    res.send("getting employees by first name...")
})

module.exports = router