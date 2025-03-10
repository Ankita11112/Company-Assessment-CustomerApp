import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const database = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB Connection Failed", error);
        process.exit(1);
      }
};

export default database;