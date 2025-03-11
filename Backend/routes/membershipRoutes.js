const express = require("express");
const { getCustomers, createCustomer, updateCustomer, deleteCustomer } = require("../controllers/customerController");
const { validateCustomer } = require("../validators/customerValidator");

const router = express.Router();

router.get("/getcustomers", getCustomers);
router.post("/createcustomer", validateCustomer, createCustomer);
router.put("/updatecustomer/:id", validateCustomer, updateCustomer);
router.delete("/deletecustomer/:id", deleteCustomer);

module.exports = router;

