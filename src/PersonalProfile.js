
import React from "react";

export default function PersonalProfile() {
  return (
    <div style={{ padding: 32, maxWidth: 900, margin: 'auto', fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 36, fontWeight: 'bold' }}>Empowering Next-Gen Embedded Design</h1>
        <p style={{ fontSize: 20, color: '#666' }}>打造次世代嵌入式設計的核心夥伴</p>
        <button style={{ marginTop: 24, fontSize: 18, padding: '12px 28px', borderRadius: 6, background: '#0066d6', color: '#fff', border: 'none' }}>聯絡我 / Contact</button>
      </section>
      {/* About Me */}
      <section>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>關於我 / About Me</h2>
        <p>
          我是 IN Cubed 的創辦人，曾任上市公司總經理與 CTO，早年於 SiS 主導主機板開發，累計全球量產超過 2500 萬片。
          精通嵌入式系統設計、工控產品開發、SoC 整合與跨國專案執行，現專注提供穩定高效的設計解決方案，協助客戶快速實現產品量產。
        </p>
      </section>
      {/* Services */}
      <section>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>專業服務 / Services</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>嵌入式硬體設計（主機板、載板、轉接模組）</li>
          <li>產品預驗證與除錯（EMI、ESD、驅動整合）</li>
          <li>中英雙語專案管理與國際溝通橋接</li>
          <li>設計移轉、BOM 優化與量產技術支援</li>
        </ul>
      </section>
      {/* Projects */}
      <section>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>成功案例 / Projects</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>PLC Board – 已成功量產應用於美國 EV 充電設備</li>
          <li>嵌入式主機板設計整合</li>
          <li>USB to PHY Layer2 MAC-to-MAC PLC Board</li>
          <li>工業級 HMI Octa-core 控制板</li>
          <li>工業級 15 inch Touch Panel Module</li>
        </ul>
      </section>
      {/* Advantages */}
      <section>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>合作優勢 / Why Work With Me</h2>
        <ul style={{ paddingLeft: 20 }}>
          <li>設計交期快速，最短可於三週內完成出樣</li>
          <li>專案流程透明，具備完整合約與保密制度</li>
          <li>技術橫跨硬體、韌體、軟體、驅動與系統整合</li>
          <li>熟悉歐美與亞洲市場需求，溝通無障礙</li>
        </ul>
      </section>
      {/* Contact */}
      <section style={{ textAlign: 'center', marginTop: 36 }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>聯絡我 / Contact</h2>
        <p>Email: <a href="mailto:david_h@incubed-intl.com" style={{ color: '#0066d6' }}>david_h@incubed-intl.com</a></p>
        <p>Line ID: slr200k</p>
        <p>WhatsApp: +886937080529</p>
        <p>地址：新北市新店區寶中路94號2樓之3</p>
      </section>
    </div>
  );
}
