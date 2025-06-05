// siteContent.js
// 穎特力欣股份有限公司網站架構與雙語內容

const siteContent = {
  home: {
    title: {
      en: "Home",
      zh: "首頁"
    },
    sections: {
      overview: {
        en: "Introduction, Highlights, and Value Proposition",
        zh: "簡介、亮點與價值主張"
      },
      slogan: {
        en: "Company Tagline and Main Visual",
        zh: "公司標語與主視覺"
      },
      news: {
        en: "Latest News / Updates",
        zh: "最新消息/動態"
      },
      strengths: {
        en: "Our Advantages (Technical Expertise, Team, Global Collaboration)",
        zh: "我們的優勢（技術實力、團隊、全球合作）"
      },
      quickContact: {
        en: "Quick Contact Button",
        zh: "快速聯絡按鈕"
      }
    }
  },

  aboutUs: {
    title: {
      en: "About Us",
      zh: "關於我們"
    },
    sections: {
      background: {
        en: "Company Background and Vision",
        zh: "公司背景與願景"
      },
      overview: {
        en: "Company Overview",
        zh: "公司簡介"
      },
      team: {
        en: "Founders / Core Team Introduction",
        zh: "創辦人/核心團隊介紹"
      },
      milestones: {
        en: "Development History and Milestones",
        zh: "發展歷程與里程碑"
      },
      mission: {
        en: "Mission & Vision",
        zh: "企業願景與使命"
      }
    }
  },

  services: {
    title: {
      en: "Services",
      zh: "服務項目"
    },
    description: {
      en: "IN Cubed International offers the following professional services (each service can have its own page or use expandable cards).",
      zh: "IN Cubed International 提供的專業服務（每一項服務都可有獨立分頁，或用展開卡片顯示）。"
    },
    list: [
      {
        key: "embeddedHardware",
        title: {
          en: "Embedded Hardware Design",
          zh: "嵌入式硬體設計"
        },
        details: {
          en: [
            "Design of motherboards, carriers, adapters",
            "Industrial / Medical / Automation–specific designs",
            "High reliability, mass-production–oriented design services",
            "PCB Layout, rapid prototyping and small-volume runs"
          ],
          zh: [
            "主機板、載板、適配器設計",
            "工業/醫療/自動化專用設計",
            "高可靠度、量產導向設計服務",
            "PCB Layout、原型打樣與小量產"
          ]
        }
      },
      {
        key: "systemIntegration",
        title: {
          en: "System Integration & Project Management",
          zh: "系統整合與專案管理"
        },
        details: {
          en: [
            "Custom solution integration",
            "End-to-end hardware, software, mechanical integration",
            "Large-scale international project management (from planning to delivery)",
            "BOM / Supply-chain management, validation process management"
          ],
          zh: [
            "客製化方案整合",
            "硬體、軟體、機構件一站式整合",
            "大型跨國專案管理（從規劃到交付）",
            "BOM/供應鏈管理、驗證流程管理"
          ]
        }
      },
      {
        key: "hwSwCodesign",
        title: {
          en: "Hardware-Software Co-design",
          zh: "軟硬整合解決方案"
        },
        details: {
          en: [
            "Driver / Firmware / OS adaptation",
            "Cloud / Edge computing integration solutions",
            "AIoT, Smart Terminal application development",
            "Industrial / Communication protocol customization support"
          ],
          zh: [
            "驅動程式/韌體/作業系統適配",
            "雲端/邊緣計算整合方案",
            "AIoT、智慧終端應用開發",
            "工控/通訊協定客製化支援"
          ]
        }
      },
      {
        key: "massProduction",
        title: {
          en: "Mass Production Consulting & Technical Support",
          zh: "量產顧問與技術支持"
        },
        details: {
          en: [
            "Production line setup / Manufacturing-test architecture planning",
            "DFM / DFT design optimization",
            "Rapid troubleshooting in early-stage mass production",
            "International compliance / certification guidance"
          ],
          zh: [
            "產線導入/生產測試架構規劃",
            "DFM/DFT 設計最佳化",
            "量產初期異常快速解決",
            "國際安規/驗證輔導"
          ]
        }
      },
      {
        key: "productDevelopment",
        title: {
          en: "Product Development & IP Consulting",
          zh: "產品開發與專利諮詢"
        },
        details: {
          en: [
            "New product planning and design evaluation",
            "Technical documentation & product manual writing",
            "Patent strategy / Innovation technology consulting",
            "Market-driven rapid MVP validation"
          ],
          zh: [
            "新產品規劃與設計評估",
            "技術文件與產品手冊撰寫",
            "專利佈局/創新技術諮詢",
            "市場導向快速 MVP 驗證"
          ]
        }
      },
      {
        key: "internationalBiz",
        title: {
          en: "International Business Development & Local Representation",
          zh: "國際業務拓展與在地代理"
        },
        details: {
          en: [
            "International market analysis & entry strategy",
            "Overseas representation and on-site customer service",
            "Cross-border communication coordination & project execution",
            "Technical and commercial bilingual support"
          ],
          zh: [
            "國際市場分析與進入策略",
            "海外代理、當地客戶服務",
            "跨國溝通協調與專案推進",
            "技術與商務雙語服務"
          ]
        }
      }
    ]
  },

  caseStudies: {
    title: {
      en: "Case Studies / Projects",
      zh: "成功案例"
    },
    description: {
      en: "Show concrete problem-solving examples, collaboration cases, and results.",
      zh: "具體展示解決過的痛點、合作案例與成果。"
    },
    categories: {
      en: ["Healthcare", "Industrial", "AIoT", "Energy"],
      zh: ["醫療", "工業", "AIoT", "能源"]
    },
    feedback: {
      en: "Client Testimonials",
      zh: "客戶回饋"
    },
    techBreakthrough: {
      en: "Technology Breakthrough Stories",
      zh: "技術突破故事"
    }
  },

  contact: {
    title: {
      en: "Contact Us",
      zh: "聯絡我們"
    },
    sections: {
      form: {
        en: "Online Inquiry Form",
        zh: "線上表單"
      },
      info: {
        en: "Company Email / Phone / LINE / Teams",
        zh: "公司 Email / 電話 / LINE / Teams"
      },
      map: {
        en: "Google Map Embed",
        zh: "Google Map 地址嵌入"
      },
      downloads: {
        en: "Downloadable Company Profile / Product Brochure (PDF)",
        zh: "下載型公司簡介/產品型錄（PDF）"
      }
    }
  },

  resources: {
    title: {
      en: "Resources / Blog",
      zh: "資源專區"
    },
    sections: {
      industryNews: {
        en: "Industry Insights & Perspectives",
        zh: "產業動態/觀點"
      },
      whitepapers: {
        en: "Product Whitepapers",
        zh: "產品白皮書"
      },
      faq: {
        en: "FAQ / Technical Support Documents",
        zh: "FAQ/技術支援文件"
      },
      downloadCenter: {
        en: "Download Center",
        zh: "下載中心"
      }
    }
  }
};

// 導出 siteContent，供其他模組或頁面引用
export default siteContent;
