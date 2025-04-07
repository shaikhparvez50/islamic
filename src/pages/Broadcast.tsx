
import { useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import ContentCard from "@/components/ContentCard";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Broadcast = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Set the document title when the component mounts
    document.title = `${t("broadcast")} | ${t("siteName")}`;
  }, [t]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-islamic-green mb-8 text-center animate-fade-in">
        {t("broadcast")}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ContentCard 
          title={t("recentBroadcast")} 
          icon={<Play className="text-islamic-blue" />}
          className="animate-fade-in hover:-translate-y-2 transition-all duration-500"
          style={{ animationDelay: '100ms' }}
        >
          <div className="aspect-video mb-4 rounded-lg overflow-hidden border border-islamic-green/20">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/NwQvIFnMn0A" 
              title="Islamic Broadcast" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <h3 className="text-xl font-semibold text-islamic-green mb-2">
            {t("broadcastTitle1")}
          </h3>
          <p className="text-gray-700">
            {t("broadcastDescription1")}
          </p>
          <div className="mt-4">
            <Button 
              variant="outline" 
              className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white transition-all duration-300 animate-hover-scale"
            >
              <Play size={16} className="mr-2" />
              {t("watchFull")}
            </Button>
          </div>
        </ContentCard>

        <ContentCard 
          title={t("featuredBroadcast")} 
          icon={<Play className="text-islamic-blue" />}
          className="animate-fade-in hover:-translate-y-2 transition-all duration-500"
          style={{ animationDelay: '200ms' }}
        >
          <div className="aspect-video mb-4 rounded-lg overflow-hidden border border-islamic-green/20">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/soj_Z5nABW0" 
              title="Islamic Broadcast" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <h3 className="text-xl font-semibold text-islamic-green mb-2">
            {t("broadcastTitle2")}
          </h3>
          <p className="text-gray-700">
            {t("broadcastDescription2")}
          </p>
          <div className="mt-4">
            <Button 
              variant="outline" 
              className="border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white transition-all duration-300 animate-hover-scale"
            >
              <Play size={16} className="mr-2" />
              {t("watchFull")}
            </Button>
          </div>
        </ContentCard>
      </div>

      <div className="mt-12">
        <ContentCard 
          title={t("allBroadcasts")} 
          className="animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="group">
                <div className="aspect-video mb-2 rounded-lg overflow-hidden relative border border-islamic-green/20 hover:shadow-lg transition-all duration-300">
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Play size={40} className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
                  </div>
                  <img 
                    src={`https://picsum.photos/seed/${index + 10}/640/360`} 
                    alt="Broadcast thumbnail" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-islamic-green truncate">
                  {t("broadcastShortTitle")} {index}
                </h4>
                <p className="text-sm text-gray-500">{t("broadcastDate")}</p>
              </div>
            ))}
          </div>
        </ContentCard>
      </div>
    </div>
  );
};

export default Broadcast;
