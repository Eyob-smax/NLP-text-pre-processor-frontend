import React, { useEffect, useRef, useContext, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FiArrowUp } from "react-icons/fi";
import { SendContext } from "./Main";
import { mySwal } from "./sweetAlert";

export default function InputField() {
  const fileInputRef = useRef(null);
  const textAreaEl = useRef(null);
  const [textInput, setTextInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [setPressedButton] = useContext(SendContext);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file.name.endsWith(".html")) {
      await mySwal.fire({
        title: "Faild!",
        text: "Please upload a valid HTML file only.",
        icon: "error",
        showConfirmButton: true,
        cancelButtonColor: "#4ade80",
      });
      return;
    }
    await mySwal.fire({
      title: "File Uploaded",
      text: "Press send button to process the document!",
      icon: "success",
      confirmButtonText: "Ok",
      confirmButtonColor: "#4ade80",
    });
    if (file) {
      setSelectedFile(file);
    }
  };

  async function sendData() {
    if (!textInput && !selectedFile) {
      await mySwal.fire({
        title: "Failed!",
        text: "Please upload a file.",
        icon: "error",
        timer: 800,
        confirmButtonText: "Ok",
        confirmButtonColor: "#4ade80",
      });
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
        setTextInput("");
        setSelectedFile(null);
        setPressedButton((prev) => !prev);
        await mySwal.fire({
          title: "Successful!",
          text: "File uploaded successfully",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        await mySwal.fire({
          title: "file upload faild",
          text: "Next error, please try again",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "4ade80",
        });
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      await mySwal.fire({
        title: "Failed!",
        text: "Something went wrong, " + error.message,
        icon: "error",
        timer: 700,
      });
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
        className="cursor-pointer hover:scale-97 p-[5px] text-2xl rounded-full border-2 mr-5"
      >
        <AiOutlineCloudUpload />
        <input
          type="file"
          ref={fileInputRef}
          name="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
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
        className="ml-5 p-[5px] bg-black text-2xl text-white rounded-full cursor-pointer hover:opacity-70"
        title="send document data"
      >
        <FiArrowUp />
      </div>
    </div>
  );
}
