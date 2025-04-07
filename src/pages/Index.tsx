
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard";
import TreeNode from "@/components/TreeNode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="islamic-pattern-bg py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-islamic-green animate-fade-in">
              {t("welcomeMessage")}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-700 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("exploreMessage")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild className="bg-islamic-green hover:bg-islamic-green/90 text-white shadow-md transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
                <Link to="/learn">{t("startLearning")}</Link>
              </Button>
              <Button asChild variant="outline" className="btn-animate border-islamic-gold text-islamic-gold hover:bg-islamic-gold/10">
                <Link to="/quran">{t("exploreQuran")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction to Tree Structure */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-islamic-blue">
              {t("exploreMessage")}
            </h2>
            
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg animate-fade-in">
              <TreeNode 
                title={t("allahTitle")} 
                content={<p className="text-gray-700">{t("allahDescription")}</p>}
                defaultExpanded={true}
              >
                <TreeNode 
                  title={t("muhammadTitle")} 
                  content={<p className="text-gray-700">{t("muhammadDescription")}</p>}
                  defaultExpanded={true}
                >
                  <TreeNode title={t("pillarsOfIslam")} />
                  <TreeNode title={t("prophets")} />
                  <TreeNode title={t("quran")} />
                  <TreeNode title={t("history")} />
                </TreeNode>
              </TreeNode>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-islamic-blue">
              {t("exploreMessage")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContentCard 
                title={t("pillarsOfIslam")}
                className="animate-fade-in"
                icon={<span className="text-islamic-gold">☪</span>}
              >
                <p className="mb-4 text-gray-700">
                  {t("footerDescription")}
                </p>
                <Button asChild variant="outline" className="w-full mt-4 btn-animate">
                  <Link to="/learn">{t("learnMore")}</Link>
                </Button>
              </ContentCard>
              
              <ContentCard 
                title={t("quran")}
                className="animate-fade-in"
                icon={<span className="text-islamic-gold">📖</span>}
              >
                <p className="mb-4 text-gray-700">
                  {t("footerDescription")}
                </p>
                <Button asChild variant="outline" className="w-full mt-4 btn-animate">
                  <Link to="/quran">{t("learnMore")}</Link>
                </Button>
              </ContentCard>
              
              <ContentCard 
                title={t("prophets")}
                className="animate-fade-in"
                icon={<span className="text-islamic-gold">👳‍♂️</span>}
              >
                <p className="mb-4 text-gray-700">
                  {t("footerDescription")}
                </p>
                <Button asChild variant="outline" className="w-full mt-4 btn-animate">
                  <Link to="/prophets">{t("learnMore")}</Link>
                </Button>
              </ContentCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
