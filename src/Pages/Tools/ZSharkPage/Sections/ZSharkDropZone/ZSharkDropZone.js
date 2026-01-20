import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import ZSharkResult from "../../ZSharkResult/ZSharkResult";
import "./ZSharkDropZone.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Alert } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function ZSharkDropZone() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
    }
  }, []);

  const handleStartAnalysis = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile); // المفتاح 'file' كما يتوقعه السيرفر

    try {
      const response = await fetch("/analyze", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result)

      if (result.status === "success") {
        // تمرير البيانات الموجودة داخل مفتاح data في رد السيرفر
        setAnalysisData(result.data); 
      } else {
        setError(result.message || "Analysis failed");
      }
    } catch (err) {
      setError("API Connection error. Ensure the backend is running.");
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/vnd.tcpdump.pcap": [".pcap", ".cap", ".pcapng"] },
    multiple: false,
  });

  if (analysisData) {
    return (
      <div>
        <ZSharkResult data={analysisData} /> 
        <button
          className="reset-btn"
          onClick={() => {
            setAnalysisData(null);
            setSelectedFile(null);
          }}
        >
          Upload New File
        </button>
      </div>
    );
  }

  return (
    <div className="upload-container">
      <h1 className="zshark-glitch-title" data-text="START ANALYZING">
        START ANALYZING
      </h1>
      
      {error && (
        <Alert severity="error" icon={<ErrorOutlineIcon />} className="zshark-error-alert">
          {error}
        </Alert>
      )}

      <div className={`dropzone ${isDragActive ? "active" : ""}`} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="zshark-upload-icon">
          <CloudUploadIcon sx={{ fontSize: "4rem" }} />
        </div>

        {isLoading ? (
          <div className="loader-box">
            <p>Analyzing Traffic...</p>
            <div className="progress-bar-loading"></div>
          </div>
        ) : (
          <div>
            <h2>Z-SHARK Network Forensics</h2>
            {selectedFile ? (
              <p className="file-ready">
                File Ready: <strong>{selectedFile.name}</strong>
              </p>
            ) : (
              <p>Drag & Drop your PCAP file here, or click to browse</p>
            )}
            <h4 style={{ color: "var(--z-shark-color)" }}>
              Allowed: .pcap, .pcapng, .cap
            </h4>
          </div>
        )}
      </div>

      {!isLoading && (
        <button 
          className="zshark-start-btn" 
          onClick={handleStartAnalysis}
          disabled={!selectedFile}
        >
          Start Analysis
        </button>
      )}
    </div>
  );
}