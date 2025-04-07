
export interface PillarContent {
  title: string;
  description: string;
  benefits: string[];
  howTo: string;
}

export interface Pillar {
  id: string;
  translations: {
    [langCode: string]: PillarContent;
  };
}

export const pillarsOfIslam: Pillar[] = [
  {
    id: "shahada",
    translations: {
      en: {
        title: "Shahada (Faith)",
        description: "The declaration of faith: 'There is no god but Allah, and Muhammad is the messenger of Allah.'",
        benefits: [
          "Affirms belief in the oneness of God",
          "Acknowledges Muhammad as the final prophet",
          "Serves as the foundation for all other acts of worship"
        ],
        howTo: "Recite the Shahada with sincere belief and understanding of its meaning."
      },
      hi: {
        title: "शहादा (विश्वास)",
        description: "विश्वास की घोषणा: 'अल्लाह के अलावा कोई भगवान नहीं है, और मुहम्मद अल्लाह के संदेशवाहक हैं।'",
        benefits: [
          "ईश्वर की एकता में विश्वास की पुष्टि करता है",
          "मुहम्मद को अंतिम पैगंबर के रूप में स्वीकार करता है",
          "सभी अन्य पूजा कार्यों के लिए आधार के रूप में कार्य करता है"
        ],
        howTo: "शहादा को इसके अर्थ की ईमानदार विश्वास और समझ के साथ दोहराएं।"
      },
      ur: {
        title: "شہادہ (ایمان)",
        description: "عقیدے کا اعلان: 'اللہ کے سوا کوئی معبود نہیں، اور محمد اللہ کے رسول ہیں۔'",
        benefits: [
          "خدا کی وحدانیت پر یقین کی تصدیق کرتا ہے",
          "محمد کو آخری نبی کے طور پر تسلیم کرتا ہے",
          "تمام دیگر عبادات کی بنیاد کے طور پر کام کرتا ہے"
        ],
        howTo: "شہادہ کو اس کے معنی کی مخلصانہ عقیدہ اور سمجھ کے ساتھ پڑھیں۔"
      },
      ar: {
        title: "الشهادة (الإيمان)",
        description: "إعلان الإيمان: 'لا إله إلا الله، محمد رسول الله.'",
        benefits: [
          "تؤكد الإيمان بوحدانية الله",
          "تقر بمحمد كنبي أخير",
          "تعمل كأساس لجميع أعمال العبادة الأخرى"
        ],
        howTo: "قل الشهادة بإيمان صادق وفهم لمعناها."
      }
    }
  },
  {
    id: "salat",
    translations: {
      en: {
        title: "Salat (Prayer)",
        description: "The ritual prayer performed five times a day.",
        benefits: [
          "Establishes a direct connection with Allah",
          "Provides spiritual peace and mindfulness",
          "Reminds Muslims of their purpose in life"
        ],
        howTo: "Perform five daily prayers at designated times, facing the Kaaba in Mecca."
      },
      hi: {
        title: "सलात (प्रार्थना)",
        description: "दिन में पांच बार किया जाने वाला अनुष्ठानिक प्रार्थना।",
        benefits: [
          "अल्लाह के साथ सीधा संबंध स्थापित करता है",
          "आध्यात्मिक शांति और सचेतता प्रदान करता है",
          "मुसलमानों को जीवन में उनके उद्देश्य की याद दिलाता है"
        ],
        howTo: "निर्धारित समय पर पांच दैनिक प्रार्थना करें, मक्का में काबा की ओर मुख करके।"
      },
      ur: {
        title: "صلاۃ (نماز)",
        description: "دن میں پانچ بار ادا کی جانے والی عبادت۔",
        benefits: [
          "اللہ کے ساتھ براہ راست رابطہ قائم کرتی ہے",
          "روحانی سکون اور ذہنی توجہ فراہم کرتی ہے",
          "مسلمانوں کو زندگی میں ان کے مقصد کی یاد دلاتی ہے"
        ],
        howTo: "مقررہ اوقات پر پانچ روزانہ نمازیں ادا کریں، مکہ میں کعبہ کی طرف منہ کر کے۔"
      },
      ar: {
        title: "الصلاة",
        description: "الصلاة المفروضة خمس مرات في اليوم.",
        benefits: [
          "تؤسس اتصالاً مباشراً مع الله",
          "توفر السلام الروحي واليقظة الذهنية",
          "تذكر المسلمين بهدفهم في الحياة"
        ],
        howTo: "أداء الصلوات الخمس اليومية في الأوقات المحددة، متوجهاً نحو الكعبة في مكة."
      }
    }
  },
  {
    id: "zakat",
    translations: {
      en: {
        title: "Zakat (Almsgiving)",
        description: "Annual charitable giving of 2.5% of one's wealth to those in need.",
        benefits: [
          "Purifies wealth and promotes generosity",
          "Reduces economic inequality",
          "Fosters community solidarity"
        ],
        howTo: "Calculate 2.5% of your eligible wealth annually and distribute it to eligible recipients."
      },
      hi: {
        title: "ज़कात (दान)",
        description: "जरूरतमंदों को अपनी संपत्ति का 2.5% वार्षिक दान देना।",
        benefits: [
          "धन को शुद्ध करता है और उदारता को बढ़ावा देता है",
          "आर्थिक असमानता को कम करता है",
          "सामुदायिक एकजुटता को बढ़ावा देता है"
        ],
        howTo: "अपनी पात्र संपत्ति का 2.5% वार्षिक रूप से गणना करें और पात्र प्राप्तकर्ताओं को वितरित करें।"
      },
      ur: {
        title: "زکاۃ (خیرات)",
        description: "اپنی دولت کا 2.5% سالانہ ضرورت مندوں کو دینا۔",
        benefits: [
          "دولت کو پاکیزہ کرتی ہے اور سخاوت کو فروغ دیتی ہے",
          "معاشی عدم مساوات کو کم کرتی ہے",
          "برادری کی یکجہتی کو فروغ دیتی ہے"
        ],
        howTo: "سالانہ اپنی اہل دولت کا 2.5% حساب کریں اور اہل وصول کنندگان میں تقسیم کریں۔"
      },
      ar: {
        title: "الزكاة",
        description: "إعطاء 2.5% من ثروة الفرد سنوياً للمحتاجين.",
        benefits: [
          "تطهر الثروة وتعزز الكرم",
          "تقلل من عدم المساواة الاقتصادية",
          "تعزز التضامن المجتمعي"
        ],
        howTo: "احسب 2.5% من ثروتك المؤهلة سنوياً ووزعها على المستحقين."
      }
    }
  },
  {
    id: "sawm",
    translations: {
      en: {
        title: "Sawm (Fasting)",
        description: "Fasting during the holy month of Ramadan from dawn to sunset.",
        benefits: [
          "Develops self-discipline and God-consciousness",
          "Creates empathy for those less fortunate",
          "Improves physical health and spiritual awareness"
        ],
        howTo: "Abstain from food, drink, and other physical needs during daylight hours in Ramadan."
      },
      hi: {
        title: "सौम (उपवास)",
        description: "पवित्र रमजान महीने के दौरान सुबह से शाम तक उपवास रखना।",
        benefits: [
          "आत्म-अनुशासन और ईश्वर-चेतना का विकास करता है",
          "कम भाग्यशाली लोगों के लिए सहानुभूति पैदा करता है",
          "शारीरिक स्वास्थ्य और आध्यात्मिक जागरूकता में सुधार करता है"
        ],
        howTo: "रमज़ान में दिन के समय भोजन, पेय और अन्य शारीरिक जरूरतों से परहेज करें।"
      },
      ur: {
        title: "صوم (روزہ)",
        description: "رمضان کے مقدس مہینے میں طلوع صبح سے غروب آفتاب تک روزہ رکھنا۔",
        benefits: [
          "خود انضباطی اور خدا کی آگاہی کو فروغ دیتا ہے",
          "کم خوش قسمت لوگوں کے لیے ہمدردی پیدا کرتا ہے",
          "جسمانی صحت اور روحانی آگاہی کو بہتر بناتا ہے"
        ],
        howTo: "رمضان میں دن کے اوقات میں کھانے، پینے اور دیگر جسمانی ضروریات سے پرہیز کریں۔"
      },
      ar: {
        title: "الصوم",
        description: "الصيام خلال شهر رمضان المبارك من الفجر إلى غروب الشمس.",
        benefits: [
          "ينمي الانضباط الذاتي والوعي بالله",
          "يخلق التعاطف مع الأقل حظاً",
          "يحسن الصحة البدنية والوعي الروحي"
        ],
        howTo: "الامتناع عن الطعام والشراب وغيرها من الاحتياجات المادية خلال ساعات النهار في رمضان."
      }
    }
  },
  {
    id: "hajj",
    translations: {
      en: {
        title: "Hajj (Pilgrimage)",
        description: "Annual Islamic pilgrimage to Mecca, Saudi Arabia, required once in a lifetime for those who are able.",
        benefits: [
          "Fulfills a direct commandment from Allah",
          "Unites Muslims from around the world",
          "Symbolizes the equality of all people before God"
        ],
        howTo: "Perform the required rituals at specific locations in and around Mecca during the designated days of Dhul Hijjah."
      },
      hi: {
        title: "हज्ज (तीर्थयात्रा)",
        description: "सऊदी अरब के मक्का की वार्षिक इस्लामिक तीर्थयात्रा, जो सक्षम लोगों के लिए जीवन में एक बार आवश्यक है।",
        benefits: [
          "अल्लाह से सीधे आदेश को पूरा करता है",
          "दुनिया भर के मुसलमानों को एकजुट करता है",
          "ईश्वर के सामने सभी लोगों की समानता का प्रतीक है"
        ],
        howTo: "धुल हिज्जा के निर्धारित दिनों के दौरान मक्का में और उसके आसपास विशिष्ट स्थानों पर आवश्यक अनुष्ठान करें।"
      },
      ur: {
        title: "حج (زیارت)",
        description: "سعودی عرب میں مکہ کی سالانہ اسلامی زیارت، جو صلاحیت رکھنے والوں کے لیے زندگی میں ایک بار ضروری ہے۔",
        benefits: [
          "اللہ کے براہ راست حکم کو پورا کرتا ہے",
          "دنیا بھر کے مسلمانوں کو متحد کرتا ہے",
          "خدا کے سامنے تمام لوگوں کی برابری کی علامت ہے"
        ],
        howTo: "ذوالحجہ کے مخصوص دنوں کے دوران مکہ میں اور اس کے ارد گرد مخصوص مقامات پر ضروری مناسک ادا کریں۔"
      },
      ar: {
        title: "الحج",
        description: "رحلة الحج الإسلامية السنوية إلى مكة المكرمة بالمملكة العربية السعودية، مطلوبة مرة واحدة في العمر للقادرين.",
        benefits: [
          "ينفذ أمراً مباشراً من الله",
          "يوحد المسلمين من جميع أنحاء العالم",
          "يرمز إلى المساواة بين جميع الناس أمام الله"
        ],
        howTo: "أداء المناسك المطلوبة في مواقع محددة في مكة المكرمة وحولها خلال أيام ذي الحجة المحددة."
      }
    }
  }
];
