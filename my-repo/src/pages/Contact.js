// src/pages/Contact.js
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function Contact({ siteContent }) {
  const { lang } = useContext(LanguageContext);
  const contact = siteContent.contact;

  return (
    <section id="contact" style={{ padding: "2rem", borderBottom: "1px solid #ccc" }}>
      <h2>{contact.title[lang]}</h2>
      <div>
        <h4>{contact.sections.form[lang]}</h4>
        {/* Insert a <form> element here */}
      </div>
      <div>
        <h4>{contact.sections.info[lang]}</h4>
        {/* Display company Email / Phone / LINE / Teams info */}
      </div>
      <div>
        <h4>{contact.sections.map[lang]}</h4>
        {/* Embed Google Map iframe here */}
      </div>
      <div>
        <h4>{contact.sections.downloads[lang]}</h4>
        {/* Provide PDF download links */}
      </div>
    </section>
  );
}

export default Contact;
