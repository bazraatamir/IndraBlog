import BlogModel from "@/model/BlogModel";
import axios from "axios";

export const getAllBlogs = async () => {
  try {
    let Blogs = await axios.get("http://localhost:3000/api/blog");
    console.log(Blogs.data);
    return Blogs.data.Blog;
  } catch (error) {
    return error;
  }
};
