import React, {useState } from "react";
import { Button } from 'react-bootstrap'
import { Base64 } from 'js-base64';
import './App.css';

var myFile = null;

function App() {
  const [selectedFile, fileUpdateHandler] = useState(null);
  function fileSelectedHandler(event) {
    console.log(selectedFile);
    myFile = event.target.files[0];
  }
  function fileUploadHandler(event){
    fileUpdateHandler(myFile);
    // saveAs(myFile);
  }

  return (
    <div className="App">
      <h1 className='primary'>Welcome</h1>
      <input type='file' onChange={fileSelectedHandler} />
      <Button className='button'  onClick={() => fileUploadHandler()}> Upload file</Button>
      {/* <Button
        title="Press me"
        onPress={fileUploadHandler(file)}
      /> */}
    </div>
  );
}

export default App;