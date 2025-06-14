// PersonalProfile.js

import React, { useState, useRef } from "react";
import { Star, Zap, Award, X, Mail, Phone, Home, MessageCircle, Globe, Building, Layers } from "lucide-react";

const content = {
  en: {
	  headerMotto: ["Innovative", "Intelligence", "Integration", "Efficient", "Reliable"],
    hero: "Empowering Next-Gen Embedded Design",
    heroDesc: "Your Partner for Next-Gen Embedded Innovation",
    contactLabel: "Contact us",
    about: "About IN Cubed",
aboutContent: `IN Cubed International Co., Ltd. specializes in high-reliability, mass-production–ready embedded and AI hardware.
Our team has managed mass production of over 20 million units across hundreds of product lines, with decades of experience (including General Manager/CTO of a listed company).
We offer one-stop solutions covering system architecture, circuit design and layout, rapid prototyping, hardware/software integration, validation, system integration, and mass production.
Our projects power global EV charging, industrial AIoT, and more—trusted by tier-one brands in the US, Europe, and Asia.`,
    services: "Our Services",
    serviceList: [
      "Full-stack embedded hardware/software/system co-design",
  "AI and IoT integration & solution development",
  "Rapid prototyping & mass production",
  "Custom board, module, and system design",
  "High-reliability quality engineering, validation, and support",
  "BOM cost reduction & supply chain optimization",
  "Project management, NDA protection, global communication"
    ],
    projects: "Highlighted Projects",
    projectList: [
      "PLC Board – Mass production for Tier one EVC customer",
      "Embedded motherboard system integration",
      "USB-to-PHY Layer 2 MAC-to-MAC PLC Board",
      "Industrial-grade fanless HMI Octa-Core SBC board with –40 °C to 85 °C operating temperature",
      "Industrial-grade 15\" IK10 touch panel module with –30 °C to 85 °C operating temperature",
    ],
    advantages: "Why Choose Us",
    advantageList: [
  "Decades of experience in embedded systems, industrial computing, and SoC integration, recognized by leading global brands",
  "One-stop solutions: covering hardware design, firmware/software integration, rigorous quality assurance, and system optimization",
  "Rapid prototyping and delivery, significantly accelerating clients’ time-to-market",
  "Founder independently designed three groundbreaking product lines, with over 20 million units mass-produced worldwide and significant industry impact",
  "Client-centric: transparent project workflow, strict NDA protection, and dedicated one-on-one project management",
  "Manufacturing facilities certified to ISO 9001, 14001, 45001, 13485, and QC080000, ensuring comprehensive quality and safety",
    ],
    contactSection: "Get in Touch",
    email: "Email",
    line: "Line ID",
    phone: "Phone No.",
    address: "Address",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, New Taipei City",
  },
  zh: {
	   headerMotto: ["創新", "智慧", "整合", "高效", "可靠"],
    hero: "打造次世代嵌入式設計的核心夥伴",
    heroDesc: "您下一代嵌入式創新的夥伴",
    contactLabel: "聯絡我們",
    about: "關於我們",
   aboutContent: `穎特力欣股份有限公司專注於高可靠度、可量產的嵌入式與AI硬體設計。
團隊量產經驗超過2,000萬片，管理機種超過數百款，並擁有數十年（含上市公司總經理/CTO）研發實戰經驗。
我們提供從系統架構、線路設計布局、快速打樣，到軟硬體整合、驗證、系統整合與量產的一站式服務。
產品已廣泛應用於全球EV充電、工業AIoT等領域，並獲美、歐、亞指標大廠信賴。`,

    services: "專業服務",
    serviceList: [
      "硬體/軟體/系統協同設計全流程服務",
  "AI與物聯網（IoT）整合與解決方案",
  "快速打樣與批量量產",
  "客製化主板、模組與系統開發",
  "高可靠度品質工程、驗證與技術支援",
  "BOM成本優化與供應鏈整合",
  "專案管理、NDA保護、全球溝通"
    ],
    projects: "近期成功案例",
    projectList: [
      "PLC 主控板 – 量產應用於美國 Tier one EV 充電設備",
      "嵌入式主機板系統整合",
      "MAC-to-MAC PLC 主控板（USB-to-PHY）",
      "工業級 –40 °C 至 85 °C 操作溫度之無風扇 HMI SBC 八核心控制板",
      "工業級 –30 °C 至 85 °C 操作溫度之 15\" IK10 觸控面板模組",
    ],
    advantages: "合作優勢",
    advantageList: [
       "深耕嵌入式系統、工業電腦與SoC整合領域數十年，技術實力獲全球領導品牌肯定",
  "一站式解決方案：涵蓋硬體設計、軟韌體整合、嚴謹品質控管及系統最佳化",
  "原型機快速交付，大幅加速客戶產品上市時程",
  "創辦人獨立設計三大劃時代產品線，全球量產出貨累積超過2,000萬台，產業影響力卓著",
  "客戶導向：專案流程透明、NDA嚴格保障，專屬經理全程一對一服務",
  "製造工廠通過 ISO 9001、14001、45001、13485、QC080000 等多項國際認證，品質與安全獲全面保障",
    ],
    contactSection: "聯絡方式",
    email: "電子郵件",
    line: "Line ID",
    phone: "電話號碼",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3",
  },
  jp: {
	  headerMotto: ["革新", "知能", "統合", "効率", "信頼"], 
    hero: "次世代組込み設計を強力にサポート",
    heroDesc: "次世代組込みイノベーションのパートナー",
    contactLabel: "お問い合わせ",
    about: "IN Cubed について",
 aboutContent: `IN Cubed International Co., Ltd.は、高信頼性かつ量産対応の組込みおよびAIハードウェアを専門としています。
チームは累計2,000万台以上・数百機種の量産管理実績があり、上場企業の総経理/CTOを含む数十年の経験を持ちます。
当社は、システムアーキテクチャ設計、回路設計・レイアウト、高速試作、ハード・ソフト統合、検証、システムインテグレーション、量産までのワンストップサービスを提供しています。
当社のプロジェクトは、世界のEV充電・産業用AIoT等で採用され、米国・欧州・アジアの大手ブランドから信頼されています。`,

    services: "サービス",
    serviceList: [
       "ハードウェア／ソフトウェア／システム協調設計のフルスタック対応",
  "AIおよびIoTの統合・ソリューション開発",
  "迅速な試作と量産対応",
  "カスタムボード・モジュール・システム設計",
  "高信頼性の品質工学・検証・技術サポート",
  "BOMコスト削減とサプライチェーン最適化",
  "プロジェクト管理、NDA保護、グローバルコミュニケーション"
    ],
    projects: "注目プロジェクト",
    projectList: [
      "PLC ボード – 米国 EV 充電器向け量産",
      "組込みマザーボードシステム統合",
      "USB-to-PHY レイヤー 2 MAC-to-MAC PLC ボード",
      "産業用ファンレス HMI SBC 8 コアコントローラーボード (–40 ℃ ～ 85 ℃ 動作温度)",
      "産業用 15\" IK10 タッチパネルモジュール (–30 ℃ ～ 85 ℃ 動作温度)",
    ],
    advantages: "選ばれる理由",
    advantageList: [
      "組込みシステム、産業用コンピュータ、SoC統合分野で数十年の実績。世界有数のブランドからも技術力が高く評価されています",
  "ワンストップソリューション：ハードウェア設計、ファームウェア/ソフトウェア統合、厳格な品質管理、システム最適化まで対応",
  "迅速なプロトタイピングで、お客様の製品市場投入を大幅に加速",
  "創業者が独自に設計した3つの画期的な製品ラインは、世界累計2,000万台以上の量産実績を持ち、業界に大きな影響を与えています",
  "顧客中心主義：プロジェクトの透明な進行、NDAによる厳格な機密保持、専任マネージャーによる一貫対応",
  "製造工場はISO 9001、14001、45001、13485、QC080000など国際認証取得済みで、品質と安全性を全面的に保証",

    ],
    contactSection: "お問い合わせ",
    email: "メール",
    line: "Line ID",
    phone: "電話番号",
    address: "住所",
    addressDetail: "新北市新店区寶中路94号2階之3",
  },
  es: {
	   headerMotto: ["Innovador", "Inteligencia", "Integración", "Eficiente", "Confiable"],
    hero: "Potenciando el Diseño Embebido de Próxima Generación",
    heroDesc: "Su Socio para la Innovación Embebida de Próxima Generación",
    contactLabel: "Contáctenos",
    about: "Acerca de IN Cubed",
	 aboutContent: `IN Cubed International Co., Ltd. se especializa en hardware embebido y de IA de alta confiabilidad, listo para producción en masa.
Nuestro equipo ha gestionado la producción masiva de más de 20 millones de unidades en cientos de líneas de productos, y cuenta con décadas de experiencia (incluyendo Director General/CTO de una empresa cotizada).
Ofrecemos soluciones integrales que abarcan desde la arquitectura del sistema, el diseño y trazado de circuitos, el prototipado rápido, la integración de hardware/software, la validación, la integración de sistemas y la producción en masa.
Nuestros proyectos impulsan la carga global de vehículos eléctricos, la IA industrial y más; marcas líderes en Estados Unidos, Europa y Asia confían en nosotros.`,


    services: "Nuestros Servicios",
    serviceList: [
       "Co-diseño integral de hardware, software y sistemas embebidos",
  "Integración de IA e IoT y desarrollo de soluciones",
  "Prototipado rápido y producción en masa",
  "Diseño personalizado de placas, módulos y sistemas",
  "Ingeniería de calidad, validación y soporte de alta confiabilidad",
  "Reducción de costos de BOM y optimización de la cadena de suministro",
  "Gestión de proyectos, protección NDA y comunicación global"
    ],
    projects: "Proyectos Destacados",
    projectList: [
    "Placa PLC – Producción en masa para cliente EVC de nivel 1",
      "Integración de sistema de placa madre embebida",
      "Tarjeta PLC USB-a-PHY Capa 2 MAC-a-MAC",
      "Placa controladora HMI SBC Octa-Core industrial sin ventilador con rango de temperatura de operación –40 °C a 85 °C",
      "Módulo de panel táctil IK10 de 15\" industrial con rango de temperatura de operación –30 °C a 85 °C",
    ],
    advantages: "Por Qué Elegirnos",
    advantageList: [
       "Décadas de experiencia en sistemas embebidos, computación industrial e integración SoC, reconocidas por marcas líderes a nivel mundial",
  "Soluciones integrales: diseño de hardware, integración de firmware/software, aseguramiento de calidad riguroso y optimización de sistemas",
  "Prototipado y entrega rápidos, acelerando significativamente el lanzamiento al mercado de los clientes",
  "El fundador diseñó de manera independiente tres líneas de productos innovadoras, superando los 20 millones de unidades producidas a nivel mundial e influyendo notablemente en la industria",
  "Enfoque centrado en el cliente: flujo de trabajo transparente, protección estricta de NDA y gestión personalizada de proyectos de principio a fin",
  "Instalaciones de fabricación certificadas ISO 9001, 14001, 45001, 13485 y QC080000, que garantizan calidad y seguridad en todos los procesos",
    ],
    contactSection: "Póngase en Contacto",
    email: "Correo Electrónico",
    line: "ID de Line",
    phone: "Teléfono",
    address: "Dirección",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Distrito Xindian, Ciudad de Nuevo Taipéi",
  },
  de: {
	   headerMotto: ["Innovativ", "Intelligenz", "Integration", "Effizient", "Zuverlässig"], 
    hero: "Stärkung des Next-Gen Embedded Designs",
    heroDesc: "Ihr Partner für Next-Gen Embedded Innovation",
    contactLabel: "Kontaktieren Sie uns",
    about: "Über IN Cubed",
   aboutContent: `Die IN Cubed International Co., Ltd. ist auf hochzuverlässige, serienreife Embedded- und KI-Hardware spezialisiert.
Unser Team verfügt über Erfahrung in der Serienfertigung von mehr als 20 Millionen Einheiten und dem Management von Hunderten von Produktlinien – mit jahrzehntelanger Erfahrung, einschließlich Generaldirektor/CTO eines börsennotierten Unternehmens.
Wir bieten Komplettlösungen von der Systemarchitektur, Schaltungsdesign und Layout, schnellem Prototyping, Hard-/Softwareintegration, Validierung, Systemintegration bis zur Serienproduktion – alles aus einer Hand.
Unsere Projekte treiben weltweite EV-Ladeinfrastruktur, industrielle AIoT und mehr an – vertraut von führenden Marken in den USA, Europa und Asien.`,

    services: "Unsere Dienstleistungen",
    serviceList: [
    "Full-Stack Co-Design von Embedded-Hardware, -Software und -Systemen",
  "Integration von KI und IoT & Lösungsentwicklung",
  "Schnelle Prototypenerstellung & Serienproduktion",
  "Kundenspezifisches Board-, Modul- und Systemdesign",
  "Hochzuverlässiges Qualitätsengineering, Validierung und Support",
  "BOM-Kostenoptimierung & Supply-Chain-Management",
  "Projektmanagement, NDA-Schutz, globale Kommunikation"
    ],
    projects: "Hervorgehobene Projekte",
    projectList: [
     "PLC-Board – Serienproduktion für Tier-1-EVC-Kunden",
      "Embedded-Motherboard-Systemintegration",
      "USB-zu-PHY Layer 2 MAC-zu-MAC PLC-Platine",
      "Industriefähige lüfterlose HMI-SBC-Oktacore-Controller-Platine mit –40 °C bis 85 °C Betriebstemperatur",
      "Industriefähiges 15\" IK10 Touchpanel-Modul mit –30 °C bis 85 °C Betriebstemperatur",
    ],
    advantages: "Warum Uns Wählen",
    advantageList: [
       "Jahrzehntelange Erfahrung in Embedded-Systemen, industrieller Computertechnik und SoC-Integration – anerkannt von führenden Marken weltweit",
  "One-Stop-Lösungen: Hardwaredesign, Firmware-/Softwareintegration, strenge Qualitätskontrolle und Systemoptimierung",
  "Schnelle Prototypenentwicklung und Lieferung, wodurch die Markteinführungszeit unserer Kunden erheblich verkürzt wird",
  "Der Gründer hat eigenständig drei bahnbrechende Produktlinien entwickelt, über 20 Millionen Stück weltweit produziert und damit nachhaltigen Einfluss auf die Branche ausgeübt",
  "Kundenorientierung: Transparenter Projektablauf, strenger NDA-Schutz, persönliche Betreuung durch dedizierte Projektmanager",
  "Unsere Produktionsstätten sind nach ISO 9001, 14001, 45001, 13485 und QC080000 zertifiziert – für umfassende Qualitäts- und Sicherheitsstandards",
     
	 ],
    contactSection: "Kontakt aufnehmen",
    email: "E-Mail",
    line: "Line ID",
    phone: "Telefon",
    address: "Adresse",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Xindian Dist, Neu-Taipeh Stadt",
  },
};

