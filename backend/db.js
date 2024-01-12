import mongoose from "mongoose";
const mongoURI =
  "mongodb://0.0.0.0:27017";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected successfully");
    }
  });
};
export default mongoDB;
