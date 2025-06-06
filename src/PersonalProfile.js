import React, { useState, useRef } from "react";


const content = {
  en: {
    hero: "Empowering Next-Gen Embedded Design",
    heroSub: "Innovative ● Efficient ● Reliable", 
    heroDesc: "Your Partner for Next-Gen Embedded Innovation",
    contact: "Contact",
    about: "About IN Cubed",
    aboutContent: `IN Cubed International Co Ltd is led by a team with extensive experience in embedded systems industrial computer architectures and SoC integration. The founder has served as CEO and CTO of a publicly listed company leading and successfully delivering hundreds of projects into mass production. The founder independently designed three innovative products producing and three products shipping over 20 million units. Today IN Cubed provides full process embedded design services from hardware layout and firmware integration to system optimization and assists clients in the industrial and electric vehicle charging sectors to rapidly achieve mass production goals `,
    services: "Our Services",
    serviceList: [
      "Embedded hardware design (MB, carrier, adapter)",
      "High reliability, mass-production–oriented design services",
      "Custom solution integration, End-to-end hardware, software, mechanical integration",
      "Product Validation and Debugging (EMI, ESD, -40C to 85C Stability Verification and Driver Integration)",
      "ID and Mechanical Design and Production",
      "Project Management and International Communication Bridge",
      "Design transfer, BOM optimization, production support",
    ],
    projects: "Highlighted Projects",
    projectList: [
      "PLC Board – Mass production for US EV chargers",
      "Embedded motherboard system integration",
      "USB to PHY Layer2 MAC‐to‐MAC PLC Board",
      "Industrial HMI Octa‐core controller",
      "Industrial 15” touch panel module",
    ],
    advantages: "Why Choose Us",
    advantageList: [
      "Super fast lead time, prototype in 3 weeks",
      "Transparent workflow, contracts & NDA",
      "Full‐stack know‐how: HW, FW, SW, system",
      "Market‐savvy, Asia/US/EU seamless communication",
      "ISO 9001, ISO 14001, ISO 13485 certified factories",
    ],
    contactSection: "Get in Touch",
    email: "Email",
    line: "Line ID",
    whatsapp: "Phone No.",
    address: "Address",
    addressDetail: "2F‐3, No.94, Baozhong Rd, Xindian Dist., New Taipei City",
  },
  zh: {
    hero: "打造次世代嵌入式設計的核心夥伴",
    heroDesc: "Your Partner for Next-Gen Embedded Design",
    contact: "聯絡我們",
    about: "關於我們",
    aboutContent: `穎特力欣股份有限公司（IN Cubed International Co., Ltd.）由具備嵌入式系統、工業電腦架構及 SoC 整合豐富經驗的團隊領導。管理層曾擔任上市公司 CEO 與 CTO，帶領並成功將數百個專案推向量產，創辦人更曾獨立設計三條創新產品線，累計生產並出貨超過兩千萬台。現今，穎特力欣提供從硬體布局、韌體整合到系統優化的全流程嵌入式設計服務，並在工業及電動車充電領域協助客戶快速達成量產目標。`,
    services: "專業服務",
    serviceList: [
      "嵌入式硬體設計（主機板、載板、轉接模組）",
      "高可靠度、量產導向設計服務",
      "客製化方案整合，硬體、軟體、機構件一站式整合",
      "產品驗證與除錯（EMI、ESD、-40C ~85C 穩定度驗證、驅動整合）",
      "ID 與機構設計生產",
      "專案管理與國際溝通橋接",
      "設計移轉、BOM 優化與量產技術支援",
    ],
    projects: "近期成功案例",
    projectList: [
      "PLC Board – 已成功量產應用於美國 EV 充電設備",
      "嵌入式主機板設計整合",
      "USB to PHY Layer2 MAC‐to‐MAC PLC Board",
      "工業級 HMI Octa‐core 控制板",
      "工業級 15 吋 Touch Panel Module",
    ],
    advantages: "合作優勢",
    advantageList: [
      "設計交期快速，最短三週完成原型",
      "專案流程透明，合約與保密制度完善",
      "跨領域技術整合：硬體、韌體、軟體、系統",
      "熟悉歐美與亞洲市場需求，溝通無障礙",
      "ISO 9001、ISO 14001、ISO 13485 認證工廠",
    ],
    contactSection: "聯絡方式",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "Phone No.",
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
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "inherit" }}>
      {/* Banner 圖片 */}
      <div style={{ width: "100%", maxHeight: 250, overflow: "hidden" }}>
        <img
          src="/circuit-banner-ai.jpg"
          alt="banner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* 內文區塊 */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
        <LanguageSwitcher />

        {/* Hero */}
        <section style={{ textAlign: "center", margin: "40px 0 24px" }}>
          <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>{t.hero}</h1>
          <p style={{ fontSize: 18, color: "#333" }}>{t.heroDesc}</p>
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
            {t.contact}
          </button>
        </section>

        {/* About */}
        <section>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "24px 0 8px", color: "#222" }}>
            {t.about}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.6 }}>{t.aboutContent}</p>
        </section>

        {/* Services */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "24px 0 8px", color: "#222" }}>
            {t.services}
          </h2>
          <ul style={{ margin: "0 0 0 24px", color: "#444", lineHeight: 1.6 }}>
            {t.serviceList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "24px 0 8px", color: "#222" }}>
            {t.projects}
          </h2>
          <ul style={{ margin: "0 0 0 24px", color: "#444", lineHeight: 1.6 }}>
            {t.projectList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Advantages */}
        <section>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: "24px 0 8px", color: "#222" }}>
            {t.advantages}
          </h2>
          <ul style={{ margin: "0 0 0 24px", color: "#444", lineHeight: 1.6 }}>
            {t.advantageList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section ref={contactRef} style={{ textAlign: "center", margin: "40px 0 0" }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#222" }}>
            {t.contactSection}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.6 }}>
            {t.email}：{" "}
            <a href="mailto:michelle@incubed-intl.com" style={{ color: "#2956d4" }}>
              michelle@incubed-intl.com
            </a>
          </p>
          <p style={{ color: "#444", lineHeight: 1.6 }}>{t.line}: slr200k</p>
          <p style={{ color: "#444", lineHeight: 1.6 }}>{t.whatsapp}: +886-2-87919189</p>
          <p style={{ color: "#444", lineHeight: 1.6 }}>
            {t.address}：{t.addressDetail}
          </p>
        </section>
      </div>

      {/* ✅ 底部圖片 */}
      <div style={{ width: "100%", maxHeight: 200, overflow: "hidden", marginTop: 40 }}>
        <img
          src="/bottom picture.jpg"
          alt="footer"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}


