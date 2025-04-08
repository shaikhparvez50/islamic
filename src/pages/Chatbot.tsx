
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslamicChatbot from "@/components/IslamicChatbot";
import { useLanguage } from "@/hooks/useLanguage";

const Chatbot = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-teal py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              Islamic Assistant
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ask questions about Islam and receive informative answers from our AI assistant.
            </p>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto h-[600px]">
              <IslamicChatbot />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
