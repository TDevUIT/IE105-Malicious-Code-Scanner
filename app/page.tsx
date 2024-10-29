'use client'
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [scanResult, setScanResult] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFiles(Array.from(event.target.files));
  };

  const handleModelSelection = (model: string) => {
    setSelectedModel(model);
  };

  const startScan = () => {
    setScanProgress(25);
    setTimeout(() => {
      setScanProgress(100);
      setScanResult("No malicious code detected in all files!");
    }, 2000);
  };

  return (
    <motion.div
      className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-8 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        File Malicious Code Scanner
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Upload files, select a model, and scan for malicious code effortlessly.
      </p>

      <motion.div
        className="flex items-center space-x-4 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="text-lg font-medium text-gray-700">Choose Model:</label>
        <select
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          onChange={(e) => handleModelSelection(e.target.value)}
        >
          <option value="">Select a Model</option>
          <option value="model1.h5">Deep Scan v1.0</option>
          <option value="model2.h5">AI Model v2.5</option>
        </select>
      </motion.div>

      <motion.div
        className="flex flex-col items-center space-y-4 mb-6 w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="text-lg font-medium text-gray-700">Upload Files:</label>
        <input
          type="file"
          multiple
          accept=".pdf, .docx, .txt, .json, .xml"
          onChange={handleFileUpload}
          className="p-3 border border-gray-300 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <ul className="list-disc text-gray-600">
          {files.map((file, index) => (
            <li key={index} className="text-gray-700">
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="w-full mb-4 max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: scanProgress > 0 ? 1 : 0, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {scanProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="bg-blue-600 h-full"
              style={{ width: `${scanProgress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${scanProgress}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        )}
      </motion.div>

      <motion.button
        onClick={startScan}
        className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all ${
          files.length === 0 || !selectedModel ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={files.length === 0 || !selectedModel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Scan
      </motion.button>

      {scanProgress === 100 && (
        <motion.div
          className="mt-6 p-4 bg-green-100 text-green-700 font-semibold rounded-lg max-w-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <strong>Scan Result:</strong> {scanResult}
        </motion.div>
      )}
    </motion.div>
  );
}
