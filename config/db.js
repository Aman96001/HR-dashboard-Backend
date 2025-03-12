const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://amandeep96001:P%40ss1132in@mydb.fijou.mongodb.net/hr-dashboarddb?retryWrites=true&w=majority";

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
    })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("connection failed");
      console.log(err);
      process.exit(1);
    });
};