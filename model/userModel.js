import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let UserModel;

if (mongoose.models.User) {
  UserModel = mongoose.models.User;
} else {
  console.log("ccc");

  UserModel = mongoose.model("user", User);
}

export default UserModel;
