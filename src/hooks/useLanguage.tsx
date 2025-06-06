import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { defaultLanguage, Language, languages } from "@/data/languages";

// Translation data
import { pillarsOfIslam } from "@/data/pillarsOfIslam";
import { prophets } from "@/data/prophets";
import { quranChapters } from "@/data/quranChapters";
import { islamicHistory } from "@/data/islamicHistory";
import { questions } from "@/data/questions";

// Common translations
interface CommonTranslations {
  [key: string]: {
    [langCode: string]: string;
  };
}

const commonTranslations: CommonTranslations = {
  siteName: {
    en: "Islamic Pathways",
    hi: "इस्लामिक पाथवेज़",
    ur: "اسلامک پاتھویز",
    ar: "مسارات إسلامية"
  },
  home: {
    en: "Home",
    hi: "होम",
    ur: "ہوم",
    ar: "الرئيسية"
  },
  learn: {
    en: "Learn",
    hi: "सीखें",
    ur: "سیکھیں",
    ar: "تعلم"
  },
  quran: {
    en: "Quran",
    hi: "क़ुरआन",
    ur: "قرآن",
    ar: "القرآن"
  },
  prophets: {
    en: "Prophets",
    hi: "पैगंबर",
    ur: "انبیاء",
    ar: "الأنبياء"
  },
  history: {
    en: "History",
    hi: "इतिहास",
    ur: "تاریخ",
    ar: "التاريخ"
  },
  questions: {
    en: "Q&A",
    hi: "सवाल-जवाब",
    ur: "سوالات و جوابات",
    ar: "أسئلة وأجوبة"
  },
  broadcast: {
    en: "Broadcast",
    hi: "प्रसारण",
    ur: "نشریات",
    ar: "البث"
  },
  recentBroadcast: {
    en: "Recent Broadcast",
    hi: "हालिया प्रसारण",
    ur: "حالیہ نشریات",
    ar: "البث الأخير"
  },
  featuredBroadcast: {
    en: "Featured Broadcast",
    hi: "विशेष प्रसारण",
    ur: "نمایاں نشریات",
    ar: "البث المميز"
  },
  allBroadcasts: {
    en: "All Broadcasts",
    hi: "सभी प्रसारण",
    ur: "تمام نشریات",
    ar: "جميع البث"
  },
  watchFull: {
    en: "Watch Full Video",
    hi: "पूरा वीडियो देखें",
    ur: "مکمل ویڈیو دیکھیں",
    ar: "شاهد الفيديو كاملاً"
  },
  broadcastTitle1: {
    en: "Understanding the Teachings of Islam",
    hi: "इस्लाम की शिक्षाओं को समझना",
    ur: "اسلام کی تعلیمات کو سمجھنا",
    ar: "فهم تعاليم الإسلام"
  },
  broadcastTitle2: {
    en: "The History and Significance of Islamic Prayers",
    hi: "इस्लामिक प्रार्थना��ं का इतिहास और महत्व",
    ur: "اسلامی نمازوں کی تاریخ اور اہمیت",
    ar: "تاريخ وأهمية الصلوات الإسلامية"
  },
  broadcastDescription1: {
    en: "An in-depth exploration of the core teachings of Islam and their relevance in today's world.",
    hi: "इस्लाम की मूल शिक्षाओं और आज के संसार में उनकी प्रासंगिकता का गहन अन्वेषण।",
    ur: "اسلام کی بنیادی تعلیمات اور آج کی دنیا میں ان کی موزونیت کا گہرا جائزہ۔",
    ar: "استكشاف متعمق للتعاليم الأساسية للإسلام وأهميتها في عالم اليوم."
  },
  broadcastDescription2: {
    en: "Learn about the historical context and proper practices of Islamic prayers in this educational broadcast.",
    hi: "इस शैक्षिक प्रसारण में इस्ल��मिक प्रार्थनाओं के ऐतिहासिक संदर्भ और उचित प्रथाओं के बारे में जानें।",
    ur: "اس تعلیمی نشریے میں اسلامی نمازوں کے تاریخی تناظر اور مناسب طریقوں کے بارے میں جانیں۔",
    ar: "تعرف على السياق التاريخي والممارسات الصحيحة للصلوات الإسلامية في هذا البث التعليمي."
  },
  broadcastShortTitle: {
    en: "Islamic Broadcast",
    hi: "इस्लामिक प्रसारण",
    ur: "اسلامی نشریات",
    ar: "البث الإسلامي"
  },
  broadcastDate: {
    en: "April 2025",
    hi: "अप्रैल 2025",
    ur: "اپریل 2025",
    ar: "أبريل 2025"
  },
  pillarsOfIslam: {
    en: "Pillars of Islam",
    hi: "इस्लाम के स्तंभ",
    ur: "اسلام کے ستون",
    ar: "أركان الإسلام"
  },
  welcomeMessage: {
    en: "Welcome to Islamic Pathways",
    hi: "इस्लामिक पाथवेज़ में आपका स्वागत है",
    ur: "اسلامک پاتھویز میں خوش آمدید",
    ar: "مرحبًا بكم في مسارات إسلامية"
  },
  exploreMessage: {
    en: "Explore the beauty and wisdom of Islam",
    hi: "इस्लाम की सुंदरता और ज्ञान का अन्वेषण करें",
    ur: "اسلام کی خوبصورتی اور حکمت کا استکشاف کریں",
    ar: "استكشف جمال وحكمة الإسلام"
  },
  startLearning: {
    en: "Start Learning",
    hi: "सीखना शुरू करें",
    ur: "سیکھنا شروع کریں",
    ar: "ابدأ التعلم"
  },
  exploreQuran: {
    en: "Explore Quran",
    hi: "क़ुरआन का अन्वेषण करें",
    ur: "قرآن کا مطالعہ کریں",
    ar: "استكشف القرآن"
  },
  learnMore: {
    en: "Learn More",
    hi: "और जानें",
    ur: "مزید جانیں",
    ar: "تعلم المزيد"
  },
  quickLinks: {
    en: "Quick Links",
    hi: "त्वरित लिंक",
    ur: "فوری لنکس",
    ar: "روابط سريعة"
  },
  moreResources: {
    en: "More Resources",
    hi: "अधिक संसाधन",
    ur: "مزید وسائل",
    ar: "المزيد من الموارد"
  },
  footerDescription: {
    en: "Providing education about Islamic teachings, history, and practices in an accessible way for all.",
    hi: "इस्लामिक शिक्षाओं, इतिहास और प्रथाओं के बारे में शिक्षा सभी के लिए सुलभ तरीके से प्रदान करना।",
    ur: "اسلامی تعلیمات، تاریخ اور طریقوں کے بارے میں تعلیم سب کے لیے قابل رسائی انداز میں فراہم کرنا۔",
    ar: "توفير التعليم حول التعاليم الإسلامية والتاريخ والممارسات بطريقة يسهل الوصول إليها للجميع."
  },
  rightsReserved: {
    en: "All rights reserved.",
    hi: "सर्वाधिकार सुरक्षित।",
    ur: "جملہ حقوق محفوظ ہیں۔",
    ar: "جميع الحقوق محفوظة."
  },
  themesAndLessons: {
    en: "Themes & Lessons",
    hi: "विषय और सबक",
    ur: "موضوعات اور اسباق",
    ar: "المواضيع والدروس"
  },
  benefits: {
    en: "Benefits",
    hi: "लाभ",
    ur: "فوائد",
    ar: "الفوائد"
  },
  howTo: {
    en: "How To Practice",
    hi: "कैसे अभ्यास करें",
    ur: "کیسے عمل کریں",
    ar: "كيفية الممارسة"
  },
  keyEvents: {
    en: "Key Events",
    hi: "प्रमुख घटनाएँ",
    ur: "اہم واقعات",
    ar: "أحداث رئيسية"
  },
  significance: {
    en: "Significance",
    hi: "महत्व",
    ur: "اہمیت",
    ar: "الأهمية"
  },
  allahTitle: {
    en: "Allah (God)",
    hi: "अल्लाह (ईश्वर)",
    ur: "اللہ (خدا)",
    ar: "الله"
  },
  allahDescription: {
    en: "The One True God, Creator and Sustainer of all existence",
    hi: "एक सच्चा ईश्वर, सभी अस्तित्व का निर्माता और पालनकर्ता",
    ur: "ایک سچا خدا، تمام موجودات کا خالق اور پالنے والا",
    ar: "الإله الحق الواحد، خالق ومدبر كل الوجود"
  },
  muhammadTitle: {
    en: "Prophet Muhammad (PBUH)",
    hi: "पैगंबर मुहम्मद (PBUH)",
    ur: "حضرت محمد (ﷺ)",
    ar: "النبي محمد (ﷺ)"
  },
  muhammadDescription: {
    en: "The final messenger of Allah, who received the revelation of the Quran",
    hi: "अल्लाह के अंतिम संदेशवाहक, जिन्होंने क़ुरआन का रहस्योद्घाटन प्राप्त किया",
    ur: "اللہ کے آخری پیغمبر، جنہوں نے قرآن کی وحی حاصل کی",
    ar: "الرسول الأخير لله، الذي تلقى وحي القرآن"
  },
  chatbot: {
    en: "Islamic Assistant",
    hi: "इस्लामिक सहायक",
    ur: "اسلامی اسسٹنٹ",
    ar: "المساعد الإسلامي"
  },
  askChatbot: {
    en: "Ask About Islam",
    hi: "इस्लाम के बारे में पूछें",
    ur: "اسلام کے بارے میں پوچھیں",
    ar: "اسأل عن الإسلام"
  },
  chatbotDescription: {
    en: "Get answers about Islamic teachings, history and practices",
    hi: "इस्लामिक शिक्षाओं, इतिहास और प्रथाओं के बारे में जवाब प्राप्त करें",
    ur: "اسلامی تعلیمات، تاریخ اور طریقوں کے بارے میں جوابات حاصل کریں",
    ar: "احصل على إجابات حول التعاليم الإسلامية والتاريخ والممارسات"
  }
};

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (langCode: string) => void;
  t: (key: string) => string;
  getContent: <T>(items: { id: string | number; translations: { [langCode: string]: T } }[], id: string | number) => T | null;
  getDirection: () => "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get the language from localStorage, otherwise use default
    const savedLanguage = localStorage.getItem("language");
    return savedLanguage || defaultLanguage;
  });

  useEffect(() => {
    // Save the language preference to localStorage
    localStorage.setItem("language", currentLanguage);
    
    // Set the document direction based on language
    const lang = languages.find(l => l.code === currentLanguage);
    if (lang) {
      document.documentElement.dir = lang.direction;
      document.documentElement.lang = lang.code;
      
      // Add language-specific class for font changes
      document.body.classList.remove("lang-ar", "lang-ur");
      if (lang.code === "ar") {
        document.body.classList.add("lang-ar");
      } else if (lang.code === "ur") {
        document.body.classList.add("lang-ur");
      }
    }
  }, [currentLanguage]);

  const changeLanguage = (langCode: string) => {
    if (languages.some(lang => lang.code === langCode)) {
      setCurrentLanguage(langCode);
    }
  };

  const t = (key: string): string => {
    if (commonTranslations[key] && commonTranslations[key][currentLanguage]) {
      return commonTranslations[key][currentLanguage];
    }
    
    // Fallback to English if translation not found
    if (commonTranslations[key] && commonTranslations[key]["en"]) {
      return commonTranslations[key]["en"];
    }
    
    return key; // Return the key itself if no translation is found
  };

  // Generic function to get translated content from data files
  const getContent = <T,>(
    items: { id: string | number; translations: { [langCode: string]: T } }[],
    id: string | number
  ): T | null => {
    const item = items.find(item => item.id === id);
    
    if (!item) return null;
    
    // If translation exists for current language, return it
    if (item.translations[currentLanguage]) {
      return item.translations[currentLanguage];
    }
    
    // Fallback to English
    if (item.translations.en) {
      return item.translations.en;
    }
    
    return null;
  };

  const getDirection = (): "ltr" | "rtl" => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang?.direction || "ltr";
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      t,
      getContent,
      getDirection
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
