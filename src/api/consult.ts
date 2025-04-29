import env from '../config/env';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'; // Keeping the type for compatibility
  content: string;
}

export async function handleConsultRequest(messages: ChatMessage[], prompt: string): Promise<string> {
  const apiKey = env.GEMINI_API_KEY;
  
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not defined. Please add it to your .env file as VITE_GEMINI_API_KEY');
  }

  // Filter out system messages and convert assistant to model role
  const formattedMessages = messages
    .filter(msg => msg.role !== 'system') // Remove system messages
    .map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user', // Only 'user' or 'model' allowed
      parts: [{ text: msg.content }]
    }));

  // If you need to include the system prompt, prepend it as a user message
  if (prompt) {
    formattedMessages.unshift({
      role: 'user',
      parts: [{ text: prompt }]
    });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: formattedMessages,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
      'I apologize, but I was unable to provide an appropriate response at this time.';
    
    return generatedText;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while processing your request'
    );
  }
}