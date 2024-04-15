import { getAllBlogs } from "@/lib/getAllBlog";
import PostCard from "@/components/postcard";

const Blogs = async () => {
  const data = await getAllBlogs();

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] grid grid-rows-6 grid-cols-3 gap-[40px]">
        {data && data.map((el) => <PostCard post={el} />)}
      </div>
    </div>
  );
};

export default Blogs;
