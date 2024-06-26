import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Blog = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ImageUrl: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let BlogModel;

if (mongoose.models.BlogModel) {
  BlogModel = mongoose.models.BlogModel;
} else {
  BlogModel = mongoose.model("BlogModel", Blog);
}

export default BlogModel;
