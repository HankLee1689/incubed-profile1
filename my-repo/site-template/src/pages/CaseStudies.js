// src/pages/CaseStudies.js
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function CaseStudies({ siteContent }) {
  const { lang } = useContext(LanguageContext);
  const cs = siteContent.caseStudies;

  return (
    <section id="case-studies" style={{ padding: "2rem", borderBottom: "1px solid #ccc" }}>
      <h2>{cs.title[lang]}</h2>
      <p>{cs.description[lang]}</p>
      <h4>{lang === "en" ? "Categories:" : "產業應用："}</h4>
      <ul>
        {cs.categories[lang].map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <h4>{cs.feedback[lang]}</h4>
      {/* Place client testimonials here */}
      <h4>{cs.techBreakthrough[lang]}</h4>
      {/* Place technology breakthrough stories here */}
    </section>
  );
}

export default CaseStudies;
