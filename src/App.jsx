import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Global from "./pages/Global";
import Street from "./pages/Street";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ai-generation/" element={<Home />} />
          <Route path="ai-generation/global/" element={<Global />} />
          <Route path="ai-generation/street/" element={<Street />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
