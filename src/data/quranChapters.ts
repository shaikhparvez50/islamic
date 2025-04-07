
export interface ChapterContent {
  title: string;
  translation: string;
  introduction: string;
  keyVerses: {
    verse: string;
    reference: string;
    translation: string;
  }[];
  themes: string[];
}

export interface Chapter {
  id: number;
  arabicName: string;
  translations: {
    [langCode: string]: ChapterContent;
  };
}

export const quranChapters: Chapter[] = [
  {
    id: 1,
    arabicName: "الفاتحة",
    translations: {
      en: {
        title: "Al-Fatiha",
        translation: "The Opening",
        introduction: "Al-Fatiha is the first chapter of the Quran and consists of seven verses. It serves as the opening prayer of the Quran and is recited in every unit of the daily prayers (Salat).",
        keyVerses: [
          {
            verse: "In the name of Allah, the Most Gracious, the Most Merciful.",
            reference: "1:1",
            translation: "Bismillah-ir-Rahman-ir-Raheem"
          },
          {
            verse: "All praise is due to Allah, Lord of the worlds.",
            reference: "1:2",
            translation: "Alhamdu lillahi rabbil 'alamin"
          }
        ],
        themes: ["Divine Guidance", "Worship", "Seeking the Straight Path", "Allah's Mercy"]
      },
      hi: {
        title: "अल-फातिहा",
        translation: "प्रारंभ",
        introduction: "अल-फातिहा क़ुरआन का पहला अध्याय है और इसमें सात आयतें हैं। यह क़ुरआन की प्रारंभिक प्रार्थना के रूप में कार्य करता है और दैनिक प्रार्थनाओं (सलात) के प्रत्येक इकाई में पाठ किया जाता है।",
        keyVerses: [
          {
            verse: "अल्लाह, परम कृपालु, परम दयालु के नाम से।",
            reference: "1:1",
            translation: "बिस्मिल्लाह-इर-रहमान-इर-रहीम"
          },
          {
            verse: "सभी प्रशंसा अल्लाह, विश्व के प्रभु के लिए है।",
            reference: "1:2",
            translation: "अलहम्दु लिल्लाही रब्बिल 'आलमीन"
          }
        ],
        themes: ["दिव्य मार्गदर्शन", "पूजा", "सीधा मार्ग की खोज", "अल्लाह की दया"]
      },
      ur: {
        title: "الفاتحہ",
        translation: "آغاز",
        introduction: "الفاتحہ قرآن کا پہلا سورہ ہے اور اس میں سات آیات ہیں۔ یہ قرآن کی افتتاحی دعا کے طور پر کام کرتا ہے اور روزانہ نمازوں (صلاۃ) کی ہر رکعت میں پڑھا جاتا ہے۔",
        keyVerses: [
          {
            verse: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔",
            reference: "1:1",
            translation: "بسم اللہ الرحمن الرحیم"
          },
          {
            verse: "تمام تعریف اللہ کے لئے ہے جو تمام جہانوں کا پالنے والا ہے۔",
            reference: "1:2",
            translation: "الحمد للہ رب العالمین"
          }
        ],
        themes: ["الہی ہدایت", "عبادت", "سیدھے راستے کی تلاش", "اللہ کی رحمت"]
      },
      ar: {
        title: "الفاتحة",
        translation: "الفاتحة",
        introduction: "الفاتحة هي السورة الأولى من القرآن وتتكون من سبع آيات. وهي بمثابة صلاة افتتاحية للقرآن وتُقرأ في كل ركعة من الصلوات اليومية (الصلاة).",
        keyVerses: [
          {
            verse: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
            reference: "1:1",
            translation: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"
          },
          {
            verse: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
            reference: "1:2",
            translation: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ"
          }
        ],
        themes: ["الهداية الإلهية", "العبادة", "طلب الصراط المستقيم", "رحمة الله"]
      }
    }
  },
  {
    id: 2,
    arabicName: "البقرة",
    translations: {
      en: {
        title: "Al-Baqarah",
        translation: "The Cow",
        introduction: "Al-Baqarah is the second and longest chapter of the Quran, containing 286 verses. It covers various subjects including faith, Islamic law, and stories of previous prophets.",
        keyVerses: [
          {
            verse: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
            reference: "2:2",
            translation: "Dhalika al-kitabu la rayba fih, hudan lil-muttaqin"
          },
          {
            verse: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
            reference: "2:255 (Ayatul Kursi)",
            translation: "Allahu la ilaha illa huwa, al-hayyu al-qayyum"
          }
        ],
        themes: ["Faith", "Divine Law", "Prophetic Stories", "Moral Guidance", "Community Relations"]
      },
      hi: {
        title: "अल-बक़रा",
        translation: "गाय",
        introduction: "अल-बक़रा क़ुरआन का दूसरा और सबसे लंबा अध्याय है, जिसमें 286 आयतें हैं। यह विश्वास, इस्लामिक कानून और पिछले पैगंबरों की कहानियों सहित विभिन्न विषयों को कवर करता है।",
        keyVerses: [
          {
            verse: "यह वह पुस्तक है जिसमें कोई संदेह नहीं है, अल्लाह के प्रति सचेत लोगों के लिए एक मार्गदर्शन है।",
            reference: "2:2",
            translation: "ज़ालिका अल-किताबु ला रयबा फिह, हुदन लिल-मुत्तकीन"
          },
          {
            verse: "अल्लाह - उसके सिवा कोई देवता नहीं है, वह सदा जीवित, अस्तित्व का संरक्षक है।",
            reference: "2:255 (आयतुल कुर्सी)",
            translation: "अल्लाहु ला इलाहा इल्ला हुवा, अल-हय्यु अल-क़य्यूम"
          }
        ],
        themes: ["विश्वास", "ईश्वरीय कानून", "पैगंबरों की कहानियां", "नैतिक मार्गदर्शन", "समुदाय संबंध"]
      },
      ur: {
        title: "البقرة",
        translation: "گائے",
        introduction: "البقرة قرآن کا دوسرا اور سب سے طویل سورہ ہے، جس میں 286 آیات ہیں۔ یہ ایمان، اسلامی قانون، اور پچھلے پیغمبروں کی کہانیوں سمیت مختلف موضوعات کا احاطہ کرتا ہے۔",
        keyVerses: [
          {
            verse: "یہ وہ کتاب ہے جس میں کوئی شک نہیں، متقیوں کے لیے ہدایت ہے۔",
            reference: "2:2",
            translation: "ذلک الکتاب لا ریب فیہ ہدی للمتقین"
          },
          {
            verse: "اللہ - اس کے سوا کوئی معبود نہیں، وہ ہمیشہ زندہ، وجود کا سہارا ہے۔",
            reference: "2:255 (آیۃ الکرسی)",
            translation: "اللہ لا الہ الا ہو الحی القیوم"
          }
        ],
        themes: ["ایمان", "الہی قانون", "پیغمبروں کی کہانیاں", "اخلاقی ہدایت", "برادری تعلقات"]
      },
      ar: {
        title: "البقرة",
        translation: "البقرة",
        introduction: "البقرة هي السورة الثانية والأطول في القرآن، وتحتوي على 286 آية. تغطي مواضيع مختلفة بما في ذلك الإيمان والشريعة الإسلامية وقصص الأنبياء السابقين.",
        keyVerses: [
          {
            verse: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ",
            reference: "2:2",
            translation: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ"
          },
          {
            verse: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
            reference: "2:255 (آية الكرسي)",
            translation: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ"
          }
        ],
        themes: ["الإيمان", "الشريعة الإلهية", "قصص الأنبياء", "التوجيه الأخلاقي", "العلاقات المجتمعية"]
      }
    }
  }
];
