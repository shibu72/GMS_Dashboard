import mongoose from "mongoose";
import app from "./app.js";

const port = 5000;

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/GMS");
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`GMS server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main(); // calling the main function
