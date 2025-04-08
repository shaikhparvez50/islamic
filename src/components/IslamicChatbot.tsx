
import { useState } from "react";
import { SendIcon, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { Separator } from "@/components/ui/separator";
import { sendMessageToGemini } from "@/services/geminiService";

const IslamicChatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "model",
      content: "Assalamu alaikum! I'm your Islamic information assistant. Ask me any questions about Islam, its teachings, history, or practices."
    }
  ]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();
  
  const handleAsk = async () => {
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    
    try {
      // Prepare messages for the API
      const messagesForAPI = [
        { 
          role: "user", 
          content: "You are an Islamic scholar AI assistant. Always respond with information from authentic Islamic sources only. Be respectful and concise."
        },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: userMessage.role, content: userMessage.content }
      ];
      
      // Send to Gemini API using our service
      const responseText = await sendMessageToGemini(messagesForAPI);
      
      // Add response to chat
      const botMessage = {
        id: Date.now().toString(),
        role: "model",
        content: responseText
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
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
    setMessages([
      {
        id: "welcome",
        role: "model",
        content: "Assalamu alaikum! I'm your Islamic information assistant. Ask me any questions about Islam, its teachings, history, or practices."
      }
    ]);
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
      
      <Separator />
      
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
        style={{ minHeight: "350px", maxHeight: "500px" }}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-islamic-green text-white rounded-br-none"
                  : "bg-white border border-gray-200 shadow-sm rounded-bl-none"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        
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
      
      <Separator />
      
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
            {loading ? "Sending..." : "Send"} <SendIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IslamicChatbot;
