
import { useState, useRef, useEffect } from "react";
import { SendIcon, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";
import { GeminiMessage, sendMessageToGemini } from "@/services/geminiService";

interface ChatMessage extends GeminiMessage {
  id: string;
}

const IslamicChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      content: "Assalamu alaikum! I'm your Islamic information assistant. Ask me any questions about Islam, its teachings, history, or practices."
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputMessage
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      // Add Islamic context to the conversation
      const messagesForAPI: GeminiMessage[] = [
        { 
          role: "user", 
          content: "You are an Islamic information assistant. Provide accurate, respectful information about Islam. If asked about something unrelated to Islam, politely redirect to Islamic topics. Keep responses concise and informative."
        },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        userMessage
      ];
      
      const response = await sendMessageToGemini(messagesForAPI);
      
      const botMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "model",
        content: response
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from assistant.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-islamic-green text-white flex justify-between items-center">
        <h2 className="font-semibold text-lg">Islamic Information Assistant</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={resetChat}
          className="text-white hover:bg-islamic-green/20"
        >
          <RefreshCw size={18} />
        </Button>
      </div>
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-islamic-green text-white rounded-br-none"
                  : "bg-white border border-gray-200 shadow-sm rounded-bl-none"
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-white border border-gray-200 shadow-sm rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Islam..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading || !inputMessage.trim()}
            className="bg-islamic-green hover:bg-islamic-green/90"
          >
            <SendIcon size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IslamicChatbot;
