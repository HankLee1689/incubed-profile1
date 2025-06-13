// PersonalProfile.js

import React, { useState, useRef } from "react";
import { Mail, MessageCircle, Phone, Building, X, Globe } from "lucide-react";
import { Star, Award, Layers } from "lucide-react"; // 服務/優勢/專案區塊icon

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
      "Industrial-grade 15\" IK10 touch panel module with –30 °C to 85 °C operating temperature",
    ],
    advantages: "Why Choose Us",
    advantageList: [
      "Decades of industry expertise in embedded systems, industrial computing, and SoC integration",
      "Founder spearheaded three groundbreaking product lines with over 20 million units shipped globally",
      "End-to-end service: hardware layout, firmware & software integration, rigorous quality control, system optimization",
      "Rapid prototyping: prototypes delivered within three weeks, accelerating time-to-market",
      "Global reach: seamless communication across Asia, North America, and Europe, bridging cultural and technical gaps",
      "Customer-centric approach: transparent workflow, NDA protection, and dedicated project management for every client",
      "Trusted partners: ISO 9001, ISO 14001, ISO 45001, ISO 13485 and QC080000 certified manufacturing facilities ensure consistent quality",
             " → ISO 45001 ensures not only occupational safety and health, but also reflects our deep commitment to employee well-being and social responsibility. We aim to provide a safe, ethical, and sustainable workplace, making us a trustworthy long-term partner",
      "→ QC080000 goes beyond compliance — it represents our active role in green manufacturing and environmental protection. We help our clients build a responsible supply chain aligned with global ESG values and sustainability goals",
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
      "工業級 –30 °C 至 85 °C 操作溫度之 15\" IK10 觸控面板模組",
    ],
    advantages: "合作優勢",
    advantageList: [
      "擁有豐富的嵌入式系統、工業電腦與SoC整合領域經驗",
      "創辦人領導三款劃時代創新產品，全球累計出貨量超過兩千萬台",
      "全流程服務：硬體布局、韌體與軟體整合、嚴謹品質管控、系統優化",
      "快速原型開發：三週內完成原型，加速產品上市時程",
      "全球佈局：亞、美、歐無縫溝通，消除跨文化技術障礙",
      "值得信賴的夥伴：ISO 9001, ISO 14001, ISO 45001, ISO 13485, QC080000 認證工廠，品質穩定可控",
      "以客為尊：流程透明、完善NDA保護，以及專屬專案管理，確保客戶需求受重視且有效執行",
    ],
    contactSection: "聯絡方式",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "電話號碼",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3",
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
      "設計移管、部品表最適化、生産サポート",
    ],
    projects: "注目プロジェクト",
    projectList: [
      "PLC ボード – 米国 EV 充電器向け量産",
      "組込みマザーボードシステム統合",
      "USB-to-PHY レイヤー 2 MAC-to-MAC PLC ボード",
      "産業用ファンレス HMI 8 コアコントローラーボード (–40 ℃ ～ 85 ℃ 動作温度)",
      "産業用 15\" IK10 タッチパネルモジュール (–30 ℃ ～ 85 ℃ 動作温度)",
    ],
    advantages: "選ばれる理由",
    advantageList: [
      "組込みシステム、産業用コンピューティング、SoC 統合の豊富な経験",
      "創業者は 3 つの画期的な製品ラインを率い、世界で 2,000 万台以上を出荷",
      "エンドツーエンドサービス：ハードウェア設計、ファームウェア＆ソフトウェア統合、厳格な品質管理、システム最適化",
      "迅速な試作：プロトタイプを3週間で提供し、市場投入を加速",
      "グローバル対応：アジア、北米、欧州間のシームレスなコミュニケーション",
      "顧客中心：透明なワークフロー、NDA 保護、専任プロジェクト管理",
      "信頼できるパートナー：ISO 9001、ISO 14001、ISO 13485、ISO 45001、QC080000 認証工場",
      "→ ISO 45001 は製造現場での労働者の安全と健康を守るだけでなく、従業員の福祉と社会的責任に対する深い取り組みを表しています。私たちは、安全で倫理的かつ持続可能な職場環境を提供する信頼できるパートナーです",
      "→ QC080000 は単なる法規制の遵守にとどまらず、グリーン製造と環境保護への積極的な貢献を意味します。私たちは、グローバルな ESG価値観 や持続可能な目標に沿った責任あるサプライチェーンの構築を支援します",

    ],
    contactSection: "お問い合わせ",
    email: "メール",
    line: "Line ID",
    whatsapp: "電話番号",
    address: "住所",
    addressDetail: "新北市新店区寶中路94号2階之3",
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
      "Transferencia de diseño, optimización de la lista de materiales, soporte de producción",
    ],
    projects: "Proyectos Destacados",
    projectList: [
      "Tarjeta PLC – Producción en masa para cargadores EV en EE. UU.",
      "Integración de sistema de placa madre embebida",
      "Tarjeta PLC USB-a-PHY Capa 2 MAC-a-MAC",
      "Placa controladora HMI octa-core industrial sin ventilador con rango de temperatura de operación –40 °C a 85 °C",
      "Módulo de panel táctil IK10 de 15\" industrial con rango de temperatura de operación –30 °C a 85 °C",
    ],
    advantages: "Por Qué Elegirnos",
    advantageList: [
      "Décadas de experiencia en sistemas embebidos, computación industrial e integración de SoC",
      "El fundador lideró tres líneas de productos innovadores con más de 20 millones de unidades enviadas globalmente",
      "Servicio de extremo a extremo: diseño de hardware, integración de firmware y software, control de calidad riguroso, optimización de sistemas",
      "Prototipado rápido: prototipos entregados en 3 semanas, acelerando el tiempo de comercialización",
      "Alcance global: comunicación fluida entre Asia, Norteamérica y Europa",
      "Enfoque centrado en el cliente: flujo de trabajo transparente, protección de NDA y gestión de proyectos dedicada",
      "Socios de confianza: fábricas certificadas ISO 9001, ISO 14001, ISO 45001, QC080000  e ISO 13485",
    ],
    contactSection: "Póngase en Contacto",
    email: "Correo Electrónico",
    line: "ID de Line",
    whatsapp: "Teléfono",
    address: "Dirección",
    addressDetail: "2F-3, No. 94 Baozhong Rd, Distrito Xindian, Ciudad de Nuevo Taipéi",
  },
  de: {
    hero: "Stärkung des Next-Gen Embedded Designs",
    heroDesc: "Ihr Partner für Next-Gen Embedded Innovation",
    contactLabel: "Kontaktieren Sie uns",
    about: "Über IN Cubed",
    aboutContent: `IN Cubed International Co. Ltd wird von einem Team mit umfassender Erfahrung in Embedded-Systemen, Industriecomputerarchitekturen und SoC-Integration geleitet. Der Gründer war CEO und CTO eines börsennotierten Unternehmens und hat Hunderte von Projekten erfolgreich in die Massenproduktion geführt. Außerdem entwarf er drei bahnbrechende Produktlinien, die weltweit über 20 Millionen Einheiten auslieferten. Heute bietet IN Cubed End-to-End Embedded-Design-Services – von der Hardwaregestaltung über Firmware- und Softwareintegration bis hin zu strenger Qualitätskontrolle und Systemintegration und -optimierung – und hilft Kunden in den Bereichen industrielle Computertechnik, AIoT und EV-Ladung, schnell hochwertige Massenproduktionsziele zu erreichen.`,
    services: "Unsere Dienstleistungen",
    serviceList: [
      "Embedded-System-Design und Architektur",
      "Hochzuverlässige, massenproduktionsorientierte Design-Services",
      "Integration kundenspezifischer Lösungen: End-to-End Hardware-, Software- und Mechanikintegration",
      "Produktvalidierung, Debugging und Treiberintegration",
      "ID- und Mechanikdesign sowie Massenproduktion",
      "Projektmanagement und internationale Kommunikationsbrücke",
      "Design-Transfer, Stücklistenoptimierung, Produktionsunterstützung",
    ],
    projects: "Hervorgehobene Projekte",
    projectList: [
      "PLC-Platine – Massenproduktion für US-EV-Ladegeräte",
      "Embedded-Motherboard-Systemintegration",
      "USB-zu-PHY Layer 2 MAC-zu-MAC PLC-Platine",
      "Industriefähige lüfterlose HMI-Oktacore-Controller-Platine mit –40 °C bis 85 °C Betriebstemperatur",
      "Industriefähiges 15\" IK10 Touchpanel-Modul mit –30 °C bis 85 °C Betriebstemperatur",
    ],
    advantages: "Warum Uns Wählen",
    advantageList: [
      "Jahrzehntelange Erfahrung in Embedded-Systemen, Industriecomputertechnik und SoC-Integration",
      "Der Gründer leitete drei bahnbrechende Produktlinien mit über 20 Millionen weltweit ausgelieferten Einheiten",
      "End-to-End-Service: Hardware-Design, Firmware- & Softwareintegration, strenge Qualitätskontrolle, Systemoptimierung",
      "Schnelles Prototyping: Prototypen in 3 Wochen, Beschleunigung der Markteinführung",
      "Globale Reichweite: nahtlose Kommunikation zwischen Asien, Nordamerika und Europa",
      "Kundenorientierung: Transparente Arbeitsabläufe, NDA-Schutz und dediziertes Projektmanagement",
      "Vertrauenswürdige Partner: ISO 9001, ISO 14001, ISO 45001, QC080000 und ISO 13485 zertifizierte Fertigungsstätten",
            " → ISO 45001 gewährleistet nicht nur Sicherheit und Gesundheitsschutz am Arbeitsplatz, sondern zeigt auch unser starkes Engagement für das Wohlbefinden der Mitarbeiter und unsere soziale Verantwortung. Wir schaffen ein sicheres, ethisches und nachhaltiges Arbeitsumfeld – als zuverlässiger Partner für langfristige Zusammenarbeit",
      "→ QC080000 steht nicht nur für die Einhaltung von Vorschriften, sondern für unser aktives Engagement im Bereich umweltfreundliche Produktion und Umweltschutz. Wir unterstützen unsere Kunden beim Aufbau einer verantwortungsvollen Lieferkette im Einklang mit globalen ESG-Zielen und Nachhaltigkeitsstandards",
    ],
    contactSection: "Kontakt aufnehmen",
    email: "E-Mail",
    line: "Line ID",
    whatsapp: "Telefon",
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
  const contactRef = useRef(null);

  const t = content[lang];

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

const LanguageSwitcher = () => (
  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: 8, gap: 6 }}>
    <Globe size={24} style={{ color: "#2574e8" }} />
    <select
      value={lang}
      onChange={e => setLang(e.target.value)}
      style={{
        borderRadius: 14,
        border: "2px solid #2995e7",
        fontSize: 20,
        fontWeight: 700,
        padding: "8px 34px 8px 16px",
        color: "#1d407a",
        background: "#fff url('data:image/svg+xml;utf8,<svg fill=\"%232974e7\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>') no-repeat right 10px center/18px 18px",
        appearance: "none",
        minWidth: 78,
        outline: "none",
        cursor: "pointer"
      }}
    >
      <option value="en">EN</option>
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
    gap: 12
  }}
