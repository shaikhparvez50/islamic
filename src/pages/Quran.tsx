
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { quranChapters } from "@/data/quranChapters";
import { Badge } from "@/components/ui/badge";

const Quran = () => {
  const { t, getContent } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-gold py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              {t("quran")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("footerDescription")}
            </p>
          </div>
        </section>

        {/* Quran Chapters Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
              {quranChapters.map((chapter) => {
                const chapterContent = getContent(quranChapters, chapter.id);
                
                if (!chapterContent) return null;
                
                return (
                  <ContentCard 
                    key={chapter.id}
                    title={`${chapter.id}. ${chapterContent.title} (${chapterContent.translation})`}
                    className="animate-fade-in"
                    icon={<span className="text-islamic-gold font-arabic">{chapter.arabicName}</span>}
                  >
                    <p className="mb-6 text-gray-700">{chapterContent.introduction}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-islamic-gold mb-2">Key Verses</h4>
                      {chapterContent.keyVerses.map((verse, index) => (
                        <div key={index} className="mb-4 p-4 bg-islamic-gold/5 rounded-md border border-islamic-gold/20">
                          <p className="italic mb-1">{verse.verse}</p>
                          <p className="text-sm text-gray-600 mb-1">{verse.translation}</p>
                          <Badge className="bg-islamic-gold/20 text-islamic-gold hover:bg-islamic-gold/30 border-none">
                            {verse.reference}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-islamic-gold mb-2">Themes</h4>
                      <div className="flex flex-wrap gap-2">
                        {chapterContent.themes.map((theme, index) => (
                          <Badge key={index} className="bg-islamic-gold/10 text-islamic-gold hover:bg-islamic-gold/20">
                            {theme}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ContentCard>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quran;
