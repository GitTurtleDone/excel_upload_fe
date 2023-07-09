// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import { dialog } from "electron";

// function App() {
//   const [folderPath, setFolderPath] = useState("");

//   const handleButtonClick = () => {
//     const result = dialog.showOpenDialogSync({
//       properties: ["openDirectory"],
//       title: "Select a folder",
//     });

//     if (result) {
//       setFolderPath(result[0]);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleButtonClick}>Select Folder</button>
//       <input type="text" value={folderPath} />
//     </div>
//   );
// }

import React, { useState } from "react";
//import { useDropzone } from "react-dropzone";
import axios, { AxiosResponse } from "axios";

function App() {
  // const [folderPath, setFolderPath] = useState("");

  // const onDrop = (acceptedFiles) => {
  //   if (acceptedFiles.length > 0) {
  //     const folderPath = acceptedFiles[0].path;
  //     setFolderPath(folderPath);
  //   }
  // };

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // return (
  //   <div>
  //     <div {...getRootProps()}>
  //       <input {...getInputProps()} />
  //       <button>Select Folder</button>
  //     </div>

  //     <input
  //       type="text"
  //       value={folderPath}
  //       onChange={(e) => setFolderPath(e.target.value)}
  //     />
  //   </div>
  // );
  // const [folderPath, setFolderPath] = useState("");

  // const onDrop = (acceptedFiles) => {
  //   if (acceptedFiles.length > 0) {
  //     const folderPath = acceptedFiles[0].path.replace(
  //       acceptedFiles[0].name,
  //       ""
  //     );
  //     setFolderPath(folderPath);
  //   }
  // };

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   multiple: false,
  //   directory: true,
  // });

  // return (
  //   <div>
  //     <div {...getRootProps()}>
  //       <input {...getInputProps()} />
  //       <button>Select Folder</button>
  //     </div>

  //     <input
  //       type="text"
  //       value={folderPath}
  //       onChange={(e) => setFolderPath(e.target.value)}
  //     />
  //   </div>
  // );
  // const [folderPath, setFolderPath] = useState("");

  // const handleInputChange = (event) => {
  //   setFolderPath(event.target.files[0]?.path || "");
  // };

  // return (
  //   <div>
  //     <input type="file" directory onChange={handleInputChange} />
  //     <input
  //       type="text"
  //       value={folderPath}
  //       onChange={(e) => setFolderPath(e.target.value)}
  //     />
  //   </div>
  // );
  const [folderPath, setFolderPath] = useState("");
  const handleClick = () => {
    // fetch("http://localhost:5208/OpenFolder")
    //   //.then(response => response.json()) // Make an HTTP request to the backend endpoint
    //   .then(({ folderPath } = response.json())); // Extract the folder path from the response JSON

    axios
      .get("https://localhost:7257/OpenFolder")
      .then((response) => {
        const folderPath = response.data.folderPath; // Assuming the response has a property named "folderPath"
        // Use the folderPath in your React component as needed
        console.log(response);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });

    // Do something with the selected folder path
    setFolderPath(folderPath);
  };

  const handleInputChange = () => {
    setFolderPath(folderPath);
  };

  return (
    <div>
      <button onClick={handleClick}>Open File Dialog</button>
      <input
        type="text"
        value={folderPath}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
export default App;
