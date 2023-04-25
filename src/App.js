import logo from './logo.svg';
import './App.css';
import { UploadFile } from './Components/Upload/UploadFile';
import { File } from './Components/File/File';
import { Load } from './Components/Load/Load';

function App() {
  return (
    <div>
      {/* <UploadFile />  */}
      {/* <Load /> */}
      <File />
    </div>
  );
}

export default App;
