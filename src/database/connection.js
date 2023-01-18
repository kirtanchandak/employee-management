import mongoose from "mongoose";
require("dotenv").config();

const MONGO_URI = `mongodb+srv://kirtanchandak:${process.env.MONGO_URI_PASSWORD}@employee.ujl35ia.mongodb.net/?retryWrites=true&w=majority`;

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);

    if (connection.readyState == 1) {
      console.log("Connected to MongoDB");
    } else {
      console.log("Failed to connect to MongoDB");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
