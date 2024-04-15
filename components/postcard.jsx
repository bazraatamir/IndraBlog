"use client";
import Image from "next/image";
import axios from "axios";
function PostCard({ post }) {
  const HandleSave = async () => {
    try {
      await axios.put("http://localhost:3000/api/savePost");
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="w-[300px] h-[400px]  ">
      <h1>{post.title}</h1>
      <div className="w-[100%] h-[40%] relative">
        <Image
          src={post.ImageUrl}
          fill={true}
          objectFit="contain"
          style={"color-#fff"}
        />
      </div>
      <p>{post.Description}</p>
      <button
        className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 my-[20px] rounded-md w-[80%]"
        onClick={HandleSave}
      >
        save
      </button>
    </div>
  );
}

export default PostCard;
