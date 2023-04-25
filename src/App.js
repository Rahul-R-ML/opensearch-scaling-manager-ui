import './App.css';
import { UploadFile } from './Components/Upload/UploadFile';
import { File } from './Components/File/File';
import Service from './sevices/service.js';

function App() {
  return (
    <div className='main__container'>
      <div className='container'>
        {/* <UploadFile /> */}
        <File />
        {/* <Service /> */}
      </div>
    </div>
  );
}

export default App;
