
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { questions } from "@/data/questions";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  const { t, getContent } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter questions based on search query
  const filteredQuestions = questions.filter((q) => {
    const questionContent = getContent(questions, q.id);
    if (!questionContent) return false;
    
    const queryLower = searchQuery.toLowerCase();
    return (
      questionContent.question.toLowerCase().includes(queryLower) ||
      questionContent.answer.toLowerCase().includes(queryLower) ||
      q.category.toLowerCase().includes(queryLower)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-islamic-teal py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in">
              {t("questions")}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {t("footerDescription")}
            </p>
          </div>
        </section>

        {/* Q&A Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search questions..."
                  className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 focus:border-islamic-teal focus:ring focus:ring-islamic-teal/20 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Questions Accordion */}
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredQuestions.map((q) => {
                  const questionContent = getContent(questions, q.id);
                  if (!questionContent) return null;
                  
                  return (
                    <AccordionItem 
                      key={q.id} 
                      value={q.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                        <span className="text-left font-medium">{questionContent.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-2 text-gray-700">
                        {questionContent.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
                
                {filteredQuestions.length === 0 && (
                  <div className="text-center py-10 text-gray-500">
                    <p>No questions found matching your search.</p>
                  </div>
                )}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Questions;
