import React, { useState } from "react";
import Navigation from "./components/Navigation";
import TopNavBar from "./components/NavBar";

export default function App() {
    const [currentPage, setCurrentPage] = useState(2);

  return (
    <div>
        <TopNavBar setCurrentPage = {setCurrentPage} />
        <Navigation currentPage = {currentPage} />
    </div>
  )
};
