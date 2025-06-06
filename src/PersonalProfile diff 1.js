import React, { useState, useRef, useEffect } from "react";

// 動態漸層變色關鍵影格
const gradientAnimationStyle = `
  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// 滑入淡入動畫
const fadeInUpStyle = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const content = {
  en: {
    hero: "Empowering Next-Gen Embedded Design",
    heroDesc: "Your Trusted Partner for High-Performance Integrated Solutions",
    contact: "Connect with Us",
    about: "About Us",
    aboutContent: `IN Cubed International Co., Ltd. is led by a team with deep expertise in embedded systems, industrial computer architecture, and SoC integration. Our founder served as CEO and CTO of a publicly listed company, delivering hundreds of projects into mass production and designing three product lines with over 20 million units shipped worldwide. We now offer full-stack embedded design services — from schematic and PCB layout to firmware integration and system optimization — to help clients in industrial and EV charging sectors achieve rapid mass production goals.`,
    services: "Our Services",
    serviceList: [
      "Custom Embedded Hardware Design (MB, Carrier, Adapter)",
      "High-Reliability Mass Production-Ready Solutions",
      "Full Integration: Hardware, Firmware, Software, Mechanical",
      "EMI/ESD Testing & Thermal Stability (-40°C to 85°C)",
      "Industrial ID & Mechanical Design",
      "Project Management & Global Communication",
      "Design Transfer, BOM Optimization, Production Support",
    ],
    projects: "Highlighted Projects",
    projectList: [
      "PLC Board – Mass Production for US EV Chargers",
      "Embedded Motherboard System Integration",
      "USB-to-PHY Layer-2 MAC-to-MAC PLC Board",
      "Industrial HMI Octa-Core Controller",
      "Industrial 15″ Touch Panel Module",
    ],
    advantages: "Why Choose Us",
    advantageList: [
      "Rapid Prototype Turnaround: 3 Weeks",
      "Transparent Workflow, Contracts & NDA",
      "Full-Stack Expertise: HW, FW, SW, System Level",
      "Market Savvy: Asia / US / EU Communication",
      "ISO 9001, 14001 & 13485 Certified Partners",
    ],
    contactSection: "Get In Touch",
    email: "Email",
    line: "Line ID",
    whatsapp: "Phone No.",
    address: "Address",
    addressDetail: "2F-3, No.94, Baozhong Rd., Xindian Dist., New Taipei City",
  },
  zh: {
    hero: "打造未來嵌入式設計核心動力",
    heroDesc: "您值得信賴的高效整合解決方案夥伴",
    contact: "聯絡我們",
    about: "關於我們",
    aboutContent: `穎特力欣股份有限公司由擁有深厚嵌入式系統、工業電腦架構與 SoC 整合專業的團隊領導。創辦人曾任上市公司 CEO 與 CTO，成功將數百個專案推向量產，並設計三條產品線，全球出貨逾兩千萬台。我們提供全方位嵌入式設計服務—從原理圖與 PCB 佈局到韌體整合與系統優化—協助工業及電動車充電領域客戶迅速實現量產目標。`,
    services: "我們的服務",
    serviceList: [
      "客製化嵌入式硬體設計（主機板、載板、轉接模組）",
      "高可靠度量產即用解決方案",
      "全方位整合：硬體、韌體、軟體、機構",
      "EMI/ESD 測試與熱穩定驗證（-40°C 至 85°C）",
      "工業級 ID 與機構設計",
      "專案管理與全球溝通",
      "設計移轉、BOM 優化、量產支援",
    ],
    projects: "重點專案",
    projectList: [
      "PLC 主控板 – 美國電動車充電器量產專案",
      "嵌入式主機板系統整合",
      "USB-to-PHY Layer-2 MAC-to-MAC PLC 主控板",
      "工業級 HMI 八核心控制器",
      "工業級 15 吋觸控面板模組",
    ],
    advantages: "選擇我們的原因",
    advantageList: [
      "快速原型開發：3 週內完成",
      "流程透明：合約與保密條款完善",
      "跨領域專業：硬體、韌體、軟體、系統級整合",
      "市場洞察：亞洲／美國／歐洲溝通無障礙",
      "ISO 9001、14001 與 13485 認證夥伴",
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

  // 滾動到聯絡區
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 監聽捲動更新視差偏移
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 語言切換元件
  const LanguageSwitcher = () => (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
      {["en", "zh"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          style={{
            position: "relative",
            padding: "8px 20px",
            borderRadius: 4,
            border: "none",
            background: "rgba(255,255,255,0.1)",
            color: lang === code ? "#00e5ff" : "#bbb",
            fontWeight: lang === code ? 700 : 400,
            cursor: "pointer",
            transition: "color 0.3s ease",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          {code === "en" ? "EN" : "中文"}
          {lang === code && (
            <span
              style={{
                position: "absolute",
                bottom: -4,
                left: "50%",
                transform: "translateX(-50%)",
                width: 28,
                height: 3,
                background: "#00e5ff",
                borderRadius: 1,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div
      style={{
        background: "linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483)",
        backgroundSize: "400% 400%",
        animation: "gradientBG 15s ease infinite",
        minHeight: "100vh",
        fontFamily: "'Orbitron', 'Segoe UI', sans-serif",
        color: "#222",
        overflowX: "hidden",
      }}
    >
      {/* 全局樣式 */}
      <style>
        {gradientAnimationStyle}
        {fadeInUpStyle}
        {`
        .fade-in-up {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-name: fadeInUp;
          animation-duration: 1s;
        }
        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.2);
        }
        a { color: #00e5ff; text-decoration: none; }
        a:hover { text-decoration: underline; }
        ul li::marker { font-family: 'Courier New', monospace; color: #00e5ff; }
      `}
      </style>

      {/* Banner 視差區塊 */}
      <div
        style={{
          position: "relative",
          height: 300,
          overflow: "hidden",
        }}
      >
        <img
          src="/circuit-banner-ai.jpg"
          alt="banner"
          style={{
            position: "absolute",
            top: scrollY * 0.3, // 輕微視差
            left: 0,
            width: "100%",
            height: "auto",
            filter: "brightness(70%)",
          }}
        />
      </div>

      {/* 主要內容 */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "60px 20px" }}>
        <LanguageSwitcher />

        {/* Hero 區塊（玻璃卡片） */}
        <section
          className="fade-in-up"
          style={{
            animationDelay: "0.2s",
            textAlign: "center",
            margin: "40px 0 30px",
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "40px 30px",
              display: "inline-block",
              maxWidth: 700,
            }}
          >
            <h1
              style={{
                fontSize: 44,
                fontWeight: 700,
                marginBottom: 20,
                color: "#fff",
                textShadow: "0 0 10px rgba(0, 229, 255, 0.8)",
              }}
            >
              {t.hero}
            </h1>
            <p style={{ fontSize: 18, color: "#ddd", lineHeight: 1.6 }}>
              {t.heroDesc}
            </p>
            <button
              onClick={scrollToContact}
              style={{
                marginTop: 30,
                fontSize: 18,
                padding: "12px 36px",
                borderRadius: 8,
                background:
                  "linear-gradient(120deg, #00e5ff 0%, #8c49ff 100%)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 16px rgba(0, 229, 255, 0.7)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.06)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {t.contact}
            </button>
          </div>
        </section>

        {/* About 區塊（玻璃卡片） */}
        <section
          className="fade-in-up"
          style={{ animationDelay: "0.4s", margin: "40px 0" }}
        >
          <div className="glass-card" style={{ padding: "30px 28px" }}>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 600,
                marginBottom: 14,
                color: "#00e5ff",
                textShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
              }}
            >
              {t.about}
            </h2>
            <p style={{ color: "#eee", lineHeight: 1.7, fontSize: 16 }}>
              {t.aboutContent}
            </p>
          </div>
        </section>

        {/* Services 區塊（玻璃卡片） */}
        <section
          className="fade-in-up"
          style={{ animationDelay: "0.6s", margin: "40px 0" }}
        >
          <div className="glass-card" style={{ padding: "30px 28px" }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 600,
                marginBottom: 12,
                color: "#00e5ff",
                textShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
              }}
            >
              {t.services}
            </h2>
            <ul style={{ margin: "0 0 0 28px", color: "#eee", lineHeight: 1.7 }}>
              {t.serviceList.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: 8,
                    fontSize: 16,
                    transition:
                      "transform 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.color = "#00e5ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#eee";
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Projects 區塊（玻璃卡片） */}
        <section
          className="fade-in-up"
          style={{ animationDelay: "0.8s", margin: "40px 0" }}
        >
          <div className="glass-card" style={{ padding: "30px 28px" }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 600,
                marginBottom: 12,
                color: "#00e5ff",
                textShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
              }}
            >
              {t.projects}
            </h2>
            <ul style={{ margin: "0 0 0 28px", color: "#eee", lineHeight: 1.7 }}>
              {t.projectList.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: 8,
                    fontSize: 16,
                    transition:
                      "transform 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.color = "#00e5ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#eee";
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Advantages 區塊（玻璃卡片） */}
        <section
          className="fade-in-up"
          style={{ animationDelay: "1.0s", margin: "40px 0" }}
        >
          <div className="glass-card" style={{ padding: "30px 28px" }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 600,
                marginBottom: 12,
                color: "#00e5ff",
                textShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
              }}
            >
              {t.advantages}
            </h2>
            <ul style={{ margin: "0 0 0 28px", color: "#eee", lineHeight: 1.7 }}>
              {t.advantageList.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: 8,
                    fontSize: 16,
                    transition:
                      "transform 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.color = "#00e5ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.color = "#eee";
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact 區塊（玻璃卡片） */}
        <section
          ref={contactRef}
          className="fade-in-up"
          style={{
            animationDelay: "1.2s",
            textAlign: "center",
            margin: "60px 0 0",
          }}
        >
          <div className="glass-card" style={{ padding: "30px 28px" }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 600,
                marginBottom: 14,
                color: "#00e5ff",
                textShadow: "0 0 8px rgba(0, 229, 255, 0.6)",
              }}
            >
              {t.contactSection}
            </h2>
            <p style={{ color: "#eee", lineHeight: 1.6, fontSize: 16 }}>
              {t.email}：{" "}
              <a href="mailto:michelle@incubed-intl.com">
                michelle@incubed-intl.com
              </a>
            </p>
            <p style={{ color: "#eee", lineHeight: 1.6, fontSize: 16 }}>
              {t.line}：slr200k
            </p>
            <p style={{ color: "#eee", lineHeight: 1.6, fontSize: 16 }}>
              {t.whatsapp}：+886-2-87919189
            </p>
            <p style={{ color: "#eee", lineHeight: 1.6, fontSize: 16 }}>
              {t.address}：{t.addressDetail}
            </p>
          </div>
        </section>
      </div>

      {/* 底部圖片 視差效果 */}
      <div
        style={{
          position: "relative",
          height: 220,
          overflow: "hidden",
        }}
      >
        <img
          src="/bottom-picture-dark.jpg"
          alt="footer"
          style={{
            position: "absolute",
            top: scrollY * 0.2,
            left: 0,
            width: "100%",
            height: "auto",
            filter: "brightness(60%)",
          }}
        />
      </div>
    </div>
  );
}
