
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IslamicChatbot from "@/components/IslamicChatbot";
import { useLanguage } from "@/hooks/useLanguage";
import { Book } from "lucide-react";

const Chatbot = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-teal py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in flex items-center justify-center gap-2">
              <Book className="inline-block" size={28} /> {t("chatbot")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ask questions about Islam and receive informative answers based on Islamic teachings.
            </p>
          </div>
        </section>

        {/* Chatbot Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-semibold text-islamic-green mb-2">Islamic Knowledge Assistant</h2>
                <p className="text-gray-600">
                  Get accurate information about Islamic principles, history, practices, and more.
                </p>
              </div>
              
              <IslamicChatbot />
              
              <div className="mt-8 p-4 bg-islamic-gold/10 rounded-lg border border-islamic-gold/20">
                <h3 className="font-medium text-islamic-green mb-2">Usage Tips:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Ask specific questions about Islamic teachings, practices, or history</li>
                  <li>You can inquire about the Quran, Hadith, Prophets, and Islamic principles</li>
                  <li>For complex topics, try breaking them down into simpler questions</li>
                  <li>Press the reset button to start a new conversation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chatbot;
