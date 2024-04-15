import axios from "axios";

export const getAllBlogs = async () => {
  try {
    let Blogs = await axios.get("http://localhost:3000/api/blog");
    
    return Blogs.data.Blog;
  } catch (error) {
    return error;
  }
};
