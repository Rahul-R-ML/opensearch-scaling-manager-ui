import "./App.css";
import { UploadFile } from "./Components/Upload/UploadFile";
import { File } from "./Components/File/File";
import { Load } from "./Components/Load/Load";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="main-container">Open Search Scaling Manager</div>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<UploadFile />} />
            <Route path="/file" element={<File />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
