import { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Alert } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./StegXDropZone.css";
import { Tabs, Tab, Box } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ReactCompareImage from "react-compare-image";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function StegXDropZone() {
  const [carrierFile, setCarrierFile] = useState(null);
  const [secretType, setSecretType] = useState("text");
  const [secretFile, setSecretFile] = useState(null);
  const [secretText, setSecretText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const [resultImage, setResultImage] = useState(null);
  const [processType, setProcessType] = useState("encode");
  const [carrierPreview, setCarrierPreview] = useState(null);
  const [decodedResult, setDecodedResult] = useState(null);
  const [decodedFileName, setDecodedFileName] = useState(""); 

  const resultsRef = useRef(null);

  useEffect(() => {
    if (resultImage && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [resultImage]); 

  const handleProcessChange = (event, newProcess) => {
    setProcessType(newProcess);
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  
  
  // ==================REAL ENCODE================ //
  const handleEncode = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('cover_image', carrierFile);
    formData.append('password', password);
    formData.append('compress', "false"); 

    if (secretType === "text") {
      formData.append('secret_text', secretText);
    } else {
      formData.append('secret_file', secretFile);
    }

    try {
      const response = await fetch('/api/v1/encode', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob(); 
            const previewUrl = window.URL.createObjectURL(blob); 
            setResultImage(previewUrl); 
            setError("");
      } else {
        const errData = await response.json();
        setError(errData.detail || "ERROR: Encryption Error");
      }
    } catch (err) {
      setError("Server Connetion Failed");
    } finally {
      setLoading(false);
    }
  };

  // ==================FAKE ENCODE================ //
  // const handleEncode = async () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     if (carrierFile) {
  //       const mockUrl = window.URL.createObjectURL(carrierFile); 
  //       setResultImage(mockUrl);
  //       setError("");
  //     } else {
  //       setError("Please upload an image first!");
  //     }
  //     setLoading(false);
  //   }, 2000);

  // const formData = new FormData();
  // };

  // ==================REAL DECODE================ //
  const handleDecode = async () => {
    setLoading(true);
    setDecodedResult(null);

    const formData = new FormData();
    formData.append("stego_image", carrierFile); 
    formData.append("password", password);

    try {
      const response = await fetch("/api/v1/decode", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const contentDisposition = response.headers.get("Content-Disposition");
        let fileName = "extracted_secret";
        if (contentDisposition && contentDisposition.includes("filename=")) {
          fileName = contentDisposition.split("filename=")[1].replace(/"/g, "");
        }
        setDecodedFileName(fileName);

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        setDecodedResult(url);
        setError("");

        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const errData = await response.json();
        setError(errData.detail || "Decoding failed. Check your password.");
      }
    } catch (err) {
      setError("Server Connection Failed");
    } finally {
      setLoading(false);
    }
  };

  // ==================FAKE DECODE================ //
  // const handleDecode = async () => {
  //   setLoading(true);
  //   setDecodedResult(null); 

  //   setTimeout(() => {
  //     if (carrierFile) {
  //       const mockUrl = window.URL.createObjectURL(carrierFile);

  //       setDecodedResult(mockUrl);
  //       setDecodedFileName("extracted_secret_data.png"); 
  //       setError("");

  //       if (resultsRef.current) {
  //         resultsRef.current.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       }
  //     } else {
  //       setError("Please upload the stego image first!");
  //     }
  //     setLoading(false);
  //   }, 2000); 
  // };

  const onDropStego = (acceptedFiles) => {
    setResultImage(null);
    const file = acceptedFiles[0];
    setCarrierFile(file);
    const objectUrl = URL.createObjectURL(file);
    setCarrierPreview(objectUrl);
    setError("");
  };

  const { getRootProps: getStegoRoot, getInputProps: getStegoInput } =
    useDropzone({
      onDrop: onDropStego,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpg", ".jpeg"],
        "image/bmp": [".bmp"],
      },
      multiple: false,
    });

  const onDropCarrier = (acceptedFiles) => {
    setResultImage(null);
    const file = acceptedFiles[0];
    setCarrierFile(file);
    const objectUrl = URL.createObjectURL(file);
    setCarrierPreview(objectUrl);
    setError("");
  };

  const { getRootProps: getCarrierRoot, getInputProps: getCarrierInput } =
    useDropzone({
      onDrop: onDropCarrier,
      accept: {
        "image/png": [".png"],
        "image/jpeg": [".jpg", ".jpeg"],
        "image/bmp": [".bmp"],
      },
      multiple: false,
    });

  const onDropSecret = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (carrierFile && file.size >= carrierFile.size) {
      setError(`Error: Secret file must be smaller than Carrier image.`);
      setSecretFile(null);
    } else {
      setSecretFile(file);
      setError("");
    }
  };

  const { getRootProps: getSecretRoot, getInputProps: getSecretInput } =
    useDropzone({
      onDrop: onDropSecret,
      disabled: !carrierFile,
      multiple: false,
    });

  const isLocked = !carrierFile;

  return (
    <div className="stegx-encoder-container">
      <h1 className="section-main-title">
        Try Our{" "}
        <span
          style={{
            fontFamily: "orbitron",
            color: "var(--steg-x-color)",
            fontSize: "30px",
          }}
        >
          Steg X
        </span>{" "}
        !
      </h1>

      <Box sx={{ width: "100%", bgcolor: "transparent", mt: 4 }}>
        <Tabs
          value={processType}
          onChange={handleProcessChange}
          variant="fullWidth" 
          slotProps={{
            indicator: {
              style: {
                backgroundColor: "var(--steg-x-color)",
                height: "3px",
              },
            },
          }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "3px", 
            minHeight: "60px",
            "& .MuiTab-root": {
              color: "rgba(255,255,255,0.6)",
              fontFamily: "Rajdhani",
              fontSize: { xs: "16px", sm: "20px" }, 
              fontWeight: "600",
              textTransform: "uppercase",
              transition: "0.3s",
            },
            "& .Mui-selected": {
              color: "var(--steg-x-color) !important",
              backgroundColor: "rgba(255, 217, 0, 0.1)",
            },
          }}
        >
    
          <Tab
            value="encode"
            label="Encode"
            onClick={() => {
              setDecodedResult(null);
              setCarrierFile(null);
              setCarrierPreview(null);
              setPassword("");
            }}
          />
          <Tab
            value="decode"
            label="Decode"
            onClick={() => {
              setDecodedResult(null);
              setCarrierFile(null);
              setCarrierPreview(null);
              setPassword("");
            }}
          />
        </Tabs>

        <div className="tab-content-container" style={{ marginTop: "40px" }}>
          {/* //////////////////////////////ENCODE SECTION//////////////////////////////// */}
          {processType === "encode" && (
            <div className="encode-section">
              {error && (
                <Alert
                  severity="error"
                  icon={<ErrorOutlineIcon />}
                  className="stegx-error-alert"
                >
                  {error}
                </Alert>
              )}
              <div className="encoding-grid">
                <div className="input-column">
                  <p className="input-label">
                    Your Photo <b>(Carrier Image)</b>
                    {carrierFile && (
                      <span className="size-tag">
                        {formatSize(carrierFile.size)}
                      </span>
                    )}
                  </p>
                  <div
                    {...getCarrierRoot({
                      className: `dropzone-box ${carrierFile ? "active" : ""}`,
                    })}
                  >
                    <input {...getCarrierInput()} />
                    <CloudUploadIcon className="upload-icon" />
                    <p className="file-info-text">
                      {carrierFile
                        ? carrierFile.name
                        : "Drag and Drop Your File Here"}
                    </p>
                    <button className="browse-btn">Or Browse...</button>
                  </div>
                </div>

                <div
                  className={`input-column ${isLocked ? "disabled-zone" : ""}`}
                >
                  <p className="input-label">
                    Your Secret Data
                    {secretFile && secretType === "file" && (
                      <span className="size-tag">
                        {formatSize(secretFile.size)}
                      </span>
                    )}
                  </p>

                  <div className="content-area">
                    <ButtonGroup
                      variant="outlined"
                      aria-label="Basic button group"
                      fullWidth
                      sx={{ mb: 1 }}
                    >
                      <Button
                        variant={
                          secretType === "text" ? "contained" : "outlined"
                        }
                        onClick={() => setSecretType("text")}
                        sx={{
                          backgroundColor:
                            secretType === "text" ? "#FFD700" : "transparent",
                          color: secretType === "text" ? "#000" : "#FFD700",
                          borderColor: "#FFD700 !important",
                          "&:hover": {
                            backgroundColor:
                              secretType === "file"
                                ? "rgba(255, 215, 0, 0.25)"
                                : "",
                          },
                        }}
                      >
                        Text
                      </Button>

                      <Button
                        variant={
                          secretType === "file" ? "contained" : "outlined"
                        }
                        onClick={() => setSecretType("file")}
                        sx={{
                          backgroundColor:
                            secretType === "file" ? "#FFD700" : "transparent",
                          color: secretType === "file" ? "#000" : "#FFD700",
                          borderColor: "#FFD700 !important",
                          "&:hover": {
                            backgroundColor:
                              secretType === "text"
                                ? "rgba(255, 215, 0, 0.25)"
                                : "",
                          },
                        }}
                      >
                        File
                      </Button>
                    </ButtonGroup>
                    {secretType === "text" ? (
                      <textarea
                        placeholder="Type your secret message here..."
                        className="secret-textarea"
                        disabled={isLocked}
                        value={secretText}
                        onChange={(e) => setSecretText(e.target.value)}
                      />
                    ) : (
                      <div
                        {...getSecretRoot({
                          className: `secret-dropzone-box ${secretFile ? "active" : ""} ${error ? "error-border" : ""}`,
                        })}
                      >
                        <input {...getSecretInput()} />
                        <CloudUploadIcon className="upload-icon" />
                        <p className="file-info-text">
                          {secretFile
                            ? secretFile.name
                            : "Upload Your Secret File"}
                        </p>
                      </div>
                    )}
                    {isLocked && (
                      <div className="lock-overlay">
                        Upload Carrier Image First
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bottom-controls">
                <p className="input-label">Encryption Password:</p>
                <input
                  type="password"
                  placeholder="Enter your secret key"
                  className="steg-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  className="start-btn"
                  onClick={handleEncode} 
                  disabled={
                    isLocked ||
                    !!error ||
                    (!secretText && !secretFile) ||
                    !password ||
                    loading
                  }
                >
                  {loading ? "Processing..." : "Start Encoding"}
                </button>
              </div>
              {resultImage && (
                <div
                  className="stegx-results-section"
                  style={{
                    marginTop: "40px",
                    padding: "20px",
                    borderTop: "2px solid rgba(255, 217, 0, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <h2
                    className="result-title"
                    style={{
                      color: "#00ff9d",
                      textShadow: "0 0 10px rgba(0, 255, 157, 0.5)",
                    }}
                  >
                    SYSTEM: Processing Complete!
                  </h2>
                  <p style={{ color: "#888", marginBottom: "20px" }}>
                    Steganography Applied Successfully
                  </p>

                  <div className="comparison-wrapper" ref={resultsRef}>
                    <ReactCompareImage
                      leftImage={carrierPreview}
                      leftImageLabel="ORIGINAL"
                      rightImage={resultImage}
                      rightImageLabel="STEGO"
                      sliderLineColor="#FFD700"
                      handleSize={30}
                      aspectRatio="taller" 
                      hover={true}
                    />
                  </div>

                  <div className="result-actions">
                    <a
                      href={resultImage}
                      download={`stego_${carrierFile?.name || "result.png"}`}
                      className="download-btn-manual"
                    >
                      <FileDownloadIcon /> DOWNLOAD RESULT
                    </a>

                    <button
                      className="reset-btn"
                      onClick={() => {
                        setResultImage(null);
                        setCarrierFile(null);
                        setCarrierPreview(null);
                        setPassword("");
                        setSecretText("");
                        setSecretFile(null);
                      }}
                    >
                      NEW SESSION
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* //////////////////////////////DECODE SECTION//////////////////////////////// */}
          {processType === "decode" && (
            <div className="decode-section">
              {error && (
                <Alert
                  severity="error"
                  icon={<ErrorOutlineIcon />}
                  className="stegx-error-alert"
                >
                  {error}
                </Alert>
              )}

              <div className="input-column">
                <p className="input-label">
                  Stego Image <b>(To Extract From)</b>
                </p>
                <div
                  {...getStegoRoot({
                    className: `dropzone-box ${carrierFile ? "active" : ""}`,
                  })}
                >
                  <input {...getStegoInput()} />
                  <CloudUploadIcon className="upload-icon" />
                  <p className="file-info-text">
                    {carrierFile
                      ? carrierFile.name
                      : "Drag and Drop Stego Image Here"}
                  </p>
                </div>
              </div>

              <div className="bottom-controls" style={{ marginTop: "20px" }}>
                <p className="input-label">Decryption Password:</p>
                <input
                  type="password"
                  placeholder="Enter password to extract data"
                  className="steg-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="start-btn"
                  onClick={handleDecode}
                  disabled={!carrierFile || !password || loading}
                >
                  {loading ? "Decrypting..." : "Start Decoding"}
                </button>
              </div>

              {decodedResult && (
                <div ref={resultsRef} className="stegx-results-section">
                  <h1 style={{ marginBottom: "0" }}>
                    <LockOpenIcon
                      style={{ marginRight: "10px", fontSize: "30px" }}
                    />{" "}
                    SUCCESS
                  </h1>
                  <h3 style={{ marginTop: "0" }}>Data Recovered!</h3>

                  <div className="result-actions" style={{ marginTop: "20px" }}>
                    <a
                      href={decodedResult}
                      download={decodedFileName}
                      style={{ textDecoration: "none", color: "inherit" }}
                      title="Click to download"
                      className="file-download-card"
                    >
                      <InsertDriveFileIcon
                        style={{ color: "#00ff9d", fontSize: "40px" }}
                      />
                      <div>
                        <p
                          className="file-info-text"
                          style={{ margin: 0, textAlign: "left" }}
                        >
                          Extracted File:
                        </p>
                        <b>{decodedFileName}</b>
                      </div>
                    </a>

                    <button
                      className="reset-btn"
                      style={{ marginTop: "15px" }}
                      onClick={() => {
                        setDecodedResult(null);
                        setCarrierFile(null);
                        setCarrierPreview(null);
                        setPassword("");
                      }}
                    >
                      NEW DECODE SESSION
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Box>
    </div>
  );
}
