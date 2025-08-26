import mongoose from "mongoose";
// import { DB_NAME } from "constansts.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log("MONGODB Connectteedddd....");
  } catch (error) {
    console.log("ERROR : ", error);
    process.exit(1);
  }
};

export default connectDB;
