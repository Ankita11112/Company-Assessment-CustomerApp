const express = require("express");
const { getMemberships, createMembership } = require("../controllers/customerController");

const router = express.Router();

router.get("/", getMemberships);
router.post("/", createMembership);

module.exports = router;