// 中文 Google Maps 連結（正確顯示地圖與座標）
const googleMapsPlaceUrl =
  "https://www.google.com/maps/place/新北市新店區寶中路94號2樓之3";

export default function PersonalProfile() {
  const [lang, setLang] = useState("en");
  const [showAbout, setShowAbout] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  const contactRef = useRef(null);

  const t = content[lang];

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

const LanguageSwitcher = () => (
  <div style={{
    position: "fixed",
    top: 32,
    right: 36,
    zIndex: 2000,
    background: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    boxShadow: "0 2px 16px 0 rgba(0,80,200,0.08)",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "8px 22px 8px 16px",
    gap: 10,
    border: "1.2px solid #dbebfc",
    fontWeight: 700
  }}>
    <Globe size={24} style={{ color: "#2574e8" }} />
    <select
      value={lang}
      onChange={e => setLang(e.target.value)}
      style={{
        borderRadius: 14,
        border: "2px solid #2995e7",
        fontSize: 18,
        fontWeight: 700,
        padding: "7px 26px 7px 10px",
        color: "#1d407a",
        background: "#fff url('data:image/svg+xml;utf8,<svg fill=\"%232974e7\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>') no-repeat right 10px center/18px 18px",
        appearance: "none",
        minWidth: 74,
        outline: "none",
        cursor: "pointer"
      }}
    >
      <option value="en">English</option>
      <option value="jp">日本語</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
      <option value="zh">中文</option>
    </select>
  </div>
);



  return (
    <div
      style={{
        background: `#f7f7f7 url("/circuit-pattern.png") repeat`,
        minHeight: "100vh",
        fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif"',
      }}
    >
        <LanguageSwitcher />
	
      {/* Banner Image */}
     {/* <div style={{ width: "100%", maxHeight: 250, overflow: "hidden" }}>
        <img
          src="/circuit-banner-ai.jpg"
          alt="banner"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
*/}
      {/* Main Content */}
{/* 首列 Logo + 標語（橫向排列） */}
{/* Header Flex Row - Logo+標語(A) 和語言切換(B) 同水平齊平 */}
<div
  style={{
    width: "100%",
    background: "#fff",
    paddingTop: 18,
    paddingBottom: 10,
    display: "flex",
    justifyContent: "center"
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 36,
      maxWidth: 1200,
      width: "100%",
      flexWrap: "wrap", // 手機自動換行
      justifyContent: "center"
    }}
  >
    {/* LOGO */}
    <img
      src="/logo 2.png"
      alt="IN³ CUBED Logo"
      style={{
        height: 62,
        objectFit: "contain"
      }}
    />
    {/* 標語 */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 12,
        fontSize: 23,
        fontWeight: 800,
        color: "#1976d2",
        textAlign: "center",
        justifyContent: "center"
      }}
    >
      {t.headerMotto.map((word, idx) => (
        <span
          key={word}
          style={{
            display: "inline-block",
            transition: "transform 0.23s, color 0.19s, text-shadow 0.18s",
            fontWeight: 800,
            color: "#1976d2",
            cursor: "pointer",
            margin: idx !== 0 ? "0 0 0 2px" : "0"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.18)";
            e.currentTarget.style.color = "#2299ee";
            e.currentTarget.style.textShadow = "0 6px 18px #bde7fa99";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "#1976d2";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          {word}
          {idx !== t.headerMotto.length - 1 && (
            <span
              style={{
                fontSize: 26,
                color: "#0068b5",
                fontWeight: 900,
                margin: "0 12px",
                verticalAlign: "middle"
              }}
            >
              ●
            </span>
          )}
        </span>
      ))}
    </div>
    {/* 語言切換 */}
    <div>
      <LanguageSwitcher />
    </div>
  </div>



  {/* ==== B區塊：語言切換元件 ==== */}
  <div>
    <LanguageSwitcher />
  </div>
</div>






      <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>

        {/* Hero Section */}
        <section style={{ textAlign: "center", margin: "40px 0 24px" }}>
<h1
  style={{
    fontSize: 42,
    fontWeight: 800,
    margin: 0,
    background: "linear-gradient(90deg, #0068b5 10%, #53b9f7 90%)",
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    letterSpacing: "2px",
    transition: "letter-spacing 0.35s cubic-bezier(0.55,0,0.1,1), filter 0.25s",
    cursor: "pointer"
  }}
  onMouseOver={e => {
    e.currentTarget.style.letterSpacing = "7px";
    e.currentTarget.style.filter = "drop-shadow(0 0 12px #0068b5aa)";
  }}
  onMouseOut={e => {
    e.currentTarget.style.letterSpacing = "2px";
    e.currentTarget.style.filter = "none";
  }}
>
  {t.hero}
</h1>

          <p style={{ fontSize: 18, color: "#0068b5", marginBottom: 16 }}>
            {t.heroDesc}
          </p>
         <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
  <button
    onClick={() => setShowAbout(true)}
    style={{
      fontWeight: 700,
      fontSize: 18,
      padding: "12px 36px",
      borderRadius: 40,
      background: "linear-gradient(90deg, #2574e8, #6fd3fb)",
      color: "#fff",
      border: "none",
      boxShadow: "0 2px 10px 0 #bde7fa44",
      cursor: "pointer",
      marginRight: 6,
      transition: "filter 0.18s"
    }}
  >{t.about}</button>
  <button
    onClick={scrollToContact}
    style={{
      fontWeight: 700,
      fontSize: 18,
      padding: "12px 36px",
      borderRadius: 40,
      background: "#fff",
      color: "#2574e8",
      border: "2.5px solid #2995e7",
      boxShadow: "0 2px 10px 0 #bde7fa44",
      cursor: "pointer"
    }}
  >{t.contactLabel}</button>
</div>

        </section>

        {/* Services Section */}
        <section>
<h2
  style={{
    fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#0068b5",
    margin: "40px 0 24px 0",
    display: "flex",
    alignItems: "center",
    gap: 10
  }}
>
  <Star size={32} style={{ color: "#53b9f7", flexShrink: 0 }} />
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
  {t.advantageList.map((item, idx) => (
    <li
      key={idx}
      style={
        // 只針對包含 ISO 9001 那一條高亮可點
        item.includes("ISO 9001")
          ? { cursor: "pointer", color: "#2574e8", fontWeight: 600, textDecoration: "underline" }
          : {}
      }
      onClick={
        item.includes("ISO 9001")
          ? () => setShowCertModal(true)
          : undefined
      }
    >
      {item}
    </li>
  ))}
</ul>

        </section>

        {/* Why Choose Us Section */}
        <section>
        <h2
  style={{
    fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#0068b5",
    margin: "40px 0 24px 0",
    display: "flex",
    alignItems: "center",
    gap: 10
  }}
>
  <Zap size={32} style={{ color: "#2bbf8a", flexShrink: 0 }} />
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
    fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#0068b5",
    margin: "40px 0 24px 0",
    display: "flex",
    alignItems: "center",
    gap: 10
  }}
