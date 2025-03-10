const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
},
});

module.exports = mongoose.model("Membership", membershipSchema);