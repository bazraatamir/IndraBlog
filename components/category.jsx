"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Categories() {
  const [category, setCategory] = useState();
  useEffect(() => {
    const get_Data = async () => {
      try {
        let { data } = await axios.get("http://localhost:3000/api/category");
        setCategory(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    get_Data();
  }, []);

  return (
    <div>
      {category && category.map((el) => <p key={el._id}>{el.title}</p>)}
    </div>
  );
}

export default Categories;
