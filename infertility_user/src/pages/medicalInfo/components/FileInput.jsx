import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { BsX, BsCloudArrowUp, BsCloudCheck } from "react-icons/bs";

const FileInput = () => {

      const { i18n, t } = useTranslation();

   const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      setFile(null);
    } else {
      setFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleRemove = () => {
    setFile(null);
  };

  return (
    <div className='w-[450px] h-[210px] bg-white  flex justify-evenly items-center flex-col absolute top-[28%] left-[32.5%] rounded-2xl drop-shadow-md drop-shadow-[#6a6a6a] z-50'>
        <h2 className='text-lg font-medium'>{t("fileHead")}</h2>
      <label
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-[98%] py-4 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-[#EBB376] bg-[#44aec32f] hover:bg-[#44aec33f] text-[#44AEC3] cursor-pointer rounded-xl transition"
      >
        {file == null ? 
        <BsCloudArrowUp size={32} color='#44AEC3' /> :
        <BsCloudCheck  size={32} color='#44AEC3' />
        }
        <p className="text-lg font-semibold">{t("file1")}</p>
        <p className="text-sm text-[#44AEC3]">{t("file2")}</p>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {file && (
        <div className="w-[95%] py-1 flex items-start justify-between relative">
          <div className="flex items-center gap-2">
            <span className="text-sm truncate py-1 px-5 max-w-[200px] bg-[#44aec32f] text-[#44AEC3]  rounded-lg">{file.name}</span>
          </div>
          <button className="absolute left-32 top-0 text-red-500 hover:text-red-700" onClick={handleRemove}>
            <BsX  size={20}/>
          </button>
        </div>
      )}
    </div>
  )
}

export default FileInput