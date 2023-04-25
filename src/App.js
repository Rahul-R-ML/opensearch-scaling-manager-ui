import logo from './logo.svg';
import './App.css';
import { UploadFile } from './Components/Upload/UploadFile';
import { File } from './Components/File/File';
import { Load } from './Components/Load/Load';
import Service from './sevices/service.js';


function App() {
  return (
    <>
      <UploadFile />
      {/* <Load />
        <File /> */}
        {/* <Service /> */}
    </>
  );
}

export default App;

