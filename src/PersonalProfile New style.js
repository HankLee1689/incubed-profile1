import React, { useState, useRef } from "react";
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
      "Design transfer, BOM optimization, production support"
    ],
    projects: "Highlighted Projects",
    projectList: [
      "PLC Board – Mass production for US EV chargers",
      "Embedded motherboard system integration",
      "USB-to-PHY Layer 2 MAC-to-MAC PLC Board",
      "Industrial-grade fanless HMI octa-core controller board with –40 °C to 85 °C operating temperature range",
      "Industrial-grade 15\" IK10 touch panel module with –30 °C to 85 °C operating temperature"
    ],
    advantages: "Why Choose Us",
    advantageList: [
      "Decades of industry expertise in embedded systems, industrial computing, and SoC integration",
      "Founder spearheaded three groundbreaking product lines with over 20 million units shipped globally",
      "End-to-end service: hardware layout, firmware & software integration, rigorous quality control, system optimization",
      "Rapid prototyping: prototypes delivered within three weeks, accelerating time-to-market",
      "Global reach: seamless communication across Asia, North America, and Europe, bridging cultural and technical gaps",
      "Customer-centric approach: transparent workflow, NDA protection, and dedicated project management for every client",
      "Trusted partners: ISO 9001, ISO 14001, ISO 45001, ISO 13485 and QC080000 certified manufacturing facilities ensure consistent quality"
    ],
    contactSection: "Get in Touch",
    email: "Email",
    line: "Line ID",
    whatsapp: "Phone No.",
    address: "Address",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, New Taipei City"
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
      "設計移轉、BOM 優化、量產支援"
    ],
    projects: "近期成功案例",
    projectList: [
      "PLC 主控板 – 已成功量產應用於美國 EV 充電設備",
      "嵌入式主機板系統整合",
      "MAC-to-MAC PLC 主控板（USB-to-PHY）",
      "工業級 –40 °C 至 85 °C 操作溫度之無風扇 HMI 八核心控制板",
      "工業級 –30 °C 至 85 °C 操作溫度之 15\" IK10 觸控面板模組"
    ],
    advantages: "合作優勢",
    advantageList: [
      "擁有豐富的嵌入式系統、工業電腦與 SoC 整合領域經驗",
      "創辦人領導三款劃時代創新產品，全球累計出貨量超過兩千萬台",
      "全流程服務：硬體布局、韌體與軟體整合、嚴謹品質管控、系統優化",
      "快速原型開發：三週內完成原型，加速產品上市時程",
      "全球佈局：亞、美、歐無縫溝通，消除跨文化技術障礙",
      "值得信賴的夥伴：ISO 9001, ISO 14001, ISO 45001, ISO 13485, QC080000 認證工廠，品質穩定可控",
      "以客為尊：流程透明、完善 NDA 保護，以及專屬專案管理，確保客戶需求受重視且有效執行"
    ],
    contactSection: "聯絡方式",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "電話號碼",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3"
  },
  jp: {
    hero: "次世代組込み設計を強力にサポート",
    heroDesc: "次世代組込みイノベーションのパートナー",
    contactLabel: "お問い合わせ",
    about: "IN Cubed について",
    aboutContent: `IN Cubed International Co. Ltd は、組込みシステム、産業用コンピュータアーキテクチャ、SoC 統合の豊富な経験を持つチームによって指導されています。創業者は上場企業の CEO と CTO を務め、多数のプロジェクトを量産に導きました。さらに、3 つの画期的な製品ラインを設計し、世界で 2,000 万台以上を出荷しました。現在、IN Cubed はハードウェア設計、ファームウェアとソフトウェアの統合、厳格な品質管理、システム統合と最適化までのエンドツーエンド組込み設計サービスを提供し、産業用コンピューティング、AIoT、EV 充電分野のクライアントが高品質な量産を迅速に達成するのを支援しています。`,
    services: "サービス",
    serviceList: [
      "組込みシステムの設計とアーキテクチャ",
      "高信頼性、大量生産向け設計サービス",
      "カスタムソリューション統合：ハードウェア、ソフトウェア、機構設計のワンストップ統合",
      "製品検証、デバッグ、ドライバー統合",
      "ID と機構設計および量産製造",
      "プロジェクト管理と国際的なコミュニケーションブリッジ",
      "設計移管、部品表最適化、生産サポート"
    ],
    projects: "注目プロジェクト",
    projectList: [
      "PLC ボード – 米国 EV 充電器向け量産",
      "組込みマザーボードシステム統合",
      "USB-to-PHY レイヤー 2 MAC-to-MAC PLC ボード",
      "産業用ファンレス HMI 8 コアコントローラーボード (–40 ℃ ～ 85 ℃ 動作温度)",
      "産業用 15\" IK10 タッチパネルモジュール (–30 ℃ ～ 85 ℃ 動作温度)"
    ],
    advantages: "選ばれる理由",
    advantageList: [
      "組込みシステム、産業用コンピューティング、SoC 統合の豊富な経験",
      "創業者は 3 つの画期的な製品ラインを率い、世界で 2,000 万台以上を出荷",
      "エンドツーエンドサービス：ハードウェア設計、ファームウェア＆ソフトウェア統合、厳格な品質管理、システム最適化",
      "迅速な試作：プロトタイプを3週間で提供し、市場投入を加速",
      "グローバル対応：アジア、北米、欧州間のシームレスなコミュニケーション",
      "顧客中心：透明なワークフロー、NDA 保護、専任プロジェクト管理",
      "信頼できるパートナー：ISO 9001、ISO 14001、ISO 13485、ISO 45001、QC080000 認証工場"
    ],
    contactSection: "お問い合わせ",
    email: "メール",
    line: "Line ID",
    whatsapp: "電話番号",
    address: "住所",
    addressDetail: "新北市新店區寶中路94號2樓之3"
  },
  es: {
    hero: "Potenciando el Diseño Embebido de Próxima Generación",
    heroDesc: "Su Socio para la Innovación Embebida de Próxima Generación",
    contactLabel: "Contáctenos",
    about: "Acerca de IN Cubed",
    aboutContent: `IN Cubed International Co. Ltd está dirigida por un equipo con amplia experiencia en sistemas embebidos, arquitecturas de computadoras industriales e integración de SoC. El fundador se desempeñó como CEO y CTO de una empresa que cotiza en bolsa, liderando con éxito cientos de proyectos hacia la producción en masa. Además, diseñó tres líneas de productos innovadores, enviando más de 20 millones de unidades en todo el mundo. Hoy, IN Cubed ofrece servicios de diseño embebido de extremo a extremo, desde el diseño de hardware, integración de firmware y software, hasta control de calidad riguroso e integración y optimización de sistemas, ayudando a clientes en los sectores de computación industrial, AIoT y carga de vehículos eléctricos a lograr rápidamente objetivos de producción en masa de alta calidad.`,
    services: "Nuestros Servicios",
    serviceList: [
      "Diseño y Arquitectura de Sistemas Embebidos",
      "Servicios de diseño de alta confiabilidad orientados a producción en masa",
      "Integración de soluciones personalizadas: integración de hardware, software y mecánica de extremo a extremo",
      "Validación de productos, depuración e integración de controladores",
      "Diseño de identidad y mecánica y fabricación en masa",
      "Gestión de proyectos y puente de comunicación internacional",
      "Transferencia de diseño, optimización de la lista de materiales, soporte de producción"
    ],
    projects: "Proyectos Destacados",
    projectList: [
      "Tarjeta PLC – Producción en masa para cargadores EV en EE. UU.",
      "Integración de sistema de placa madre embebida",
      "Tarjeta PLC USB-a-PHY Capa 2 MAC-a-MAC",
      "Placa controladora HMI octa-core industrial sin ventilador con rango de temperatura de operación –40 °C a 85 °C",
      "Módulo de panel táctil IK10 de 15\" industrial con rango de temperatura de operación –30 °C a 85 °C"
    ],
    advantages: "Por Qué Elegirnos",
    advantageList: [
      "Décadas de experiencia en sistemas embebidos, computación industrial e integración de SoC",
      "El fundador lideró tres líneas de productos innovadores con más de 20 millones de unidades enviadas globalmente",
      "Servicio de extremo a extremo: diseño de hardware, integración de firmware y software, control de calidad riguroso, optimización de sistemas",
      "Prototipado rápido: prototipos entregados en 3 semanas, acelerando el tiempo de comercialización",
      "Alcance global: comunicación fluida entre Asia, América del Norte y Europa, superando barreras culturales y técnicas",
      "Enfoque centrado en el cliente: flujo de trabajo transparente, protección NDA y gestión de proyectos dedicada para cada cliente",
      "Socios de confianza: fábricas certificadas ISO 9001, ISO 14001, ISO 45001, ISO 13485 y QC080000 garantizan calidad constante"
    ],
    contactSection: "Contáctanos",
    email: "Correo electrónico",
    line: "Line ID",
    whatsapp: "Teléfono",
    address: "Dirección",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, New Taipei City"
  },
  de: {
    hero: "Next-Gen Embedded Design auf höchstem Niveau",
    heroDesc: "Ihr Partner für Innovation im Embedded-Bereich",
    contactLabel: "Kontaktieren Sie uns",
    about: "Über IN Cubed",
    aboutContent: `IN Cubed International Co. Ltd wird von einem Team mit umfassender Erfahrung in eingebetteten Systemen, Industriecomputerarchitekturen und SoC-Integration geleitet. Der Gründer war CEO und CTO eines börsennotierten Unternehmens und hat Hunderte von Projekten erfolgreich in die Serienproduktion geführt. Zudem wurden drei bahnbrechende Produktlinien entwickelt, von denen weltweit über 20 Millionen Einheiten ausgeliefert wurden. Heute bietet IN Cubed Komplettlösungen für das Embedded Design an – von Hardwarelayout, Firmware- und Softwareintegration, strenger Qualitätskontrolle bis hin zur Systemintegration und Optimierung – und hilft Kunden in den Bereichen Industriecomputer, AIoT und EV-Ladetechnik, hochwertige Serienproduktionsziele schnell zu erreichen.`,
    services: "Unsere Dienstleistungen",
    serviceList: [
      "Entwurf und Architektur von Embedded-Systemen",
      "Designservices mit hoher Zuverlässigkeit und Fokus auf Serienproduktion",
      "Individuelle Lösungsintegration: Hardware-, Software- und Mechanikintegration aus einer Hand",
      "Produktvalidierung, Debugging und Treiberintegration",
      "ID- und mechanische Entwicklung und Serienfertigung",
      "Projektmanagement und internationale Kommunikationsbrücke",
      "Designtransfer, Stücklistenoptimierung, Produktionsunterstützung"
    ],
    projects: "Referenzprojekte",
    projectList: [
      "PLC-Board – Serienfertigung für US-EV-Ladestationen",
      "Integration von Embedded-Motherboardsystemen",
      "USB-zu-PHY Layer 2 MAC-to-MAC PLC-Board",
      "Lüfterloses HMI-Octa-Core-Controllerboard für den industriellen Einsatz mit einem Betriebstemperaturbereich von –40 °C bis 85 °C",
      "15\" IK10 Industrie-Touchpanelmodul mit Betriebstemperaturbereich von –30 °C bis 85 °C"
    ],
    advantages: "Warum wir?",
    advantageList: [
      "Jahrzehntelange Branchenerfahrung in Embedded-Systemen, Industriecomputing und SoC-Integration",
      "Der Gründer führte drei bahnbrechende Produktlinien mit über 20 Millionen ausgelieferten Einheiten weltweit",
      "Komplettservice: Hardwarelayout, Firmware- & Softwareintegration, strenge Qualitätskontrolle, Systemoptimierung",
      "Schnelle Prototypenerstellung: Prototypenlieferung innerhalb von drei Wochen, schnellere Markteinführung",
      "Weltweite Reichweite: nahtlose Kommunikation in Asien, Nordamerika und Europa, Überbrückung kultureller und technischer Hürden",
      "Kundenorientierung: Transparenter Workflow, NDA-Schutz, dediziertes Projektmanagement für jeden Kunden",
      "Vertrauenswürdige Partner: ISO 9001, ISO 14001, ISO 45001, ISO 13485 und QC080000 zertifizierte Fertigungsstätten gewährleisten gleichbleibende Qualität"
    ],
    contactSection: "Kontakt",
    email: "E-Mail",
    line: "Line ID",
    whatsapp: "Telefonnummer",
    address: "Adresse",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, New Taipei City"
  }
};