>
  <Star size={32} style={{ color: "#53b9f7", flexShrink: 0 }} />
  Our Services
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
    fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#0068b5",
    margin: "40px 0 24px 0",
    display: "flex",
    alignItems: "center",
    gap: 12
  }}
>
  <Award size={32} style={{ color: "#53b9f7", flexShrink: 0 }} />
  Why Choose Us
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
    gap: 12
  }}
>
  <Layers size={32} style={{ color: "#53b9f7", flexShrink: 0 }} />
  Highlighted Projects
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
// 假設你有 lang 狀態, 例如 const [lang, setLang] = useState("en")
const t = {
  contactTitle: lang === "en" ? "Get in Touch" : "聯絡方式",
  email: lang === "en" ? "Email" : "電子郵件",
  phone: lang === "en" ? "Phone Number" : "電話號碼",
  line: lang === "en" ? "Line ID" : "Line ID",
  address: lang === "en" ? "Address" : "地址"
}

{/* 假設你上方已經有 const t = content[lang]; */}

<section
  style={{
    background: "rgba(255,255,255,0.82)",
    borderRadius: 20,
    boxShadow: "0 6px 40px 0 rgba(32,120,220,0.11)",
    margin: "56px 0 0",
    padding: "38px 46px 32px 36px",
    maxWidth: 930,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    fontFamily: '"Inter", "Roboto", "Arial", "Helvetica Neue", Helvetica, sans-serif',
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,0.21)",
    position: "relative"
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
      <div style={{ width: "100%", maxHeight: 200, overflow: "hidden", marginTop: 40 }}>
        <img
          src="/footer_circuit_strip.png"
          alt="footer"
          style={{ width: "100%", objectFit: "cover" }}
        />
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
