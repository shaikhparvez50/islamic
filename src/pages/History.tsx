
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { islamicHistory } from "@/data/islamicHistory";
import { Badge } from "@/components/ui/badge";

const History = () => {
  const { t, getContent } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-burgundy py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              {t("history")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("footerDescription")}
            </p>
          </div>
        </section>

        {/* History Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-islamic-burgundy/30"></div>
              
              <div className="space-y-12">
                {islamicHistory.map((period, index) => {
                  const periodContent = getContent(islamicHistory, period.id);
                  
                  if (!periodContent) return null;
                  
                  return (
                    <div key={period.id} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                      <div className="absolute left-4 md:left-1/2 top-6 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-islamic-burgundy border-4 border-white"></div>
                      
                      <div className="ml-12 md:ml-0 md:w-[90%]">
                        <ContentCard 
                          title={periodContent.title}
                          className="animate-fade-in"
                        >
                          <Badge className="mb-2 bg-islamic-burgundy/10 text-islamic-burgundy hover:bg-islamic-burgundy/20 border border-islamic-burgundy/20">
                            {periodContent.timeframe}
                          </Badge>
                          
                          <p className="mb-6 text-gray-700">{periodContent.description}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-medium text-islamic-burgundy mb-2">{t("keyEvents")}</h4>
                            <ul className="space-y-2">
                              {periodContent.keyEvents.map((event, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-islamic-gold mr-2">•</span>
                                  <span>{event}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-islamic-burgundy mb-2">{t("significance")}</h4>
                            <p className="text-gray-700">{periodContent.significance}</p>
                          </div>
                        </ContentCard>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default History;
