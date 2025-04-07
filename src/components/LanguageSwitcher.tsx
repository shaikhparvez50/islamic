
import { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { languages } from "@/data/languages";
import { useLanguage } from "@/hooks/useLanguage";

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode);
    setOpen(false);
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium px-2 py-1 rounded hover:bg-gray-100 transition-colors duration-200">
        <span className="hidden md:inline">{currentLang.nativeName}</span>
        <span className="md:hidden">{currentLang.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 z-50 bg-white">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`cursor-pointer ${
              language.code === currentLanguage ? "bg-islamic-green/10 text-islamic-green" : ""
            }`}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.nativeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
