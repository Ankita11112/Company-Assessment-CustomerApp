const { body } = require("express-validator");

exports.validateCustomer = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("contactNumber").notEmpty().withMessage("Contact number is required"),
  body("status").isIn(["Gold", "Diamond"]).withMessage("Status must be Gold or Diamond"),
  body("membership").notEmpty().withMessage("Membership is required"),
];
