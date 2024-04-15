import { ref } from "firebase/storage";
import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
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
      unique: true,
    },
    password: {
      type: String,
    },
    savedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogModel",
      },
    ],
  },

  {
    timestamps: true,
  }
);

let UserModel;

if (mongoose.models.user) {
  UserModel = mongoose.models.user;
} else {
  UserModel = mongoose.model("user", User);
}

export default UserModel;
