"use client";

import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [selectFile, setSelectFile] = useState(null);
  const [success, setSuccess] = useState();
  const fileSelectHandle = (e) => {
    setSelectFile(e.target.files[0]);
  };

  const FileUploadHandle = async () => {
    const formData = new FormData();
    formData.append("file", selectFile);
    console.log(formData);
    console;
    try {
      await axios.post("/api/blog", formData);
      setSuccess("amjiltai");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {success & <p>{success}</p>}
      <input
        type="file"
        onChange={(e) => {
          fileSelectHandle(e);
        }}
      />
      <button onClick={FileUploadHandle}>Upload</button>
    </div>
  );
}

export default FileUpload;
