
export interface QuestionContent {
  question: string;
  answer: string;
}

export interface Question {
  id: string;
  translations: {
    [langCode: string]: QuestionContent;
  };
  category: string;
}

export const questions: Question[] = [
  {
    id: "what-is-islam",
    category: "basic",
    translations: {
      en: {
        question: "What is Islam?",
        answer: "Islam is a monotheistic religion that teaches that there is only one God (Allah) and that Muhammad is the messenger of God. The word 'Islam' means 'submission to the will of God.' Followers of Islam, called Muslims, believe in the Five Pillars of Islam, which include declaration of faith, prayer, charity, fasting during Ramadan, and pilgrimage to Mecca at least once in a lifetime if able."
      },
      hi: {
        question: "इस्लाम क्या है?",
        answer: "इस्लाम एक एकेश्वरवादी धर्म है जो सिखाता है कि केवल एक ईश्वर (अल्लाह) है और मुहम्मद ईश्वर के संदेशवाहक हैं। 'इस्लाम' शब्द का अर्थ है 'ईश्वर की इच्छा के प्रति समर्पण।' इस्लाम के अनुयायियों, जिन्हें मुसलमान कहा जाता है, इस्लाम के पांच स्तंभों पर विश्वास करते हैं, जिनमें विश्वास की घोषणा, प्रार्थना, दान, रमजान के दौरान उपवास, और जीवन में कम से कम एक बार मक्का की तीर्थयात्रा शामिल है यदि सक्षम हों।"
      },
      ur: {
        question: "اسلام کیا ہے؟",
        answer: "اسلام ایک توحیدی مذہب ہے جو سکھاتا ہے کہ صرف ایک خدا (اللہ) ہے اور محمد اللہ کے رسول ہیں۔ 'اسلام' لفظ کا مطلب ہے 'خدا کی مرضی کے سامنے سر تسلیم خم کرنا۔' اسلام کے پیروکار، جنہیں مسلمان کہا جاتا ہے، اسلام کے پانچ ستونوں پر یقین رکھتے ہیں، جن میں ایمان کا اقرار، نماز، زکاۃ، رمضان کے دوران روزے، اور زندگی میں کم از کم ایک بار مکہ کی زیارت شامل ہے اگر استطاعت ہو۔"
      },
      ar: {
        question: "ما هو الإسلام؟",
        answer: "الإسلام هو دين توحيدي يعلم أنه لا إله إلا الله وأن محمداً رسول الله. كلمة 'إسلام' تعني 'الخضوع لإرادة الله.' أتباع الإسلام، الذين يُطلق عليهم المسلمون، يؤمنون بأركان الإسلام الخمسة، والتي تشمل الشهادة، والصلاة، والزكاة، وصوم رمضان، والحج إلى مكة مرة واحدة على الأقل في العمر إذا استطاع."
      }
    }
  },
  {
    id: "who-is-allah",
    category: "basic",
    translations: {
      en: {
        question: "Who is Allah?",
        answer: "Allah is the Arabic word for God in Islam. Muslims believe Allah is the one and only God, the creator of the universe, who is all-powerful, all-knowing, and all-merciful. Allah has no partners, no equals, and nothing resembles Him. He was not born, nor does He have any offspring. Muslims believe that Allah sent prophets and messengers to guide humanity throughout history, with Muhammad being the final prophet."
      },
      hi: {
        question: "अल्लाह कौन है?",
        answer: "अल्लाह इस्लाम में ईश्वर के लिए अरबी शब्द है। मुसलमान मानते हैं कि अल्लाह एकमात्र ईश्वर है, ब्रह्मांड का सृष्टिकर्ता, जो सर्वशक्तिमान, सर्वज्ञ और सर्वदयालु है। अल्लाह के कोई साथी नहीं हैं, कोई समान नहीं है, और कुछ भी उनके जैसा नहीं है। वह पैदा नहीं हुए थे, और न ही उनकी कोई संतान है। मुसलमान मानते हैं कि अल्लाह ने पूरे इतिहास में मानवता का मार्गदर्शन करने के लिए पैगंबरों और संदेशवाहकों को भेजा, जिनमें मुहम्मद अंतिम पैगंबर थे।"
      },
      ur: {
        question: "اللہ کون ہے؟",
        answer: "اللہ اسلام میں خدا کے لیے عربی لفظ ہے۔ مسلمان مانتے ہیں کہ اللہ واحد خدا ہے، کائنات کا خالق، جو سب کچھ کر سکنے والا، سب کچھ جاننے والا، اور نہایت مہربان ہے۔ اللہ کا کوئی شریک نہیں، کوئی برابر نہیں، اور کچھ بھی اس کی طرح نہیں ہے۔ وہ پیدا نہیں ہوا، اور نہ ہی اس کی کوئی اولاد ہے۔ مسلمان مانتے ہیں کہ اللہ نے پوری تاریخ میں انسانیت کی رہنمائی کے لیے پیغمبروں اور رسولوں کو بھیجا، جن میں محمد آخری پیغمبر تھے۔"
      },
      ar: {
        question: "من هو الله؟",
        answer: "الله هو الكلمة العربية للإله في الإسلام. يؤمن المسلمون أن الله هو الإله الواحد الأحد، خالق الكون، القادر على كل شيء، العليم بكل شيء، الرحيم. ليس لله شركاء، ولا أنداد، ولا يشبهه شيء. لم يولد، وليس له أي نسل. يؤمن المسلمون أن الله أرسل الأنبياء والرسل لهداية البشرية عبر التاريخ، وكان محمد هو النبي الأخير."
      }
    }
  },
  {
    id: "why-quran-special",
    category: "quran",
    translations: {
      en: {
        question: "Why is the Quran special to Muslims?",
        answer: "The Quran is special to Muslims because they believe it is the literal word of God (Allah) as revealed to Prophet Muhammad through the Angel Gabriel. Unlike other religious texts, Muslims believe the Quran has been preserved in its original Arabic form without any alterations since its revelation over 1400 years ago. It serves as the primary source of Islamic law and guidance, covering all aspects of human life including faith, worship, ethics, governance, and social relations. Muslims recite portions of the Quran in their daily prayers and many memorize it partially or completely."
      },
      hi: {
        question: "मुसलमानों के लिए क़ुरआन विशेष क्यों है?",
        answer: "क़ुरआन मुसलमानों के लिए विशेष है क्योंकि वे मानते हैं कि यह फरिश्ते जिब्रील के माध्यम से पैगंबर मुहम्मद पर प्रकट किया गया ईश्वर (अल्लाह) का शाब्दिक वचन है। अन्य धार्मिक ग्रंथों के विपरीत, मुसलमान मानते हैं कि क़ुरआन 1400 वर्षों से अधिक समय से अपने मूल अरबी रूप में बिना किसी परिवर्तन के संरक्षित किया गया है। यह इस्लामिक कानून और मार्गदर्शन का प्राथमिक स्रोत के रूप में कार्य करता है, जिसमें विश्वास, पूजा, नैतिकता, शासन और सामाजिक संबंधों सहित मानव जीवन के सभी पहलू शामिल हैं। मुसलमान अपनी दैनिक प्रार्थनाओं में क़ुरआन के कुछ हिस्सों का पाठ करते हैं और कई इसे आंशिक रूप से या पूरी तरह से याद करते हैं।"
      },
      ur: {
        question: "مسلمانوں کے لیے قرآن خاص کیوں ہے؟",
        answer: "قرآن مسلمانوں کے لیے خاص ہے کیونکہ وہ مانتے ہیں کہ یہ فرشتہ جبرائیل کے ذریعے حضرت محمد پر نازل کیا گیا اللہ کا لفظی کلام ہے۔ دیگر مذہبی متون کے برعکس، مسلمان مانتے ہیں کہ قرآن 1400 سال سے زیادہ عرصے سے اپنی اصل عربی شکل میں بغیر کسی تبدیلی کے محفوظ کیا گیا ہے۔ یہ اسلامی قانون اور ہدایت کا بنیادی ذریعہ ہے، جو ایمان، عبادت، اخلاقیات، حکمرانی، اور سماجی تعلقات سمیت انسانی زندگی کے تمام پہلوؤں کا احاطہ کرتا ہے۔ مسلمان اپنی روزانہ کی نمازوں میں قرآن کے حصوں کی تلاوت کرتے ہیں اور بہت سے لوگ اسے جزوی یا مکمل طور پر حفظ کرتے ہیں۔"
      },
      ar: {
        question: "لماذا القرآن خاص للمسلمين؟",
        answer: "القرآن خاص للمسلمين لأنهم يؤمنون أنه كلام الله الحرفي كما أوحي به إلى النبي محمد من خلال الملاك جبريل. على عكس النصوص الدينية الأخرى، يعتقد المسلمون أن القرآن قد تم الحفاظ عليه بشكله العربي الأصلي دون أي تغييرات منذ نزوله قبل أكثر من 1400 عام. إنه يعمل كمصدر أساسي للشريعة الإسلامية والتوجيه، ويغطي جميع جوانب الحياة البشرية بما في ذلك الإيمان والعبادة والأخلاق والحكم والعلاقات الاجتماعية. يتلو المسلمون أجزاء من القرآن في صلواتهم اليومية ويحفظ الكثيرون منهم القرآن جزئياً أو كلياً."
      }
    }
  }
];
