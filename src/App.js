import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./about";
import Homepage from './homepage';

function App() {
  
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
   
  );
}

export default App;
