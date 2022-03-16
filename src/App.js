import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./pages/About/about";
import Projects from "./pages/Projects/projects"
import ErrorPage from "./pages/errorPage";

import "./App.css";

export default function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} style={{overflow: "hidden"}}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};
