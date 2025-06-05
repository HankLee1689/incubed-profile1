// src/pages/Resources.js
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function Resources({ siteContent }) {
  const { lang } = useContext(LanguageContext);
  const res = siteContent.resources;

  return (
    <section id="resources" style={{ padding: "2rem", borderBottom: "1px solid #ccc" }}>
      <h2>{res.title[lang]}</h2>
      <div>
        <h4>{res.sections.industryNews[lang]}</h4>
        {/* Place industry insights article list here */}
      </div>
      <div>
        <h4>{res.sections.whitepapers[lang]}</h4>
        {/* Whitepapers download links */}
      </div>
      <div>
        <h4>{res.sections.faq[lang]}</h4>
        {/* FAQ list */}
      </div>
      <div>
        <h4>{res.sections.downloadCenter[lang]}</h4>
        {/* Download center links */}
      </div>
    </section>
  );
}

export default Resources;
