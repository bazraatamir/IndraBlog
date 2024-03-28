import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

let categoryModel;
if (mongoose.models.Category) {
  categoryModel = mongoose.models.Category;
} else {
  categoryModel = mongoose.model("Category", Category);
}

export default categoryModel;
