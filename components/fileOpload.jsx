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
    try {
      await axios.post("", formData);
      setSuccess("amjiltai");
    } catch (error) {}
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
      <button onChange={FileUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
