export const translations = {
  // Header Navigation
  nav: {
    home: { vi: "Trang chủ", en: "Home" },
    aboutUs: { vi: "Về chúng tôi", en: "About Us" },
    services: { vi: "Dịch vụ", en: "Services" },
    projects: { vi: "Dự án", en: "Projects" },
    news: { vi: "Tin tức", en: "News" },
    careers: { vi: "Tuyển dụng", en: "Careers" },
    contact: { vi: "Liên hệ", en: "Contact" },
  },

  // About Us Submenu
  aboutSubmenu: {
    overview: { vi: "Tổng quan", en: "Overview" },
    leadershipMessage: { vi: "Thông điệp ban lãnh đạo", en: "Leadership Message" },
    visionValues: { vi: "Tầm nhìn, giá trị cốt lõi", en: "Vision & Core Values" },
    leadership: { vi: "Ban lãnh đạo", en: "Leadership" },
    clientsPartners: { vi: "Khách hàng và đối tác", en: "Clients & Partners" },
    companyProfile: { vi: "Hồ sơ năng lực", en: "Company Profile" },
  },

  // Header
  header: {
    tagline: { vi: "Tư vấn xây dựng & năng lượng", en: "Construction & Energy Consulting" },
    contactNow: { vi: "Liên hệ ngay", en: "Contact Us" },
  },

  // Services - Design Tab
  servicesDesign: {
    title: { vi: "Tư vấn Thiết kế, Thẩm tra & Quản lý dự án", en: "Design Consulting, Technical Appraisal & Project Management" },
    description: {
      vi: "Phân viện thiết kế xây dựng công trình của PMS TCC chuyên nhận thiết kế kỹ thuật, lập dự án cơ sở pháp lý, thẩm tra biện pháp tổ chức thi công móng siêu tải trọng cho thiết bị xoay và tháp nâng áp.",
      en: "PMS TCC's construction design division provides technical design, legally compliant project dossiers, and appraisal of construction methods for ultra-heavy foundations, rotating equipment supports, and step-up transformer structures.",
    },
    noticeTitle: { vi: "THÔNG BÁO TỪ HỆ THỐNG PMS-TCC CẬP NHẬT 2026:", en: "NOTICE FROM THE PMS-TCC SYSTEM - 2026 UPDATE:" },
    noticeQuote: {
      vi: "Kinh nghiệm: Gửi bảng kê, thông tin và hình ảnh sau",
      en: "Experience records: project lists, information, and images will be provided later",
    },
    noticeDescription: {
      vi: "Hiện bộ phận kỹ sư thiết kế móng gá đang tổng hợp dữ liệu bản vẽ CAD chi tiết và danh mục dự án thẩm tra bệ tháo tủ dầu điện lực. Hệ thống sẽ tự động cập nhật ngay khi thông tin bổ sung được phê chuẩn chính thức!",
      en: "The foundation design engineering team is consolidating detailed CAD drawing data and the project portfolio for power equipment foundation appraisal. The system will update automatically once the additional information is officially approved.",
    },
    tagPileDrawings: { vi: "Bản vẽ kết cấu cọc", en: "Pile structural drawings" },
    tagMethodStatement: { vi: "Thẩm tra biện pháp tổ chức thi công (BPTC)", en: "Construction method statement appraisal (CMS)" },
    tagEpcDossier: { vi: "Hồ sơ giao thầu EPC", en: "EPC tender documentation" },
  },

} as const;

export type Language = "vi" | "en";
export type TranslationNamespace = keyof typeof translations;
export type TranslationPath = {
  [Namespace in TranslationNamespace]: `${Namespace}.${Extract<keyof (typeof translations)[Namespace], string>}`;
}[TranslationNamespace];

export function getTranslation(path: TranslationPath, language: Language) {
  const [namespace, key] = path.split(".") as [TranslationNamespace, string];
  const namespaceTranslations = translations[namespace] as Record<string, Record<Language, string>>;

  return namespaceTranslations[key]?.[language] ?? "";
}
