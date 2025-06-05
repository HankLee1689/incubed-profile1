// src/App.js
import React, { useState, createContext } from "react";
import siteContent from "./siteContent";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";

// Create a Context for language
export const LanguageContext = createContext();

function App() {
  // Default language: English
  const [lang, setLang] = useState("en");

  // Toggle language between 'en' and 'zh'
  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "zh" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      <div>
        {/* Language toggle button */}
        <button
          onClick={toggleLanguage}
          style={{ position: "fixed", top: 10, right: 10 }}
        >
          {lang === "en" ? "中文" : "English"}
        </button>

        {/* Page sections */}
        <Home siteContent={siteContent} />
        <AboutUs siteContent={siteContent} />
        <Services siteContent={siteContent} />
        <CaseStudies siteContent={siteContent} />
        <Contact siteContent={siteContent} />
        <Resources siteContent={siteContent} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
