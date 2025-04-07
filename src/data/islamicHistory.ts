
export interface HistoryPeriodContent {
  title: string;
  timeframe: string;
  description: string;
  keyEvents: string[];
  significance: string;
}

export interface HistoryPeriod {
  id: string;
  translations: {
    [langCode: string]: HistoryPeriodContent;
  };
}

export const islamicHistory: HistoryPeriod[] = [
  {
    id: "prophetic-era",
    translations: {
      en: {
        title: "Prophetic Era",
        timeframe: "610-632 CE",
        description: "The period during Prophet Muhammad's (PBUH) lifetime when Islam was first revealed and established.",
        keyEvents: [
          "First revelation in the Cave of Hira (610 CE)",
          "Migration to Medina (Hijra) (622 CE)",
          "Conquest of Mecca (630 CE)",
          "The Farewell Pilgrimage (632 CE)",
          "The passing of Prophet Muhammad (PBUH) (632 CE)"
        ],
        significance: "This era established the foundations of Islamic faith, practice, and governance. The Prophet's teachings and example (Sunnah) became the second most important source of guidance in Islam after the Quran."
      },
      hi: {
        title: "पैगंबरी युग",
        timeframe: "610-632 ईस्वी",
        description: "पैगंबर मुहम्मद (PBUH) के जीवनकाल के दौरान का समय जब इस्लाम पहली बार प्रकट और स्थापित हुआ था।",
        keyEvents: [
          "हिरा की गुफा में पहली रहस्योद्घाटन (610 ईस्वी)",
          "मदीना की ओर प्रवासन (हिजरा) (622 ईस्वी)",
          "मक्का की विजय (630 ईस्वी)",
          "विदाई तीर्थयात्रा (632 ईस्वी)",
          "पैगंबर मुहम्मद (PBUH) का देहांत (632 ईस्वी)"
        ],
        significance: "इस युग ने इस्लामी विश्वास, अभ्यास और शासन की नींव रखी। पैगंबर की शिक्षाओं और उदाहरण (सुन्नत) क़ुरआन के बाद इस्लाम में मार्गदर्शन का दूसरा सबसे महत्वपूर्ण स्रोत बन गया।"
      },
      ur: {
        title: "عہد نبوت",
        timeframe: "610-632 عیسوی",
        description: "حضرت محمد (صلی اللہ علیہ وسلم) کی زندگی کا دور جب اسلام پہلی بار نازل اور قائم کیا گیا۔",
        keyEvents: [
          "غار حرا میں پہلی وحی (610 عیسوی)",
          "مدینہ کی طرف ہجرت (622 عیسوی)",
          "فتح مکہ (630 عیسوی)",
          "حجۃ الوداع (632 عیسوی)",
          "حضرت محمد (صلی اللہ علیہ وسلم) کا انتقال (632 عیسوی)"
        ],
        significance: "اس دور نے اسلامی عقیدے، عمل اور حکمرانی کی بنیادیں رکھیں۔ نبی کی تعلیمات اور مثال (سنت) قرآن کے بعد اسلام میں رہنمائی کا دوسرا سب سے اہم ذریعہ بن گئی۔"
      },
      ar: {
        title: "العصر النبوي",
        timeframe: "610-632 م",
        description: "الفترة خلال حياة النبي محمد (صلى الله عليه وسلم) عندما تم الوحي بالإسلام وتأسيسه لأول مرة.",
        keyEvents: [
          "الوحي الأول في غار حراء (610 م)",
          "الهجرة إلى المدينة (622 م)",
          "فتح مكة (630 م)",
          "حجة الوداع (632 م)",
          "وفاة النبي محمد (صلى الله عليه وسلم) (632 م)"
        ],
        significance: "أرسى هذا العصر أسس العقيدة الإسلامية والممارسة والحكم. أصبحت تعاليم النبي ومثاله (السنة) ثاني أهم مصدر للإرشاد في الإسلام بعد القرآن."
      }
    }
  },
  {
    id: "rashidun-caliphate",
    translations: {
      en: {
        title: "Rashidun Caliphate",
        timeframe: "632-661 CE",
        description: "The period of the first four Caliphs (successors) after the Prophet Muhammad (PBUH), known as the Rightly Guided Caliphs.",
        keyEvents: [
          "Abu Bakr becomes the first Caliph (632 CE)",
          "Compilation of the Quran during Uthman's reign",
          "Expansion of the Islamic state throughout the Middle East and North Africa",
          "Martyrdom of Caliph Uthman (656 CE)",
          "Martyrdom of Caliph Ali (661 CE)"
        ],
        significance: "This era saw the preservation of the Quran in its complete form, the rapid spread of Islam, and the establishment of Islamic governance principles. It's considered a golden age that most closely followed the Prophet's example."
      },
      hi: {
        title: "राशिदुन खिलाफत",
        timeframe: "632-661 ईस्वी",
        description: "पैगंबर मुहम्मद (PBUH) के बाद पहले चार खलीफाओं (उत्तराधिकारियों) का काल, जिन्हें सही मार्गदर्शित खलीफा के रूप में जाना जाता है।",
        keyEvents: [
          "अबू बक्र पहले खलीफा बनते हैं (632 ईस्वी)",
          "उस्मान के शासनकाल के दौरान क़ुरआन का संकलन",
          "मध्य पूर्व और उत्तरी अफ्रीका में इस्लामी राज्य का विस्तार",
          "खलीफा उस्मान की शहादत (656 ईस्वी)",
          "खलीफा अली की शहादत (661 ईस्वी)"
        ],
        significance: "इस युग ने क़ुरआन को उसके पूर्ण रूप में संरक्षित किया, इस्लाम का तेजी से प्रसार हुआ, और इस्लामी शासन के सिद्धांतों की स्थापना हुई। इसे एक स्वर्णिम युग माना जाता है जो पैगंबर के उदाहरण का सबसे करीब से अनुसरण करता था।"
      },
      ur: {
        title: "خلافت راشدہ",
        timeframe: "632-661 عیسوی",
        description: "حضرت محمد (صلی اللہ علیہ وسلم) کے بعد پہلے چار خلفاء (جانشینوں) کا دور، جنہیں خلفائے راشدین کے نام سے جانا جاتا ہے۔",
        keyEvents: [
          "حضرت ابو بکر پہلے خلیفہ بنتے ہیں (632 عیسوی)",
          "حضرت عثمان کے دور میں قرآن کی تدوین",
          "مشرق وسطی اور شمالی افریقہ میں اسلامی ریاست کا پھیلاؤ",
          "حضرت عثمان کی شہادت (656 عیسوی)",
          "حضرت علی کی شہادت (661 عیسوی)"
        ],
        significance: "اس دور نے قرآن کو اس کی مکمل شکل میں محفوظ کیا، اسلام کا تیزی سے پھیلاؤ، اور اسلامی حکمرانی کے اصولوں کی تشکیل ہوئی۔ اسے ایک سنہری دور سمجھا جاتا ہے جو نبی کی مثال کے سب سے قریب تھا۔"
      },
      ar: {
        title: "الخلافة الراشدة",
        timeframe: "632-661 م",
        description: "فترة الخلفاء الأربعة الأوائل (الخلفاء) بعد النبي محمد (صلى الله عليه وسلم)، المعروفين بالخلفاء الراشدين.",
        keyEvents: [
          "أبو بكر يصبح الخليفة الأول (632 م)",
          "جمع القرآن خلال عهد عثمان",
          "توسع الدولة الإسلامية في جميع أنحاء الشرق الأوسط وشمال أفريقيا",
          "استشهاد الخليفة عثمان (656 م)",
          "استشهاد الخليفة علي (661 م)"
        ],
        significance: "شهد هذا العصر الحفاظ على القرآن في شكله الكامل، والانتشار السريع للإسلام، وإقامة مبادئ الحكم الإسلامي. يعتبر العصر الذهبي الذي اتبع مثال النبي عن كثب."
      }
    }
  }
];
