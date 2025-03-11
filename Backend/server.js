const express = require("express");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");
const membershipRoutes = require("./routes/membershipRoutes");
const errorHandler = require("./middleware/errorMiddleware");
const { default: database } = require("./config/database");
const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
database();

const app = express();
app.use(cors());
app.use(express.json());

// Routes*******
app.use("/api/customers", customerRoutes);
app.use("/api/memberships", membershipRoutes);

// Middleware*********
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
