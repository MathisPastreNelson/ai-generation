import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ai-generation/" element={<Home />} />
          <Route path="ai-generation/global/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
