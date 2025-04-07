
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentCard from "@/components/ContentCard";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, Compass } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface PrayerTime {
  name: string;
  time: string;
  icon: React.ReactNode;
}

const Namaz = () => {
  const { t } = useLanguage();
  const [location, setLocation] = useState<string>("Your Location");
  const [date, setDate] = useState<Date>(new Date());
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([
    { name: "Fajr", time: "04:32 AM", icon: <Clock className="text-islamic-blue" /> },
    { name: "Dhuhr", time: "12:15 PM", icon: <Clock className="text-islamic-gold" /> },
    { name: "Asr", time: "03:45 PM", icon: <Clock className="text-islamic-green" /> },
    { name: "Maghrib", time: "06:32 PM", icon: <Clock className="text-islamic-burgundy" /> },
    { name: "Isha", time: "08:05 PM", icon: <Clock className="text-blue-900" /> },
  ]);

  // This would be replaced with actual API call in a real app
  useEffect(() => {
    // Mock getting user's location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // In a real app, you would use these coordinates to get the city name
          // and then fetch prayer times for that location
          console.log(position.coords.latitude, position.coords.longitude);
          setLocation("Your Current Location");
        });
      }
    };
    
    getLocation();
  }, []);

  // This would be replaced with actual API call when date changes
  useEffect(() => {
    // Simulate updating prayer times based on date
    console.log("Date changed:", date);
    // In a real app, you would fetch prayer times for the selected date
  }, [date]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-blue py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              {t("namaz")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("footerDescription")}
            </p>
          </div>
        </section>

        {/* Prayer Times Section */}
        <section className="py-12 islamic-pattern-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-6 animate-fade-in">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-islamic-green" />
                  <span className="font-medium">{location}</span>
                </div>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="border-islamic-blue flex items-center gap-2 animate-hover-scale">
                      <Calendar className="h-4 w-4" />
                      <span>{format(date, "PPP")}</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={(date) => date && setDate(date)}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {prayerTimes.map((prayer, index) => (
                  <div 
                    key={prayer.name}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {prayer.icon}
                        <h3 className="font-medium">{prayer.name}</h3>
                      </div>
                      <span className="text-islamic-blue font-bold">{prayer.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Pray Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-islamic-blue">
              {t("howToPray")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ContentCard 
                title={t("prayerSteps")}
                className="animate-fade-in"
                icon={<Compass className="text-islamic-gold" />}
              >
                <ol className="space-y-4">
                  <li className="flex items-start group">
                    <span className="bg-islamic-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">1</span>
                    <div>
                      <h4 className="font-medium text-islamic-green">Intention (Niyyah)</h4>
                      <p className="text-gray-700">Make the intention to pray by specifying which prayer you are about to perform.</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="bg-islamic-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">2</span>
                    <div>
                      <h4 className="font-medium text-islamic-green">Standing (Qiyam)</h4>
                      <p className="text-gray-700">Stand facing the Qibla with hands raised to the ears saying "Allahu Akbar".</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="bg-islamic-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">3</span>
                    <div>
                      <h4 className="font-medium text-islamic-green">Recitation (Qira'at)</h4>
                      <p className="text-gray-700">Recite Surah Al-Fatiha followed by any passage from the Quran.</p>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <span className="bg-islamic-green text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">4</span>
                    <div>
                      <h4 className="font-medium text-islamic-green">Bowing (Ruku)</h4>
                      <p className="text-gray-700">Bow with hands on knees saying "Subhana Rabbiyal Azeem".</p>
                    </div>
                  </li>
                </ol>
              </ContentCard>
              
              <ContentCard 
                title={t("prayerRules")}
                className="animate-fade-in" 
                style={{ animationDelay: "0.2s" }}
                icon={<Clock className="text-islamic-blue" />}
              >
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className="text-islamic-gold mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                    <span className="group-hover:text-islamic-blue transition-colors duration-300">Face the Qibla (direction of the Kaaba)</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-islamic-gold mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                    <span className="group-hover:text-islamic-blue transition-colors duration-300">Ensure cleanliness through Wudu (ablution)</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-islamic-gold mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                    <span className="group-hover:text-islamic-blue transition-colors duration-300">Wear clean and modest clothing</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-islamic-gold mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                    <span className="group-hover:text-islamic-blue transition-colors duration-300">Pray on a clean surface or prayer mat</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-islamic-gold mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                    <span className="group-hover:text-islamic-blue transition-colors duration-300">Maintain focus and concentration during prayer</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-islamic-gold mr-2 transition-transform duration-300 group-hover:scale-125">•</span>
                    <span className="group-hover:text-islamic-blue transition-colors duration-300">Complete all required movements and recitations</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-islamic-lightgreen rounded-lg">
                  <h4 className="font-medium text-islamic-green mb-2">Rakat Count by Prayer</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm">Fajr: 2 Rakat</div>
                    <div className="text-sm">Dhuhr: 4 Rakat</div>
                    <div className="text-sm">Asr: 4 Rakat</div>
                    <div className="text-sm">Maghrib: 3 Rakat</div>
                    <div className="text-sm">Isha: 4 Rakat</div>
                  </div>
                </div>
              </ContentCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Namaz;
