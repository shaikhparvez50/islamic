
import { useState } from "react";
import { SendIcon, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const IslamicChatbot = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAsk = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD1V6KrXKoUeyFcsmUS7rNe8tOBXb1oB9o",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `You are an Islamic scholar AI. Give answers only based on the Quran, Hadith, and trusted Islamic scholars. Question: ${input}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      const responseText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (responseText) {
        setAnswer(responseText);
      } else {
        setAnswer("Sorry, I couldn't find an Islamic answer to that question right now.");
      }
    } catch (err) {
      console.error(err);
      setAnswer("There was an error processing your request.");
      toast({
        title: "Error",
        description: "Failed to get response from assistant.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  const resetChat = () => {
    setInput("");
    setAnswer("");
    toast({
      title: "Chat Reset",
      description: "Your conversation has been reset.",
    });
  };
  
  return (
    <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white">
      <div className="p-4 bg-islamic-green text-white flex justify-between items-center">
        <h2 className="font-semibold text-lg">Islamic Information Assistant</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={resetChat}
          className="text-white hover:bg-islamic-green/20"
          title="Reset conversation"
        >
          <RefreshCw size={18} />
        </Button>
      </div>
      
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        style={{ minHeight: "350px", maxHeight: "500px" }}
      >
        <div className="flex justify-start animate-fade-in">
          <div className="max-w-[85%] p-3 rounded-lg bg-white border border-gray-200 shadow-sm rounded-bl-none">
            <p className="whitespace-pre-wrap">Assalamu alaikum! I'm your Islamic information assistant. Ask me any questions about Islam, its teachings, history, or practices.</p>
          </div>
        </div>
        
        {answer && (
          <div className="flex justify-start animate-fade-in">
            <div className="max-w-[85%] p-3 rounded-lg bg-white border border-gray-200 shadow-sm rounded-bl-none">
              <p className="whitespace-pre-wrap">{answer}</p>
            </div>
          </div>
        )}
        
        {loading && (
          <div className="flex justify-start animate-fade-in">
            <div className="max-w-[85%] p-3 rounded-lg bg-white border border-gray-200 shadow-sm rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Islam (press Enter to send)..."
          disabled={loading}
          className="min-h-[80px] mb-3 focus:border-islamic-green resize-none"
        />
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Press Shift+Enter for a new line</p>
          <Button 
            onClick={handleAsk} 
            disabled={loading || !input.trim()}
            className="bg-islamic-green hover:bg-islamic-green/90"
          >
            {loading ? "Thinking..." : "Ask"} <SendIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IslamicChatbot;
