const Customer = require("../models/CustomerModel");
const { validationResult } = require("express-validator");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("membership", "name");
    res.status(200).json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, contactNumber, membership, status } = req.body;

    // Check if email already exists
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: "Email already in use" });
    }


    const newCustomer = new Customer({ firstName, lastName, email, contactNumber, membership, status });
    await newCustomer.save();

    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error.message);
    res.status(400).json({ message: "Invalid Data" });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error("Error updating customer:", error.message);
    res.status(400).json({ message: "Update Failed" });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error("Error deleting customer:", error.message);
    res.status(500).json({ message: "Delete Failed" });
  }
};

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};