>
  <Award size={32} style={{ color: "#ff9f43", flexShrink: 0 }} />
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
{/* Contact Section：Apple 玻璃感 + 反光 + 聯絡資訊 */}

{/* 假設你上方已經有 const t = content[lang]; */}

<section
 ref={contactRef}
  style={{
    background: "rgba(255,255,255,0.28)",
    borderRadius: 32,
    boxShadow: "0 8px 40px 0 rgba(80,150,255,0.12)",
    margin: "64px 0 0",
    paddingTop: "30px",
    paddingBottom: "48px",
    paddingLeft: "60px",
    paddingRight: "60px",
    maxWidth: 960,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
    backdropFilter: "blur(36px) saturate(1.6)",
    WebkitBackdropFilter: "blur(36px) saturate(1.6)",
    border: "1.5px solid rgba(160,190,255,0.14)",
    position: "relative",
  }}
>


  <h2
    style={{
      display: "flex",
      alignItems: "center",
      fontSize: 24,
      fontWeight: 900,
      color: "#1976d2",
      marginBottom: 28,
      letterSpacing: 0.3
    }}
  >
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 30,
        borderRadius: 8,
        background: "linear-gradient(180deg, #2299ee 0%, #015eb8 100%)",
        marginRight: 16
      }}
    />
    {t.contactSection}
  </h2>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      rowGap: 18
    }}
  >
    {/* Email */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        color: "#2299ee", fontSize: 26, marginRight: 4
      }}>📧</span>
      <span style={{ minWidth: 82, color: "#22304a" }}>{t.email}</span>
      <a href="mailto:michelle@incubed-intl.com" style={{
        color: "#0068b5",
        fontWeight: 700,
        textDecoration: "underline",
        marginLeft: 8
      }}>
        michelle@incubed-intl.com
      </a>
    </div>
    {/* Line */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        color: "#2299ee", fontSize: 26, marginRight: 4
      }}>💬</span>
      <span style={{ minWidth: 82, color: "#22304a" }}>{t.line}</span>
      <span style={{
        color: "#1976d2",
        fontWeight: 700,
        marginLeft: 8
      }}>slr200k</span>
    </div>
    {/* Phone */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        color: "#2299ee", fontSize: 26, marginRight: 4
      }}>📞</span>
      <span style={{ minWidth: 82, color: "#22304a" }}>{t.phone}</span>
      <span style={{
        color: "#1976d2",
        fontWeight: 700,
        marginLeft: 8
      }}>+886-2-87919189</span>
    </div>
    {/* Address */}
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{
        color: "#2299ee", fontSize: 26, marginRight: 4
      }}>🏢</span>
      <span style={{ minWidth: 82, color: "#22304a" }}>{t.address}</span>
      <a
        href="https://www.google.com/maps/place/新北市新店區寶中路94號2樓之3"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0068b5",
          fontWeight: 700,
          textDecoration: "underline",
          marginLeft: 8
        }}
      >
        {t.addressDetail}
      </a>
    </div>
  </div>
