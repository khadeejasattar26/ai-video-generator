"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callGeminiAPI = void 0;
// server/services/geminiService.ts
const axios_1 = __importDefault(require("axios"));
const callGeminiAPI = async (prompt) => {
    try {
        const response = await axios_1.default.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent', {
            contents: [
                {
                    role: 'user',
                    parts: [{ text: prompt }]
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`
            }
        });
        // Extract response text from Gemini
        const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
        return generatedText;
    }
    catch (error) {
        console.error('Gemini API error:', error);
        throw error;
    }
};
exports.callGeminiAPI = callGeminiAPI;
