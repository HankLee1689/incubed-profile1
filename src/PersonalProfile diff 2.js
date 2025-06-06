import React, { useState, useRef } from "react"
import { Sun, Moon } from "lucide-react"

const content = {
  en: {
    heroTitle: "Next-Gen Embedded Solutions",
    heroSubtitle: "Innovative ● Efficient ● Reliable",
    contactBtn: "Contact Us",
    aboutTitle: "About IN Cubed",
    aboutText:
      "IN Cubed International Co., Ltd. leverages decades of embedded-systems expertise. Our founder previously served as a CTO of a public company, delivered hundreds of high-volume projects, and designed three product lines shipping over 20 million units globally. We now offer full-stack embedded design: schematic → PCB layout → firmware → system optimization, enabling industrial and EV-charging clients to accelerate time-to-market.",
    servicesTitle: "Our Services",
    servicesList: [
      "Custom Embedded Hardware (Boards, Carriers, Adapters)",
      "Mass-Production-Ready Designs with High Reliability",
      "Complete Integration: Hardware • Firmware • Software • Mechanical",
      "EMI & ESD Testing • –40 °C to 85 °C Thermal Validation",
      "Industrial ID & Mechanical Design",
      "Global Project Management & Liaison",
      "Design Transfer • BOM Optimization • Production Support"
    ],
    projectsTitle: "Highlighted Projects",
    projectsList: [
      "PLC Board • US EV Charger Mass Production",
      "Embedded Motherboard System Integration",
      "USB-to-PHY Layer-2 MAC-to-MAC PLC Board",
      "Industrial HMI Octa-Core Controller",
      "Industrial 15\" Touch Panel Module"
    ],
    advantagesTitle: "Why Choose Us",
    advantagesList: [
      "3-Week Prototype Turnaround",
      "Transparent Workflow • Contracts & NDA",
      "Full-Stack Expertise: HW • FW • SW • System",
      "Market Savvy: Asia / US / EU Communication",
      "ISO 9001 • ISO 14001 • ISO 13485 Certified"
    ],
    contactTitle: "Get In Touch",
    emailLabel: "Email",
    lineLabel: "Line ID",
    whatsappLabel: "Phone No.",
    addressLabel: "Address",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, New Taipei City"
  },
  zh: {
    heroTitle: "次世代嵌入式解決方案",
    heroSubtitle: "創新 ● 高效 ● 可靠",
    contactBtn: "聯絡我們",
    aboutTitle: "關於穎特力欣",
    aboutText:
      "穎特力欣股份有限公司擁有多年的嵌入式系統專業背景。創辦人曾任上市公司 CTO，成功交付數百個量產專案，設計三條產品線，全球出貨超過 2000 萬台。現今，我們提供完整嵌入式設計流程：原理圖 → PCB 佈局 → 韌體 → 系統優化，助力工業與電動車充電領域客戶加速上市。",
    servicesTitle: "我們的服務",
    servicesList: [
      "客製化嵌入式硬體（主機板、載板、轉接模組）",
      "高可靠度量產即用設計",
      "全方位整合：硬體 • 韌體 • 軟體 • 機構",
      "EMI & ESD 測試 • –40 °C 至 85 °C 熱驗證",
      "工業級 ID 與機構設計",
      "全球專案管理與溝通",
      "設計移轉 • BOM 優化 • 量產支援"
    ],
    projectsTitle: "重點專案",
    projectsList: [
      "PLC 主控板 • 美國 EV 充電器量產",
      "嵌入式主機板系統整合",
      "USB-to-PHY Layer-2 MAC-to-MAC PLC 主控板",
      "工業級 HMI 八核心控制器",
      "工業級 15\" 觸控面板模組"
    ],
    advantagesTitle: "為何選擇我們",
    advantagesList: [
      "三週完成原型",
      "流程透明 • 合約與 NDA 完備",
      "全棧專業：硬體 • 韌體 • 軟體 • 系統",
      "熟悉亞洲 / 美國 / 歐洲市場 • 溝通無礙",
      "ISO 9001 • ISO 14001 • ISO 13485 認證"
    ],
    contactTitle: "聯絡我們",
    emailLabel: "電子郵件",
    lineLabel: "Line ID",
    whatsappLabel: "電話號碼",
    addressLabel: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3"
  }
}

