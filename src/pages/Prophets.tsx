
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { prophets } from "@/data/prophets";
import { Badge } from "@/components/ui/badge";

const Prophets = () => {
  const { t, getContent } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-blue py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              {t("prophets")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("footerDescription")}
            </p>
          </div>
        </section>

        {/* Prophets Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
              {prophets.map((prophet) => {
                const prophetContent = getContent(prophets, prophet.id);
                
                if (!prophetContent) return null;
                
                return (
                  <ContentCard 
                    key={prophet.id}
                    title={`${prophetContent.name} - ${prophetContent.title}`}
                    className="animate-fade-in"
                  >
                    <p className="mb-6 text-gray-700">{prophetContent.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-islamic-blue mb-2">{t("story")}</h4>
                      <p className="text-gray-700">{prophetContent.story}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-islamic-blue mb-2">{t("themesAndLessons")}</h4>
                      <ul className="space-y-2">
                        {prophetContent.lessons.map((lesson, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-islamic-gold mr-2">•</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Badge className="mt-4 bg-islamic-blue/10 text-islamic-blue hover:bg-islamic-blue/20 border border-islamic-blue/20">
                      {prophet.id}
                    </Badge>
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

export default Prophets;
