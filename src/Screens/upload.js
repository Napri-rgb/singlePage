import React, { useCallback, useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
function Upload() {
  // data set name
  const [datasetName, setDatasetName] = useState("");
  //upload function here
  const submit = () => {
    console.log(datasetName);
    console.log(file);
    console.log(new Date());
  };
  // store file data
  const [file, setFile] = React.useState(null);

  // sset file data here
  const onChange = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <p
          style={{
            fontSize: "1.5rem",

            marginLeft: "2vw",
            textAlign: "center",
          }}
        >
          Drag and drop a file here or click to select a file to upload.
        </p>
        {file ? (
          <div>
            <p>{file.name}</p>
            <p>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            <CloseIcon
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                cursor: "pointer",
                zIndex: "2",
              }}
              onClick={() => setFile(null)}
            />
          </div>
        ) : null}
        <input
          onDragCapture={onChange}
          // onDragOver={onChange}
          type="file"
          id="file"
          style={{
            zIndex: "1",
            opacity: 0,
            display: "flex",
            position: "absolute",
            flexDirection: "row",

            alignItems: "center",
            justifyContent: "center",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            margin: "auto",
          }}
          onChange={onChange}
        />
      </div>
      {/* text input */}
      <div>
        <input
          placeholder="Dataset Name"
          type="text"
          style={{
            fontSize: "1.5rem",
            height: 50,

            borderRadius: "5px",
            textAlign: "center",
            width: 500,
            marginTop: "5vh",
          }}
          onChange={(e) => setDatasetName(e.target.value)}
        />
      </div>
      {/* submit button */}
      <Button
        variant="contained"
        color="primary"
        style={{
          marginTop: "5vh",
          width: 200,
        }}
        onClick={submit}
      >
        Upload
      </Button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    height: 350,
    width: "80%",
    marginTop: "5vh",
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
};

export default Upload;
