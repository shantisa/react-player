import './Presentation/styles/App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoView from "./Presentation/View/VideoView"
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<VideoView />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;
