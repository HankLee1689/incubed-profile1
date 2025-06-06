// PersonalProfile.js

import React, { useState, useRef, useEffect } from "react";
import { Mail, MessageCircle, Phone, Building, X } from "lucide-react";

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
      "Product validation debugging and driver integration",
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
      "Decades of industry expertise in embedded systems, industrial computing, and SoC integration",
      "Founder spearheaded three groundbreaking product lines with over 20 million units shipped globally",
      "End-to-end service: hardware layout, firmware & software integration, rigorous quality control, system optimization",
      "Rapid prototyping: prototypes delivered within three weeks, accelerating time-to-market",
      "Global reach: seamless communication across Asia, North America, and Europe, bridging cultural and technical gaps",
      "Customer-centric approach: transparent workflow, NDA protection, and dedicated project management for every client",
      "Trusted partners: ISO 9001, ISO 14001, and ISO 13485 certified manufacturing facilities ensure consistent quality",
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
      "擁有豐富的嵌入式系統、工業電腦與SoC整合領域經驗",
      "創辦人領導三款劃時代創新產品，全球累計出貨量超過兩千萬台",
      "全流程服務：硬體布局、韌體與軟體整合、嚴謹品質管控、系統優化",
      "快速原型開發：三週內完成原型，加速產品上市時程",
      "全球佈局：亞、美、歐無縫溝通，消除跨文化技術障礙",
      "值得信賴的夥伴：ISO 9001、ISO 14001、ISO 13485認證工廠，品質穩定可控",
      "以客為尊：流程透明、完善NDA保護，以及專屬專案管理，確保客戶需求受重視且有效執行",
    ],
    contactSection: "聯絡方式",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "電話號碼",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3",
  },
};

// 中文 Google Maps 連結（正確顯示地圖與座標）
const googleMapsPlaceUrl =
  "https://www.google.com/maps/place/新北市新店區寶中路94號2樓之3";

// 使用 CountAPI “get” endpoint，避免 CORS 或 “hit” 失敗問題
const COUNT_API_URL = "https://api.countapi.xyz/get/incubed/homepage";

export default function PersonalProfile() {
  const [lang, setLang] = useState("en");
  const [showAbout, setShowAbout] = useState(false);
  const [viewCount, setViewCount] = useState("Loading...");
  const contactRef = useRef(null);

  const t = content[lang];

  useEffect(() => {
    fetch(COUNT_API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response not ok");
        }
        return res.json();
      })
      .then((data) => {
        setViewCount(data.value ?? 0);
      })
      .catch(() => {
        setViewCount(0);
      });
  }, []);

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
          <p style={{ fontSize: 18, color: "#333", marginBottom: 16 }}>
            {t.heroDesc}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            <button
              onClick={() => setShowAbout(true)}
              style={{
                fontSize: 16,
                padding: "8px 24px",
                borderRadius: 6,
                background: "#2956d4",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t.about}
            </button>
            <button
              onClick={scrollToContact}
              style={{
                fontSize: 16,
                padding: "8px 24px",
                borderRadius: 6,
                background: "#2956d4",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t.contactLabel}
            </button>
          </div>
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
          <ul
            style={{
              margin: "0 0 0 24px",
              color: "#444",
              lineHeight: 1.6,
              listStyleType: "disc",
            }}
          >
            {t.serviceList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Why Choose Us Section */}
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
          <ul
            style={{
              margin: "0 0 0 24px",
              color: "#444",
              lineHeight: 1.6,
              listStyleType: "disc",
            }}
          >
            {t.advantageList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Highlighted Projects Section */}
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
          <ul
            style={{
              margin: "0 0 0 24px",
              color: "#444",
              lineHeight: 1.6,
              listStyleType: "disc",
            }}
          >
            {t.projectList.map((item, idx) => (
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

          {/* Address with Building Icon (英文與中文皆使用相同 Google Maps 連結) */}
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
            <a
              href={googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2956d4", marginLeft: 4, textDecoration: "underline" }}
            >
              {t.addressDetail}
            </a>
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

      {/* Page View Counter at bottom-right */}
      <div
        style={{
          position: "fixed",
          bottom: 12,
          right: 12,
          background: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: 4,
          fontSize: 12,
          zIndex: 1100,
        }}
      >
        {lang === "en" ? `Views: ${viewCount}` : `瀏覽次數：${viewCount}`}
      </div>

      {/* About Modal */}
      {showAbout && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 8,
              maxWidth: 600,
              width: "90%",
              maxHeight: "80%",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={24} />
            </button>
            <h2 style={{ marginBottom: 16, color: "#222" }}>{t.about}</h2>
            <p style={{ color: "#444", lineHeight: 1.6 }}>{t.aboutContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
