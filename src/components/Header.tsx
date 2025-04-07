
import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { Search, Menu, X } from "lucide-react";
import SearchOverlay from "./SearchOverlay";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const menuItems = [
    { name: t("home"), path: "/" },
    { name: t("learn"), path: "/learn" },
    { name: t("quran"), path: "/quran" },
    { name: t("prophets"), path: "/prophets" },
    { name: t("history"), path: "/history" },
    { name: t("questions"), path: "/questions" },
  ];

  return (
    <>
      <header className="bg-white shadow-md z-50 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-islamic-green flex items-center gap-2 transition-transform duration-300 hover:scale-105"
          >
            <span className="text-islamic-gold animate-pulse-soft">☪</span> 
            <span className="hidden sm:inline">{t("siteName")}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-islamic-green transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-islamic-green after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              className="text-gray-600 hover:text-islamic-green transition-colors duration-200 relative p-2 rounded-full hover:bg-islamic-green/10"
              aria-label="Search"
              onClick={openSearch}
            >
              <Search size={20} className="animate-hover-scale" />
            </button>
            <LanguageSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-islamic-green transition-colors duration-200"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-islamic-green transition-colors duration-200 py-2 border-b border-gray-100 animate-slide-in-top"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
};

export default Header;
