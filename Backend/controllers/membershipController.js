const Membership = require("../models/MembershipModel");

// Get all memberships
const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create a membership
const createMembership = async (req, res) => {
  try {
    const { name } = req.body;
    const membership = new Membership({ name });
    await membership.save();
    res.status(201).json(membership);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data" });
  }
};

module.exports = {
    getMemberships,
    createMembership
  };  