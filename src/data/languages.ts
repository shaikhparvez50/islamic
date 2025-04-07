
export type Language = {
  code: string;
  name: string;
  nativeName: string;
  direction: "ltr" | "rtl";
};

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    direction: "ltr"
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    direction: "ltr"
  },
  {
    code: "ur",
    name: "Urdu",
    nativeName: "اردو",
    direction: "rtl"
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl"
  }
];

export const defaultLanguage = "en";
