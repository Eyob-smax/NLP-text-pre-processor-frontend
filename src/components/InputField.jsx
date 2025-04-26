import React, { useEffect, useRef, useContext, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiArrowUp } from "react-icons/fi";
import { SendContext } from "./Main";

export default function InputField() {
  const fileInputRef = useRef(null);
  const textAreaEl = useRef(null);
  const [textInput, setTextInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [setPressedButton] = useContext(SendContext);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file.name.endsWith(".html")) {
      alert("Please upload a valid HTML file only.");
      return;
    }
    console.log(file);
    if (file) {
      setSelectedFile(file);
    }
  };

  async function sendData() {
    if (!textInput && !selectedFile) {
      alert("Please enter text or upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("textDocument", textInput);

    if (selectedFile) {
      formData.append("file", selectedFile);
    }
    try {
      const res = await fetch("http://localhost:8090/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        alert("File uploaded successfully");
        setTextInput("");
        setSelectedFile(null);
        setPressedButton((prev) => !prev);
      } else {
        alert("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
  useEffect(() => {
    if (textAreaEl.current) {
      textAreaEl.current.focus();
    }
  }, []);

  return (
    <div className="w-[80%] shadow-slate-900/10 shadow-lg bg-[#f9f9f9] h-25 mb-5 rounded-3xl flex items-center px-5 py-3">
      <div
        onClick={handleButtonClick}
        title="Upload a document"
        className="cursor-pointer hover:scale-97 p-2 text-2xl rounded-full border-2 mr-5"
      >
        <AiOutlineCloudUpload />
        <input
          type="file"
          ref={fileInputRef}
          name="file"
          onChange={handleFileChange}
          style={{ display: "none" }} // hide the input
        />
      </div>
      <div className="flex-1 h-full">
        <form className="h-full">
          <textarea
            ref={textAreaEl}
            name="textDocument"
            onChange={(e) => {
              alert("Please upload a file, text area is disabled for now!");
              e.target.value = "";
            }}
            className="py-2 px-3 w-full resize-none h-full flex  justify-center"
            id="text-document"
            placeholder="enter you text-document"
          ></textarea>
        </form>
      </div>
      <div
        onClick={sendData}
        className="ml-5 p-3 bg-black text-2xl text-white rounded-full cursor-pointer hover:opacity-70"
        title="send document data"
      >
        <FiArrowUp />
      </div>
    </div>
  );
}
