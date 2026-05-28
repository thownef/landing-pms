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

  // Footer
  footer: {
    companyName: { vi: "Phúc Mỹ Sơn", en: "Phuc My Son" },
    companyTagline: { vi: "Tư vấn xây dựng & năng lượng", en: "Construction & Energy Consulting" },
    companyDescription: {
      vi: "Trải qua hơn 20 năm trưởng thành bền vững, PMS TCC đồng hành cùng chủ đầu tư và đối tác trong các dịch vụ tư vấn xây dựng, giám sát, quản lý dự án và thí nghiệm kiểm tra chất lượng công trình.",
      en: "With over 20 years of sustainable growth, PMS TCC partners with investors and clients in construction consulting, supervision, project management, and quality testing services.",
    },
    motto: { vi: "XÂY VỮNG NIỀM TIN - DỰNG UY TÍN VÀNG", en: "BUILDING TRUST - ESTABLISHING GOLDEN REPUTATION" },
    legalInfo: { vi: "Thông tin pháp lý", en: "Legal Information" },
    businessName: { vi: "Tên doanh nghiệp:", en: "Business Name:" },
    businessNameValue: { vi: "CTCP TVXD TM Phúc Mỹ Sơn", en: "Phuc My Son Construction & Trading Consulting JSC" },
    taxCode: { vi: "Mã số thuế:", en: "Tax Code:" },
    yearEstablished: { vi: "Năm thành lập:", en: "Year Established:" },
    mainField: { vi: "Lĩnh vực chính:", en: "Main Field:" },
    mainFieldValue: { vi: "Tư vấn xây dựng & thí nghiệm", en: "Construction Consulting & Testing" },
    labCode: { vi: "Mã phòng thí nghiệm:", en: "Laboratory Code:" },
    operatingAddress: { vi: "Địa chỉ tác nghiệp", en: "Operating Address" },
    headquarters: { vi: "Trụ sở chính:", en: "Headquarters:" },
    headquartersAddress: { vi: "28 đường số 16, Khu phố 5, P. Hiệp Bình, TP.HCM", en: "28 Street No. 16, Quarter 5, Hiep Binh Ward, HCMC" },
    laboratory: { vi: "Phòng thí nghiệm:", en: "Laboratory:" },
    laboratoryAddress: { vi: "5D/5, Khu phố Đồng An 1, Phường Bình Hòa, TP.HCM", en: "5D/5, Dong An 1 Quarter, Binh Hoa Ward, HCMC" },
    contactInfo: { vi: "Liên hệ:", en: "Contact:" },
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
