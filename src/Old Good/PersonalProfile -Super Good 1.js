// PersonalProfile.js

import React, { useState, useRef } from "react";
import { Mail, MessageCircle, Phone, Building } from "lucide-react";

const content = {
  en: {
    hero: "Empowering Next-Gen Embedded Design",
    heroDesc: "Your Partner for Next-Gen Embedded Innovation",
    contactLabel: "Contact us",
    about: "About IN Cubed",
    aboutContent: `IN Cubed International Co. Ltd is led by a team with extensive experience in embedded systems, industrial computer architectures, and SoC integration. The founder has served as CEO and CTO of a publicly listed company, leading and successfully delivering hundreds of projects into mass production. Also designed three epochal innovative products achieving over 20 million units shipped worldwide. Today, IN Cubed offers end-to-end embedded design services—from hardware layout, firmware and software integration, and rigorous quality control to system integration and optimization—helping clients in industrial computing, AIoT, and EV charging sectors rapidly achieve high-quality mass production goals.`,
    services: "Our Services",
    serviceList: [
      "Embedded System Design and Architecture",
      "High-reliability, mass-production–oriented design services",
      "Custom solution integration: end-to-end hardware, software, mechanical integration",
      "Product validation debugging and driver integration ",
      "ID and mechanical design and production",
      "Project management and international communication bridge",
      "Design transfer, BOM optimization, production support",
    ],
    projects: "Highlighted Projects",
    projectList: [
      "PLC Board – Mass production for US EV chargers",
      "Embedded motherboard system integration",
      "USB-to-PHY Layer 2 MAC-to-MAC PLC Board",
      "Industrial-grade fanless HMI octa-core controller board with –40 °C to 85 °C operating temperature range",
      "Industrial-grade 15″ IK10 touch panel module with –30 °C to 85 °C operating temperature",
    ],
    advantages: "Why Choose Us",
    advantageList: [
      "Super-fast lead time: prototype in 3 weeks",
      "Transparent workflow, contracts & NDA",
      "Full-stack know-how: HW, FW, SW, system",
      "ISO 9001, ISO 14001, ISO 13485 certified factories",
      "Market-savvy: Asia/US/EU seamless communication",
    ],
    contactSection: "Get in Touch",
    email: "Email",
    line: "Line ID",
    whatsapp: "Phone No.",
    address: "Address",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, New Taipei City",
  },
  zh: {
    hero: "打造次世代嵌入式設計的核心夥伴",
    heroDesc: "您下一代嵌入式創新的夥伴",
    contactLabel: "聯絡我們",
    about: "關於我們",
    aboutContent: `穎特力欣股份有限公司（IN Cubed International Co. Ltd）由具備嵌入式系統、工業電腦架構及 SoC 整合豐富經驗的團隊領導。管理層曾擔任上市公司 CEO、CTO，帶領並成功將數百個專案推向量產，亦曾設計出三款劃時代創新產品，全球累計出貨量超過兩千萬台。現今，穎特力欣提供從硬體布局、軟韌體整合、高品質管控到系統整合優化的全流程嵌入式設計服務，協助工業電腦 AIoT 及電動車充電領域等客戶快速達成高品質量產目標。`,
    services: "專業服務",
    serviceList: [
      "嵌入式系統設計與架構",
      "高可靠度、量產導向設計服務",
      "客製化方案整合：硬體、軟體、機構件一站式整合",
      "產品驗證、除錯與驅動整合",
      "ID 與機構設計、量產製造",
      "專案管理與國際溝通橋接",
      "設計移轉、BOM 優化、量產支援",
    ],
    projects: "近期成功案例",
    projectList: [
      "PLC 主控板 – 已成功量產應用於美國 EV 充電設備",
      "嵌入式主機板系統整合",
      "MAC-to-MAC PLC 主控板（USB-to-PHY）",
      "工業級 –40 °C 至 85 °C 操作溫度之無風扇 HMI 八核心控制板",
      "工業級 –30 °C 至 85 °C 操作溫度之 15″ IK10 觸控面板模組",
    ],
    advantages: "合作優勢",
    advantageList: [
      "原型交付極速：最快三週內完成",
      "流程透明，合約與 NDA 完善",
      "全站專業整合：硬體 • 韌體 • 軟體 • 系統",
      "ISO 9001、ISO 14001、ISO 13485 認證工廠",
      "熟悉亞洲/美國/歐洲市場，溝通無障礙",
    ],
    contactSection: "聯絡方式",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "電話號碼",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3",
  },
};

