import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWorks from "./components/MyWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("About");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return <h1 className="text-2xl font-bold"></h1>;
      case "Skills":
        return <h1 className="text-2xl font-bold"></h1>;
      case "MyWorks":
        return <h1 className="text-2xl font-bold"></h1>;
      case "Contact":
        return <h1 className="text-2xl font-bold"></h1>;
      default:
        return <h1 className="text-2xl font-bold"></h1>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <MyWorks />
      <Contact />

      <Footer/>
      <div className="p-10">
        {renderContent()}
      </div>
    </div>
  );  
}

export default App;