const googleMapsPlaceUrl = "https://www.google.com/maps/place/新北市新店區寶中路94號2樓之3";

const languages = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "jp", label: "日本語" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

export default function PersonalProfile() {
  const [lang, setLang] = useState("en");
  const [showAbout, setShowAbout] = useState(false);
  const contactRef = useRef(null);
  const t = content[lang];

  // Modal 淡入動畫
  const modalAnim = showAbout ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" };

  // 卡片 UI
  const cardStyle = {
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 2px 18px 0 #2956d414",
    padding: "32px 24px 28px",
    margin: "24px 0",
    maxWidth: 820,
    marginLeft: "auto",
    marginRight: "auto"
  };

  return (
    <div style={{
      background: "linear-gradient(120deg, #f7f7fb 70%, #e7f0fd 100%)",
      minHeight: "100vh",
      fontFamily: "inherit"
    }}>
      {/* Hero 區塊 */}
      <section style={{
        padding: "58px 0 30px",
        textAlign: "center",
        background: "linear-gradient(120deg, #f5f8fe 82%, #e7f0fd 100%)",
        borderBottom: "1.5px solid #e2eaf7"
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto", padding: "0 16px"
        }}>
          <div style={{
            display: "flex", justifyContent: "flex-end", marginBottom: 12
          }}>
            <select
              value={lang}
              onChange={e => setLang(e.target.value)}
              style={{
                borderRadius: 6,
                border: "1.2px solid #2956d4",
                fontSize: 16,
                fontWeight: 600,
                padding: "6px 18px 6px 8px",
                background: "#fff",
                color: "#1c3165",
                boxShadow: "0 2px 8px 0 #2956d406"
              }}
            >
              {languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </div>
          <h1 style={{
            fontSize: "clamp(2.1rem, 6vw, 3.2rem)",
            fontWeight: 900,
            letterSpacing: 1,
            margin: "0 0 14px",
            background: "linear-gradient(90deg,#2956d4 45%,#53b9f7 90%)",
            color: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text"
          }}>{t.hero}</h1>
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "#2246c6",
            fontWeight: 500,
            margin: "0 0 32px"
          }}>{t.heroDesc}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <button
              onClick={() => setShowAbout(true)}
              style={{
                fontSize: 17,
                padding: "13px 36px",
                borderRadius: 30,
                background: "linear-gradient(90deg,#2956d4,#53b9f7 80%)",
                color: "#fff",
                border: "none",
                boxShadow: "0 2px 10px 0 #2246c628",
                cursor: "pointer",
                fontWeight: 700,
                transition: "filter 0.18s",
                marginBottom: 6
              }}
            >{t.about}</button>
            <button
              onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontSize: 17,
                padding: "13px 36px",
                borderRadius: 30,
                background: "#fff",
                color: "#2956d4",
                border: "2px solid #2956d4",
                cursor: "pointer",
                fontWeight: 700,
                boxShadow: "0 2px 10px 0 #2956d428",
                marginBottom: 6
              }}
            >{t.contactLabel}</button>
          </div>
        </div>
      </section>

      {/* 專業服務區塊 */}
      <section style={cardStyle}>
        <h2 style={{
          fontSize: 23, fontWeight: 700, color: "#2956d4", marginBottom: 10, letterSpacing: 1
        }}>
          <span style={{ borderBottom: "2.5px solid #2956d4", paddingBottom: 1 }}>{t.services}</span>
        </h2>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "18px 36px",
          justifyContent: "flex-start", marginTop: 8
        }}>
          {t.serviceList.map((item, idx) => (
            <div key={idx} style={{
              background: "#f5f8fe", color: "#264183", borderRadius: 11,
              padding: "13px 22px", fontSize: 16, fontWeight: 500,
              boxShadow: "0 1px 8px 0 #2956d405", minWidth: 230
            }}>{item}</div>
          ))}
        </div>
      </section>

      {/* 合作優勢區塊 */}
      <section style={cardStyle}>
        <h2 style={{
          fontSize: 23, fontWeight: 700, color: "#53b9f7", marginBottom: 10, letterSpacing: 1
        }}>
          <span style={{ borderBottom: "2.5px solid #53b9f7", paddingBottom: 1 }}>{t.advantages}</span>
        </h2>
        <ul style={{
          margin: "12px 0 0 20px", color: "#2956d4", fontSize: 16, lineHeight: 1.8
        }}>
          {t.advantageList.map((item, idx) => (
            <li key={idx} style={{
              marginBottom: 4, fontWeight: 500
            }}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 精選專案區塊 */}
      <section style={cardStyle}>
        <h2 style={{
          fontSize: 23, fontWeight: 700, color: "#1c3165", marginBottom: 10, letterSpacing: 1
        }}>
          <span style={{ borderBottom: "2.5px solid #1c3165", paddingBottom: 1 }}>{t.projects}</span>
        </h2>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18
        }}>
          {t.projectList.map((item, idx) => (
            <div key={idx} style={{
              background: "#e7f0fd", borderRadius: 11, padding: "17px 20px",
              color: "#2246c6", fontSize: 16, fontWeight: 600,
              boxShadow: "0 1px 6px 0 #2956d407"
            }}>{item}</div>
          ))}
        </div>
      </section>

      {/* 聯絡資訊區塊 */}
      <section ref={contactRef} style={{ ...cardStyle, background: "#f7f7fb" }}>
        <h2 style={{
          fontSize: 22, fontWeight: 700, color: "#2246c6", marginBottom: 14
        }}>{t.contactSection}</h2>
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "20px 44px",
          justifyContent: "flex-start", alignItems: "flex-start"
        }}>
          {/* Email */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6, minWidth: 230
          }}>
            <Mail size={20} style={{ color: "#2956d4" }} />
            <span style={{ color: "#222", fontWeight: 600 }}>{t.email}：</span>
            <a href="mailto:michelle@incubed-intl.com" style={{
              color: "#2956d4", fontWeight: 600, textDecoration: "underline"
            }}>michelle@incubed-intl.com</a>
          </div>
          {/* Line ID */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6, minWidth: 180
          }}>
            <MessageCircle size={20} style={{ color: "#2956d4" }} />
            <span style={{ color: "#222", fontWeight: 600 }}>{t.line}：</span>
            <span style={{ color: "#2956d4", fontWeight: 600 }}>slr200k</span>
          </div>
          {/* Phone */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6, minWidth: 180
          }}>
            <Phone size={20} style={{ color: "#2956d4" }} />
            <span style={{ color: "#222", fontWeight: 600 }}>{t.whatsapp}：</span>
            <span style={{ color: "#2956d4", fontWeight: 600 }}>+886-2-87919189</span>
          </div>
          {/* Address */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6, minWidth: 220
          }}>
            <Building size={20} style={{ color: "#2956d4" }} />
            <span style={{ color: "#222", fontWeight: 600 }}>{t.address}：</span>
            <a href={googleMapsPlaceUrl}
              target="_blank" rel="noopener noreferrer"
              style={{ color: "#2956d4", fontWeight: 600, textDecoration: "underline" }}>
              {t.addressDetail}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        width: "100%", maxHeight: 140, overflow: "hidden", marginTop: 35,
        background: "linear-gradient(90deg,#2956d4 10%,#53b9f7 100%)"
      }}>
        <img
          src="/footer_circuit_strip.png"
          alt="footer"
          style={{ width: "100%", objectFit: "cover", opacity: 0.93 }}
        />
      </footer>

      {/* About Modal */}
      <div style={{
        transition: "opacity 0.25s",
        position: "fixed", inset: 0, zIndex: 101,
        background: showAbout ? "rgba(20,50,130,0.18)" : "rgba(20,50,130,0.01)",
        backdropFilter: showAbout ? "blur(2.5px)" : "none",
        ...modalAnim,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        {showAbout && (
          <div style={{
            background: "#fff", borderRadius: 20,
            padding: "40px 32px 28px", boxShadow: "0 6px 32px 0 #2246c650",
            position: "relative", maxWidth: 680, width: "92vw"
          }}>
            <button onClick={() => setShowAbout(false)} style={{
              position: "absolute", top: 16, right: 16, background: "none", border: "none", cursor: "pointer", color: "#2246c6", fontSize: 26
            }}>
              <X size={32} />
            </button>
            <h2 style={{
              fontSize: 28, fontWeight: 800, marginBottom: 18, color: "#2956d4"
            }}>{t.about}</h2>
            <p style={{ color: "#222", fontSize: 18, lineHeight: 1.8 }}>{t.aboutContent}</p>
          </div>
        )}
      </div>
    </div>
  );
}
