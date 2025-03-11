const express = require("express");
const { getMemberships, createMembership } = require("../controllers/membershipController");

const router = express.Router();

router.get("/getmemberships", getMemberships);
router.post("/createmembership", createMembership);

module.exports = router;

