import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
