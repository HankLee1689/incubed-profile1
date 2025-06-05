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
    bannerAlt: "Advanced circuit system design with high-tech style",
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
      "擁有 ISO 9001、ISO 14001、ISO 13485 認證工廠",
    ],
    contactSection: "聯絡我",
    email: "電子郵件",
    line: "Line ID",
    whatsapp: "WhatsApp",
    address: "地址",
    addressDetail: "新北市新店區寶中路94號2樓之3",
    bannerAlt: "高科技感複雜線路系統設計圖",
  },
};

export default function PersonalProfile() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  // 這裡預設先用一個示意圖網址，稍後給你AI生圖下載
  const bannerUrl = "/circuit-banner-ai.jpg"; // 你收到圖後放 public 資料夾即可

  return (
    <div
      className="min-h-screen p-8 space-y-12 max-w-5xl mx-auto"
      style={{
        background:
          "linear-gradient(135deg, #090E24 0%, #23267A 50%, #3F51B5 100%)",
      }}
    >
      {/* 語言切換按鈕 */}
      <div className="flex justify-end space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded ${lang === "en" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setLang("en")}
          disabled={lang === "en"}
        >
          EN
        </button>
        <button
          className={`px-4 py-2 rounded ${lang === "zh" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setLang("zh")}
          disabled={lang === "zh"}
        >
          中文
        </button>
      </div>
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white drop-shadow">{t.hero}</h1>
        <p className="text-xl text-blue-200">{t.heroDesc}</p>
        <button className="mt-4 text-lg bg-blue-500 text-white px-6 py-2 rounded shadow">{t.contact}</button>
      </section>
      {/* About Me */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">{t.about}</h2>
        <p className="text-blue-100">{t.aboutContent}</p>
      </section>
      {/* Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">{t.services}</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-100">
          {t.serviceList.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>
      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">{t.projects}</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-100">
          {t.projectList.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>
      {/* Advantages */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-white">{t.advantages}</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-100">
          {t.advantageList.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </section>
      {/* Contact */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">{t.contactSection}</h2>
        <p className="text-blue-100">
          {t.email}: <a href="mailto:david_h@incubed-intl.com" className="text-blue-300 underline">david_h@incubed-intl.com</a>
        </p>
        <p className="text-blue-100">{t.line}: slr200k</p>
        <p className="text-blue-100">{t.whatsapp}: +886937080529</p>
        <p className="text-blue-100">{t.address}：{t.addressDetail}</p>
      </section>
      {/* High-tech Banner at the bottom */}
      <section className="w-full mt-10">
        <img
          src={bannerUrl}
          alt={t.bannerAlt}
          style={{
            width: "100%",
            maxHeight: 300,
            objectFit: "cover",
            borderRadius: "2rem",
            boxShadow: "0 8px 32px 0 rgba(44,88,160,0.3)",
            margin: "0 auto",
          }}
        />
      </section>
    </div>
  );
}
