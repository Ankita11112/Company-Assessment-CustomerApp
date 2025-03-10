const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String,
        required: true, 
        unique: true
  },
    contactNumber: { 
        type: String, 
        required: true 
    },
    membership: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Membership", 
        required: true 
    },
    status: { 
        type: String, 
        enum: ["Gold", "Diamond"], 
        required: true 
    },
});

module.exports = mongoose.model("Customer", customerSchema);
