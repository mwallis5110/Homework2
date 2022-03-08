import React, { useState } from "react";
import Navigation from "./components/Navigation";
import TopNavbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
        <Header />
        {/* <TopNavbar setCurrentPage = {setCurrentPage} /> */}
        <Navigation currentPage = {currentPage} />
        <Footer />
    </div>
  )
};
