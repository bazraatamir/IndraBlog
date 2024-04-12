import Image from "next/image";
import { getAllBlogs } from "@/lib/getAllBlog";

const Blogs = async () => {
  const data = await getAllBlogs();
  console.log(data);
  return (
    <div>
      {data &&
        data.map((el) => (
          <div>
            <h1>{el.title}</h1>
            <p>{el.Description}</p>
            {/* <Image src={el.ImageUrl} /> */}
          </div>
        ))}
    </div>
  );
};

export default Blogs;
