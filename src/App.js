import React, {useState } from "react";
import { Button } from 'react-bootstrap'
import './App.css';

var file = null;

function App() {
  const [selectedFile, fileUploadHandler] = useState(null);
  function fileSelectedHandler(event) {
    console.log(selectedFile);
    file = event.target.files[0];
  }

  return (
    <div className="App">
      <h1 className='primary'>Welcome</h1>
      <input type='file' onChange={fileSelectedHandler} />
      <Button className='button'  onClick={() => fileUploadHandler(file)}> Upload file</Button>
      {/* <Button
        title="Press me"
        onPress={fileUploadHandler(file)}
      /> */}
    </div>
  );
}

export default App;