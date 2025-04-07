
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-islamic-green text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("siteName")}</h3>
            <p className="text-white/80">
              {t("footerDescription")}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors duration-200">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-white/80 hover:text-white transition-colors duration-200">
                  {t("learn")}
                </Link>
              </li>
              <li>
                <Link to="/quran" className="text-white/80 hover:text-white transition-colors duration-200">
                  {t("quran")}
                </Link>
              </li>
              <li>
                <Link to="/prophets" className="text-white/80 hover:text-white transition-colors duration-200">
                  {t("prophets")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("moreResources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/history" className="text-white/80 hover:text-white transition-colors duration-200">
                  {t("history")}
                </Link>
              </li>
              <li>
                <Link to="/questions" className="text-white/80 hover:text-white transition-colors duration-200">
                  {t("questions")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/70">
          <p>
            &copy; {currentYear} {t("siteName")}. {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