export default function PersonalProfile() {
  const [lang, setLang] = useState("en");
  const t = content[lang];
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const LanguageSwitcher = () => (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
      <button
        style={{
          padding: "4px 12px",
          borderRadius: 4,
          border: lang === "en" ? "2px solid #222" : "1px solid #ccc",
          background: lang === "en" ? "#f7f7f7" : "#fff",
          cursor: "pointer",
        }}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        style={{
          padding: "4px 12px",
          borderRadius: 4,
          border: lang === "zh" ? "2px solid #222" : "1px solid #ccc",
          background: lang === "zh" ? "#f7f7f7" : "#fff",
          cursor: "pointer",
        }}
        onClick={() => setLang("zh")}
      >
        中文
      </button>
    </div>
  );

  return (
    <div
      style={{
        /* 背景設定為極淺灰色電路紋理 */
        background: `#f7f7f7 url("/circuit-pattern.png") repeat`,
        minHeight: "100vh",
        fontFamily: "inherit",
      }}
    >
      {/* Banner Image */}
      <div style={{ width: "100%", maxHeight: 250, overflow: "hidden" }}>
        <img
          src="/circuit-banner-ai.jpg"
          alt="banner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <LanguageSwitcher />

        {/* Hero Section */}
        <section style={{ textAlign: "center", margin: "40px 0 24px" }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>
            {t.hero}
          </h1>
          <p style={{ fontSize: 18, color: "#333", marginBottom: 8 }}>
            {t.heroDesc}
          </p>
          <button
            onClick={scrollToContact}
            style={{
              marginTop: 18,
              fontSize: 16,
              padding: "8px 28px",
              borderRadius: 6,
              background: "#2956d4",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            {t.contactLabel}
          </button>
        </section>

        {/* About Section */}
        <section>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 600,
              margin: "24px 0 8px",
              color: "#222",
            }}
          >
            {t.about}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.6 }}>
            {t.aboutContent}
          </p>
        </section>

        {/* Services Section */}
        <section>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              margin: "24px 0 8px",
              color: "#222",
            }}
          >
            {t.services}
          </h2>
          <ul style={{ margin: "0 0 0 24px", color: "#444", lineHeight: 1.6 }}>
            {t.serviceList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              margin: "24px 0 8px",
              color: "#222",
            }}
          >
            {t.projects}
          </h2>
          <ul style={{ margin: "0 0 0 24px", color: "#444", lineHeight: 1.6 }}>
            {t.projectList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Advantages Section */}
        <section>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              margin: "24px 0 8px",
              color: "#222",
            }}
          >
            {t.advantages}
          </h2>
          <ul style={{ margin: "0 0 0 24px", color: "#444", lineHeight: 1.6 }}>
            {t.advantageList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} style={{ textAlign: "center", margin: "40px 0 0" }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#222",
            }}
          >
            {t.contactSection}
          </h2>

          {/* Email with Mail Icon */}
          <p
            style={{
              color: "#444",
              lineHeight: 1.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {t.email}
              <Mail size={16} />
              :
            </span>
            <a href="mailto:michelle@incubed-intl.com" style={{ color: "#2956d4", marginLeft: 4 }}>
              michelle@incubed-intl.com
            </a>
          </p>

          {/* Line ID with MessageCircle Icon */}
          <p
            style={{
              color: "#444",
              lineHeight: 1.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {t.line}
              <MessageCircle size={16} />
              :
            </span>
            <span style={{ color: "#2956d4", marginLeft: 4 }}>slr200k</span>
          </p>

          {/* Phone No. with Phone Icon */}
          <p
            style={{
              color: "#444",
              lineHeight: 1.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {t.whatsapp}
              <Phone size={16} />
              :
            </span>
            <span style={{ color: "#2956d4", marginLeft: 4 }}>+886-2-87919189</span>
          </p>

          {/* Address with Building Icon */}
          <p
            style={{
              color: "#444",
              lineHeight: 1.6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {t.address}
              <Building size={16} />
              :
            </span>
            <span style={{ color: "#2956d4", marginLeft: 4 }}>{t.addressDetail}</span>
          </p>
        </section>
      </div>

      {/* Footer Image */}
      <div style={{ width: "100%", maxHeight: 200, overflow: "hidden", marginTop: 40 }}>
        <img
          src="/footer_circuit_strip.png"
          alt="footer"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
