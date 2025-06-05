// src/pages/Home.js
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function Home({ siteContent }) {
  const { lang } = useContext(LanguageContext);
  const homeContent = siteContent.home;

  return (
    <section id="home" style={{ padding: "2rem", borderBottom: "1px solid #ccc" }}>
      <h2>{homeContent.title[lang]}</h2>
      <p>{homeContent.sections.overview[lang]}</p>
      <h3>{homeContent.sections.slogan[lang]}</h3>
      <p>{homeContent.sections.news[lang]}</p>
      <p>{homeContent.sections.strengths[lang]}</p>
      <button>{homeContent.sections.quickContact[lang]}</button>
    </section>
  );
}

export default Home;
