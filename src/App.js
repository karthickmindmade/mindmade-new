import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./about";
import DesignPage from "./design";
import Homepage from './homepage';

function App() {
  
  return (
    <BrowserRouter>
   
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/design" element={<DesignPage />} />
            </Routes>
          </BrowserRouter>
   
  );
}

export default App;
