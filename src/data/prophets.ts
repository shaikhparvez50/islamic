
export interface ProphetContent {
  name: string;
  title: string;
  description: string;
  story: string;
  lessons: string[];
}

export interface Prophet {
  id: string;
  translations: {
    [langCode: string]: ProphetContent;
  };
}

export const prophets: Prophet[] = [
  {
    id: "muhammad",
    translations: {
      en: {
        name: "Muhammad",
        title: "The Final Prophet",
        description: "Prophet Muhammad (peace be upon him) was born in Mecca in 570 CE and is the final prophet in Islam.",
        story: "Muhammad (PBUH) received his first revelation from Allah through the Angel Gabriel in the Cave of Hira when he was 40 years old. He then began to preach the message of Islam, facing persecution from the powerful Meccan tribes. He and his followers migrated to Medina, where they established the first Islamic society. He returned to Mecca victorious years later, cleansing the Kaaba of idols and spreading Islam throughout Arabia.",
        lessons: [
          "Patience in the face of hardship",
          "Mercy and compassion towards all creation",
          "Standing firm against injustice",
          "The importance of community and unity"
        ]
      },
      hi: {
        name: "मुहम्मद",
        title: "अंतिम पैगंबर",
        description: "पैगंबर मुहम्मद (उन पर शांति हो) का जन्म 570 ईस्वी में मक्का में हुआ था और वे इस्लाम के अंतिम पैगंबर हैं।",
        story: "मुहम्मद (PBUH) को 40 वर्ष की आयु में हिरा की गुफा में फरिश्ते जिब्रील के माध्यम से अल्लाह से पहली रहस्योद्घाटन प्राप्त हुई। उन्होंने फिर इस्लाम का संदेश प्रचार करना शुरू किया, शक्तिशाली मक्का जनजातियों से उत्पीड़न का सामना किया। वह और उनके अनुयायी मदीना चले गए, जहां उन्होंने पहला इस्लामी समाज स्थापित किया। वह वर्षों बाद विजयी होकर मक्का लौटे, काबा को मूर्तियों से शुद्ध किया और पूरे अरब में इस्लाम का प्रसार किया।",
        lessons: [
          "कठिनाई के सामने धैर्य",
          "सभी सृष्टि के प्रति दया और करुणा",
          "अन्याय के खिलाफ दृढ़ता से खड़े रहना",
          "समुदाय और एकता का महत्व"
        ]
      },
      ur: {
        name: "محمد",
        title: "آخری نبی",
        description: "حضرت محمد (صلی اللہ علیہ وسلم) 570 عیسوی میں مکہ میں پیدا ہوئے اور اسلام کے آخری نبی ہیں۔",
        story: "محمد (صلی اللہ علیہ وسلم) کو 40 سال کی عمر میں غار حرا میں فرشتہ جبرائیل کے ذریعے اللہ سے پہلی وحی ملی۔ پھر انہوں نے اسلام کا پیغام پھیلانا شروع کیا، طاقتور مکہ کے قبائل سے ظلم کا سامنا کیا۔ وہ اور ان کے پیروکار مدینہ ہجرت کر گئے، جہاں انہوں نے پہلا اسلامی معاشرہ قائم کیا۔ وہ سالوں بعد فاتح بن کر مکہ واپس آئے، کعبہ کو بتوں سے پاک کیا اور پورے عرب میں اسلام پھیلایا۔",
        lessons: [
          "مشکلات کا سامنا کرنے میں صبر",
          "تمام مخلوق کے لیے رحم اور شفقت",
          "ظلم کے خلاف مضبوطی سے کھڑے ہونا",
          "برادری اور اتحاد کی اہمیت"
        ]
      },
      ar: {
        name: "محمد",
        title: "النبي الخاتم",
        description: "ولد النبي محمد (صلى الله عليه وسلم) في مكة عام 570 ميلادياً وهو النبي الأخير في الإسلام.",
        story: "تلقى محمد (صلى الله عليه وسلم) أول وحي من الله من خلال الملاك جبريل في غار حراء عندما كان عمره 40 عاماً. ثم بدأ في نشر رسالة الإسلام، مواجهاً الاضطهاد من قبائل مكة القوية. هاجر هو وأتباعه إلى المدينة المنورة، حيث أسسوا أول مجتمع إسلامي. عاد إلى مكة منتصراً بعد سنوات، وطهر الكعبة من الأصنام ونشر الإسلام في جميع أنحاء الجزيرة العربية.",
        lessons: [
          "الصبر في مواجهة المشقة",
          "الرحمة والشفقة تجاه كل الخلق",
          "الوقوف بحزم ضد الظلم",
          "أهمية المجتمع والوحدة"
        ]
      }
    }
  },
  {
    id: "ibrahim",
    translations: {
      en: {
        name: "Ibrahim",
        title: "Friend of Allah",
        description: "Prophet Ibrahim (Abraham) is known as Khalilullah, the Friend of Allah, and is revered in Islam, Christianity, and Judaism.",
        story: "Ibrahim was born in a society that worshipped idols, but he questioned this practice and sought the truth. After recognizing Allah as the only true God, he destroyed the idols of his people, was sentenced to be burned alive, but Allah saved him from the fire. He later built the Kaaba with his son Ismail, establishing the foundation for the Hajj pilgrimage.",
        lessons: [
          "Unwavering faith in Allah even in the face of death",
          "The importance of using reason to discover truth",
          "Willingness to sacrifice for Allah's sake",
          "The foundation of monotheism"
        ]
      },
      hi: {
        name: "इब्राहिम",
        title: "अल्लाह के मित्र",
        description: "पैगंबर इब्राहिम (अब्राहम) को खलीलुल्लाह, अल्लाह के मित्र के रूप में जाना जाता है, और इस्लाम, ईसाई धर्म और यहूदी धर्म में सम्मानित हैं।",
        story: "इब्राहिम का जन्म एक ऐसे समाज में हुआ था जो मूर्तियों की पूजा करता था, लेकिन उन्होंने इस प्रथा पर सवाल उठाया और सत्य की खोज की। अल्लाह को एकमात्र सच्चे ईश्वर के रूप में पहचानने के बाद, उन्होंने अपने लोगों की मूर्तियों को नष्ट कर दिया, उन्हें जिंदा जला दिया जाने की सजा सुनाई गई, लेकिन अल्लाह ने उन्हें आग से बचाया। बाद में उन्होंने अपने बेटे इस्माइल के साथ काबा का निर्माण किया, जो हज तीर्थयात्रा की नींव रखी।",
        lessons: [
          "मृत्यु के सामने भी अल्लाह में अटूट विश्वास",
          "सत्य की खोज करने के लिए तर्क का उपयोग करने का महत्व",
          "अल्लाह के लिए बलिदान देने की इच्छा",
          "एकेश्वरवाद की नींव"
        ]
      },
      ur: {
        name: "ابراہیم",
        title: "اللہ کے دوست",
        description: "حضرت ابراہیم کو خلیل اللہ، اللہ کے دوست کے طور پر جانا جاتا ہے، اور اسلام، عیسائیت، اور یہودیت میں معزز ہیں۔",
        story: "ابراہیم ایک ایسے معاشرے میں پیدا ہوئے تھے جو بتوں کی پوجا کرتا تھا، لیکن انہوں نے اس رسم پر سوال اٹھایا اور حق کی تلاش کی۔ اللہ کو واحد سچے خدا کے طور پر پہچاننے کے بعد، انہوں نے اپنے لوگوں کے بتوں کو توڑ دیا، انہیں زندہ جلانے کی سزا سنائی گئی، لیکن اللہ نے انہیں آگ سے بچا لیا۔ بعد میں انہوں نے اپنے بیٹے اسماعیل کے ساتھ کعبہ کی تعمیر کی، حج کی بنیاد رکھی۔",
        lessons: [
          "موت کا سامنا کرنے پر بھی اللہ پر اٹل ایمان",
          "حق کو دریافت کرنے کے لیے دلیل استعمال کرنے کی اہمیت",
          "اللہ کی خاطر قربانی دینے کی رضامندی",
          "توحید کی بنیاد"
        ]
      },
      ar: {
        name: "إبراهيم",
        title: "خليل الله",
        description: "النبي إبراهيم معروف باسم خليل الله، صديق الله، ويحظى بالتبجيل في الإسلام والمسيحية واليهودية.",
        story: "ولد إبراهيم في مجتمع كان يعبد الأصنام، لكنه شكك في هذه الممارسة وسعى إلى الحقيقة. بعد الاعتراف بالله كالإله الحقيقي الوحيد، دمر أصنام قومه، وحكم عليه بالحرق حياً، لكن الله أنقذه من النار. بنى لاحقاً الكعبة مع ابنه إسماعيل، مؤسساً لحج بيت الله.",
        lessons: [
          "الإيمان الثابت بالله حتى في مواجهة الموت",
          "أهمية استخدام العقل لاكتشاف الحقيقة",
          "الاستعداد للتضحية من أجل الله",
          "أساس التوحيد"
        ]
      }
    }
  }
];
