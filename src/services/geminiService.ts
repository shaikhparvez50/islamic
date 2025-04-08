
// NOTE: It's not recommended to store API keys directly in code.
// This is a temporary solution for demonstration purposes.
const GEMINI_API_KEY = "AIzaSyD1V6KrXKoUeyFcsmUS7rNe8tOBXb1oB9o";
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

export interface GeminiMessage {
  role: "user" | "model";
  content: string;
}

export interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export const sendMessageToGemini = async (messages: GeminiMessage[]): Promise<string> => {
  try {
    // Format the conversation for Gemini API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: formattedMessages,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json() as GeminiResponse;
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Unexpected API response format');
    }
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    return "I'm sorry, I couldn't process your request at the moment. Please try again later.";
  }
};
