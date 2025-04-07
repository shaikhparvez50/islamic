
import { useState, useEffect, useRef } from "react";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useNavigate } from "react-router-dom";

interface SearchItem {
  id: string;
  title: string;
  path: string;
  category: string;
}

const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useLanguage();
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  // Mock search data - in a real app, this would come from your data files
  const searchData: SearchItem[] = [
    { id: "1", title: "Five Pillars of Islam", path: "/learn", category: "Basics" },
    { id: "2", title: "Prophet Muhammad", path: "/prophets", category: "Prophets" },
    { id: "3", title: "Surah Al-Fatiha", path: "/quran", category: "Quran" },
    { id: "4", title: "Islamic Golden Age", path: "/history", category: "History" },
    { id: "5", title: "Prayer Times", path: "/learn", category: "Basics" },
    { id: "6", title: "Hajj Pilgrimage", path: "/learn", category: "Basics" },
    { id: "7", title: "Ramadan", path: "/learn", category: "Basics" },
    { id: "8", title: "Prophet Ibrahim", path: "/prophets", category: "Prophets" },
    { id: "9", title: "Quran Recitation", path: "/quran", category: "Quran" }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Focus the input when overlay opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      // Initialize with all search results
      setSearchResults(searchData);
    }
  }, [isOpen]);

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults(searchData);
      return;
    }
    
    const filteredResults = searchData.filter(item => 
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.category.toLowerCase().includes(value.toLowerCase())
    );
    
    setSearchResults(filteredResults);
  };

  const handleItemSelect = (item: SearchItem) => {
    navigate(item.path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden animate-slide-in-top"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-medium">{t("searchPrompt")}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>
        
        <Command className="rounded-lg border-none">
          <CommandInput 
            ref={inputRef}
            placeholder={t("searchPlaceholder") || "Search for topics, prophets, chapters..."}
            onValueChange={handleSearch}
            className="h-12 text-lg"
          />
          <CommandList className="max-h-[60vh] overflow-y-auto p-2">
            <CommandEmpty className="py-6 text-center text-sm">
              {t("noResults") || "No results found."}
            </CommandEmpty>
            
            {searchResults.length > 0 && (
              <CommandGroup>
                {searchResults.map((item) => (
                  <CommandItem 
                    key={item.id} 
                    value={item.title}
                    onSelect={() => handleItemSelect(item)}
                    className="flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-islamic-green/10"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-sm text-gray-500">{item.category}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default SearchOverlay;
