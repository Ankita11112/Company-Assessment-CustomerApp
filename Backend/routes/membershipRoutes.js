const express = require("express");
const { getCustomers, createCustomer, updateCustomer, deleteCustomer } = require("../controllers/customerController");
const { validateCustomer } = require("../validators/customerValidator");

const router = express.Router();

router.get("/", getCustomers);
router.post("/", validateCustomer, createCustomer);
router.put("/:id", validateCustomer, updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;

