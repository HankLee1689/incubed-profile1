import React, { useState } from "react";

const content = {
  en: {
    hero: "Empowering Next-Gen Embedded Design",
    heroDesc: "Your Partner for Next-Gen Embedded Innovation",
    contact: "Contact",
    about: "About Me",
    aboutContent: `I am the founder of IN Cubed, former CEO & CTO of a listed company, and a motherboard design lead at SiS. Specialized in embedded systems, industrial PC, SoC integration, and cross-border project execution. Now focus on providing fast, robust embedded solutions for mass production.`,
    services: "Services",
    serviceList: [
      "Embedded hardware design (MB, carrier, adapter)",
      "Product pre-validation & debugging (EMI, ESD, driver)",
      "Bilingual project management & international communication",
      "Design transfer, BOM optimization, production support",
    ],
    projects: "Projects",
    projectList: [
      "PLC Board – Mass production for US EV chargers",
      "Embedded motherboard system integration",
      "USB to PHY Layer2 MAC-to-MAC PLC Board",
      "Industrial HMI Octa-core controller",
      "Industrial 15” touch panel module",
    ],
    advantages: "Why Work With Me",
    advantageList: [
      "Super fast lead time, prototype in 3 weeks",
      "Transparent workflow, contracts & NDA",
      "Full-stack know-how: HW, FW, SW, system",
      "Market-savvy, Asia/US/EU seamless communication",
      "ISO 9001, ISO 14001, ISO 13485 certified factories",
    ],
    contactSection: "Contact",
    email: "Email",
    line: "Line ID",
    whatsapp: "WhatsApp",
    address: "Address",
    addressDetail: "2F-3, No.94, Baozhong Rd, Xindian Dist., New Taipei City",
  },
  zh: {
    hero: "打造次世代嵌入式設計的核心夥伴",
    heroDesc: "Empowering Next-Gen Embedded Design",
    contact: "聯絡我",
    about: "關於我",
    aboutContent: `我是 IN Cubed 的創辦人，曾任上市公司總經理與 CTO，早年於 SiS 主導主機板開發，精通嵌入式系統設計、工控產品、SoC 整合與跨國專案。現專注提供穩定高效的設計解決方案，協助客戶快速實現量產。`,
    services: "專業服務",
    serviceList: [
      "嵌入式硬體設計（主機板、載板、轉接模組）",
      "產品預驗證與除錯（EMI、ESD、驅動整合）",
      "中英雙語專案管理與國際溝通橋接",
      "設計移轉、BOM 優化與量產技術支援",
    ],
    projects: "成功案例",
    projectList: [
      "PLC Board – 已成功量產應用於美國 EV 充電設備",
      "嵌入式主機板設計整合",
      "USB to PHY Layer2 MAC-to-MAC PLC Board",
      "工業級 HMI Octa-core 控制板",
      "工業級 15 吋 Touch Panel Module",
    ],
    advantages: "合作優勢",
    advantageList: [
      "設計交期快速，最短三週出樣",
      "專案流程透明，合約與保密制度",
      "橫跨硬體、韌體、軟體、驅動與系統整合",
      "熟悉歐美亞洲市場需求，溝通無障礙",
      "ISO 9001、ISO 14001、ISO 13485 認證工廠",
    ],
    contactSection: "聯絡我",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "WhatsApp",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3",
  },
};

export default function PersonalProfile() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  // 語言切換按鈕
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
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "inherit" }}>
      {/* Banner 圖片 */}
      <div style={{ width: "100%", maxHeight: 300, overflow: "hidden" }}>
        <img
          src="/circuit-banner-ai.jpg"
          alt="banner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <LanguageSwitcher />
        {/* Hero */}
        <section style={{ textAlign: "center", margin: "40px 0 24px" }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>{t.hero}</h1>
          <p style={{ fontSize: 18, color: "#555" }}>{t.heroDesc}</p>
          <button style={{ marginTop: 18, fontSize: 16, padding: "8px 28px", borderRadius: 6, background: "#2956d4", color: "#fff", border: "none", cursor: "pointer" }}>
            {t.contact}
          </button>
        </section>
        {/* About */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "24px 0 8px" }}>{t.about}</h2>
          <p>{t.aboutContent}</p>
        </section>
        {/* Services */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "24px 0 8px" }}>{t.services}</h2>
          <ul style={{ margin: "0 0 0 24px" }}>
            {t.serviceList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        {/* Projects */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "24px 0 8px" }}>{t.projects}</h2>
          <ul style={{ margin: "0 0 0 24px" }}>
            {t.projectList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        {/* Advantages */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "24px 0 8px" }}>{t.advantages}</h2>
          <ul style={{ margin: "0 0 0 24px" }}>
            {t.advantageList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
        {/* Contact */}
        <section style={{ textAlign: "center", margin: "40px 0 0" }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>{t.contactSection}</h2>
          <p>
            {t.email}：
            <a href="mailto:david_h@incubed-intl.com" style={{ color: "#2956d4" }}>
              david_h@incubed-intl.com
            </a>
          </p>
          <p>{t.line}: slr200k</p>
          <p>{t.whatsapp}: +886937080529</p>
          <p>
            {t.address}：{t.addressDetail}
          </p>
        </section>
      </div>
    </div>
  );
}

