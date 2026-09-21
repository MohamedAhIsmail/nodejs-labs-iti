import mongoose from "mongoose";

const connection = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/Socket")
    .then(() => console.log("DB Connected"))
    .catch(() => console.log("DB Error"));
};

export default connection;
