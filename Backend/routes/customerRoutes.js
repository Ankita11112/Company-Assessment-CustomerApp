const express = require("express");
const { getMemberships, createMembership } = require("../controllers/customerController");

const router = express.Router();

router.get("/getmemberships", getMemberships);
router.post("/createmembership", createMembership);

module.exports = router;