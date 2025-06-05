// src/pages/Services.js
import React, { useContext } from "react";
import { LanguageContext } from "../App";

function Services({ siteContent }) {
  const { lang } = useContext(LanguageContext);
  const services = siteContent.services;

  return (
    <section id="services" style={{ padding: "2rem", borderBottom: "1px solid #ccc" }}>
      <h2>{services.title[lang]}</h2>
      <p>{services.description[lang]}</p>
      {services.list.map((service) => (
        <div key={service.key} style={{ marginBottom: "1.5rem" }}>
          <h3>{service.title[lang]}</h3>
          <ul>
            {service.details[lang].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Services;
