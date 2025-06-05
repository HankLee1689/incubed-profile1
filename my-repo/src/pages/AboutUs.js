// src/pages/AboutUs.js
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function AboutUs({ siteContent }) {
  const { lang } = useContext(LanguageContext);
  const about = siteContent.aboutUs;

  return (
    <section id="about-us" style={{ padding: "2rem", borderBottom: "1px solid #ccc" }}>
      <h2>{about.title[lang]}</h2>
      <ul>
        <li>{about.sections.background[lang]}</li>
        <li>{about.sections.overview[lang]}</li>
        <li>{about.sections.team[lang]}</li>
        <li>{about.sections.milestones[lang]}</li>
        <li>{about.sections.mission[lang]}</li>
      </ul>
    </section>
  );
}

export default AboutUs;
