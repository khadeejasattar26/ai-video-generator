// server/services/geminiService.ts
import axios from 'axios';

export const callGeminiAPI = async (prompt: string) => {
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
      {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
        }
      }
    );

    // Extract response text from Gemini
    const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
    return generatedText;

  } catch (error) {
    console.error('Gemini API error:', error);
    throw error;
  }
};