export default function PersonalProfile() {
  const [lang, setLang] = useState("en")
  const t = content[lang]
  const contactRef = useRef(null)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      style={{
        background: "#f9f9f9",
        color: "#333",
        fontFamily: "'Segoe UI', sans-serif",
        lineHeight: 1.6
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          zIndex: 100
        }}
      >
        {/* Logo Placeholder */}
        <div style={{ fontSize: 20, fontWeight: 700, color: "#008080" }}>
          IN Cubed Intl
        </div>

        {/* Navigation Links */}
        <nav style={{ display: "flex", gap: 16 }}>
          <button
            onClick={() => scrollToSection("about")}
            style={{
              background: "transparent",
              border: "none",
              color: "#555",
              fontSize: 15,
              cursor: "pointer",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#008080")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            {lang === "en" ? "About" : "關於"}
          </button>
          <button
            onClick={() => scrollToSection("services")}
            style={{
              background: "transparent",
              border: "none",
              color: "#555",
              fontSize: 15,
              cursor: "pointer",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#008080")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            {lang === "en" ? "Services" : "服務"}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              background: "transparent",
              border: "none",
              color: "#555",
              fontSize: 15,
              cursor: "pointer",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#008080")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            {lang === "en" ? "Projects" : "專案"}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            style={{
              background: "transparent",
              border: "none",
              color: "#555",
              fontSize: 15,
              cursor: "pointer",
              transition: "color 0.2s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#008080")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
          >
            {lang === "en" ? "Contact" : "聯絡"}
          </button>
        </nav>

        {/* Language Toggle */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setLang("en")}
            style={{
              background: lang === "en" ? "#008080" : "transparent",
              color: lang === "en" ? "#fff" : "#555",
              border: "1px solid #008080",
              borderRadius: 4,
              padding: "4px 8px",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLang("zh")}
            style={{
              background: lang === "zh" ? "#008080" : "transparent",
              color: lang === "zh" ? "#fff" : "#555",
              border: "1px solid #008080",
              borderRadius: 4,
              padding: "4px 8px",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s"
            }}
          >
            中文
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          background: "#e0f7f7",
          textAlign: "center",
          padding: "60px 20px"
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#008080", marginBottom: 12 }}>
          {t.heroTitle}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: 24 }}>
          {t.heroSubtitle}
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          style={{
            background: "#ff7f50",
            color: "#fff",
            fontSize: "1rem",
            padding: "10px 24px",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(255,127,80,0.4)",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {t.contactBtn}
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          maxWidth: 700,
          margin: "40px auto",
          padding: "0 16px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "32px"
          }}
        >
          <h2 style={{ fontSize: "1.8rem", color: "#008080", marginBottom: 12 }}>
            {t.aboutTitle}
          </h2>
          <p style={{ color: "#666", fontSize: "1rem" }}>{t.aboutText}</p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          maxWidth: 700,
          margin: "40px auto",
          padding: "0 16px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "32px"
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#008080", marginBottom: 12 }}>
            {t.servicesTitle}
          </h2>
          <ul style={{ listStyle: "disc", marginLeft: 20, color: "#666" }}>
            {t.servicesList.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{
          maxWidth: 700,
          margin: "40px auto",
          padding: "0 16px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "32px"
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#008080", marginBottom: 12 }}>
            {t.projectsTitle}
          </h2>
          <ul style={{ listStyle: "circle", marginLeft: 20, color: "#666" }}>
            {t.projectsList.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        id="advantages"
        style={{
          maxWidth: 700,
          margin: "40px auto",
          padding: "0 16px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "32px"
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#008080", marginBottom: 12 }}>
            {t.advantagesTitle}
          </h2>
          <ul style={{ listStyle: "square", marginLeft: 20, color: "#666" }}>
            {t.advantagesList.map((item, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        style={{
          maxWidth: 700,
          margin: "40px auto",
          padding: "0 16px",
          textAlign: "center"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            padding: "32px"
          }}
        >
          <h2 style={{ fontSize: "1.6rem", color: "#008080", marginBottom: 12 }}>
            {t.contactTitle}
          </h2>
          <p style={{ color: "#666", marginBottom: 8 }}>
            <strong>{t.emailLabel}:</strong>{" "}
            <a
              href="mailto:michelle@incubed-intl.com"
              style={{ color: "#008080", textDecoration: "none" }}
            >
              michelle@incubed-intl.com
            </a>
          </p>
          <p style={{ color: "#666", marginBottom: 8 }}>
            <strong>{t.lineLabel}:</strong> slr200k
          </p>
          <p style={{ color: "#666", marginBottom: 8 }}>
            <strong>{t.whatsappLabel}:</strong> +886-2-87919189
          </p>
          <p style={{ color: "#666" }}>
            <strong>{t.addressLabel}:</strong> {t.addressDetail}
          </p>
        </div>
      </section>

      {/* Footer Image */}
      <div style={{ width: "100%", overflow: "hidden", marginTop: 40 }}>
        <img
          src="/bottom picture.jpg"
          alt="footer"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Floating Chat Button */}
      <button
        aria-label="Open Chat"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          background: "#008080",
          border: "none",
          borderRadius: "50%",
          padding: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 20
        }}
        onClick={() => {
          alert("Chat functionality coming soon!")
        }}
      >
        💬
      </button>
    </div>
  )
}

