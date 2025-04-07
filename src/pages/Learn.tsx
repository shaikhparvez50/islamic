
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { pillarsOfIslam } from "@/data/pillarsOfIslam";
import { Badge } from "@/components/ui/badge";

const Learn = () => {
  const { t, getContent } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-green py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              {t("pillarsOfIslam")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("footerDescription")}
            </p>
          </div>
        </section>

        {/* Pillars of Islam Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillarsOfIslam.map((pillar) => {
                const pillarContent = getContent(pillarsOfIslam, pillar.id);
                
                if (!pillarContent) return null;
                
                return (
                  <ContentCard 
                    key={pillar.id}
                    title={pillarContent.title}
                    className="animate-fade-in"
                  >
                    <p className="mb-6 text-gray-700">{pillarContent.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-islamic-green mb-2">{t("benefits")}</h4>
                      <ul className="space-y-2">
                        {pillarContent.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-islamic-gold mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-islamic-green mb-2">{t("howTo")}</h4>
                      <p className="text-gray-700">{pillarContent.howTo}</p>
                    </div>
                    
                    <Badge className="mt-4 bg-islamic-green/10 text-islamic-green hover:bg-islamic-green/20 border border-islamic-green/20">
                      {pillar.id}
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

export default Learn;
