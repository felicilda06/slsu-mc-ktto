import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Homepage } from "./components";

const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path={`/`} element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
