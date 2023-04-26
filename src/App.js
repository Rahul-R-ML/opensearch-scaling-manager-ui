import './App.css';
import { UploadFile } from './Components/Upload/UploadFile';
import { File } from './Components/File/File';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='main__container'>
      <h3 className='title'>Welcome to OpenSearch Scaling Manager</h3>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UploadFile />} />
            <Route path='/file' element={<File />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