</section>

      </div>

     {/* Footer Image */}
{/*<div style={{ width: "100%", maxHeight: 200, overflow: "hidden", marginTop: 40 }}>
  <img
    src="/footer_circuit_strip.png"
    alt="footer"
    style={{ width: "100%", objectFit: "cover" }}
  />
</div>
*/}
<footer
  style={{
    background: "#0c1b2a",
    color: "#bcc3d1",
    fontSize: 14,
    padding: "20px 12px",
    borderTop: "1.5px solid #28374c"
  }}
>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      marginBottom: 6
    }}
  >
    {/* LOGO with company name inside the image */}
    <img
      src="/logo-footer.png"
      alt="IN³ Cubed Logo"
      style={{
        height: 48,
        objectFit: "contain",
        filter: "brightness(1.1)"
      }}
    />

    <span style={{ fontWeight: 600 }}>IN Cubed International Co., Ltd.</span>
    <span>穎特力欣股份有限公司</span>
    <span>統一編號：96799025</span>
    <span>© 2024 All rights reserved.</span>
  </div>

  <div style={{ fontSize: 13, textAlign: "center", opacity: 0.78 }}>
    Address: 2F.-3, No. 94, Baozhong Rd., Xindian Dist., New Taipei City, Taiwan
  </div>
</footer>





      {/* About Modal */}
	  {/* 製造工廠認證 Modal */}
{showCertModal && (
  <div
    style={{
      position: "fixed",
      top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.23)", zIndex: 2100,
      display: "flex", alignItems: "center", justifyContent: "center"
    }}
    onClick={() => setShowCertModal(false)}
  >
    <div
      style={{
        background: "#fff", borderRadius: 24, padding: 38, maxWidth: 530, width: "92%", position: "relative",
        boxShadow: "0 8px 32px #2995e722"
      }}
      onClick={e => e.stopPropagation()}
    >
      <button
        style={{
          position: "absolute", top: 12, right: 18, background: "none", border: "none", fontSize: 23, cursor: "pointer"
        }}
        onClick={() => setShowCertModal(false)}
      >✕</button>
      <div style={{ fontWeight: 700, fontSize: 22, color: "#2574e8", marginBottom: 18 }}>
        {lang === "de"
          ? "Mehr zu ISO 45001 & QC080000"
          : lang === "es"
          ? "Más sobre ISO 45001 y QC080000"
          : lang === "jp"
          ? "ISO 45001・QC080000の詳細"
          : lang === "zh"
          ? "ISO 45001 與 QC080000 補充說明"
          : "More about ISO 45001 & QC080000"}
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.9, color: "#2b3554" }}>
        {lang === "de" ? (
          <>
            <b>ISO 45001:</b> gewährleistet nicht nur Sicherheit und Gesundheitsschutz am Arbeitsplatz, sondern zeigt auch unser starkes Engagement für das Wohlbefinden der Mitarbeiter und unsere soziale Verantwortung. Wir schaffen ein sicheres, ethisches und nachhaltiges Arbeitsumfeld – als zuverlässiger Partner für langfristige Zusammenarbeit.
            <br /><br />
            <b>QC080000:</b> steht nicht nur für die Einhaltung von Vorschriften, sondern für unser aktives Engagement im Bereich umweltfreundliche Produktion und Umweltschutz. Wir unterstützen unsere Kunden beim Aufbau einer verantwortungsvollen Lieferkette im Einklang mit globalen ESG-Zielen und Nachhaltigkeitsstandards.
          </>
        ) : lang === "es" ? (
          <>
            <b>ISO 45001:</b> garantiza no solo la seguridad y salud ocupacional, sino que también refleja nuestro profundo compromiso con el bienestar de los empleados y la responsabilidad social. Ofrecemos un entorno de trabajo seguro, ético y sostenible, lo que nos convierte en un socio confiable a largo plazo.
            <br /><br />
            <b>QC080000:</b> va más allá del cumplimiento: representa nuestro papel activo en la fabricación ecológica y la protección ambiental. Ayudamos a nuestros clientes a construir una cadena de suministro responsable alineada con los valores ESG y los objetivos de sostenibilidad global.
          </>
        ) : lang === "jp" ? (
          <>
            <b>ISO 45001：</b>は職場の安全と健康を確保するだけでなく、従業員の幸福と社会的責任に対する当社の深いコミットメントを示しています。安全で倫理的、持続可能な職場環境を提供し、信頼できる長期的なパートナーを目指します。
            <br /><br />
            <b>QC080000：</b>は法令遵守を超え、グリーン製造と環境保護への積極的な取り組みを象徴します。お客様がグローバルなESG価値観と持続可能性目標に沿った責任あるサプライチェーンを構築できるよう支援します。
          </>
        ) : lang === "zh" ? (
          <>
            <b>ISO 45001：</b>
            不僅保障職業安全與健康，更體現我們對員工福祉與社會責任的承諾。<br />
            我們致力於打造安全、倫理、永續的工作環境，成為值得信賴的長期夥伴。
            <br /><br />
            <b>QC080000：</b>
            不只是法規遵循，更代表我們主動參與綠色製造與環境保護。<br />
            協助客戶建立符合全球 ESG 永續目標的責任供應鏈。
          </>
        ) : (
          <>
            <b>ISO 45001:</b> Ensures not only occupational safety and health, but also reflects our deep commitment to employee well-being and social responsibility. We aim to provide a safe, ethical, and sustainable workplace, making us a trustworthy long-term partner.
            <br /><br />
            <b>QC080000:</b> Goes beyond compliance—representing our proactive role in green manufacturing and environmental protection. We help our clients build a responsible supply chain aligned with global ESG values and sustainability goals.
          </>
        )}
      </div>
    </div>
  </div>
)}



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
                        <h2
              style={{
                fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
                fontSize: 28,
                fontWeight: 900,
                color: "#0068b5", // Intel 藍
                letterSpacing: "0.5px",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 12
              }}
            >
              <span style={{
                display: "inline-block",
                fontSize: 23,
                marginRight: 4,
                verticalAlign: "middle"
              }}>★</span>
              {t.about}
            </h2>
            <p style={{
              fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
              color: "#344052",
              fontSize: 17,
              fontWeight: 400,
              lineHeight: 1.72,
              letterSpacing: 0.02
            }}>
              {t.aboutContent}
            </p>

          </div>
        </div>
      )}
    </div>
  );
}
