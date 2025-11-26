import { GoogleGenAI } from "@google/genai";
import { AIResearchResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const researchYear = async (year: string): Promise<AIResearchResult> => {
  if (!apiKey) {
    return {
      text: "API Key fehlt. Bitte konfiguriere den API Key in der Umgebung.",
      sources: []
    };
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Research key marketing AI breakthroughs and major tech events specifically for the year ${year}. Focus on tools like ChatGPT, Midjourney, Google Gemini, and major industry shifts. Provide a short, exciting summary (max 3 sentences) in German.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "Keine Informationen gefunden.";
    
    // Extract grounding chunks if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks
      .filter((chunk: any) => chunk.web?.uri && chunk.web?.title)
      .map((chunk: any) => ({
        title: chunk.web.title,
        url: chunk.web.uri
      }));

    // Dedup sources
    const uniqueSources = Array.from(new Map(sources.map((item: any) => [item.url, item])).values()) as {title: string, url: string}[];

    return {
      text,
      sources: uniqueSources
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Entschuldigung, ich konnte gerade keine Verbindung zum Neuralen Netzwerk herstellen. Versuch es später noch einmal.",
      sources: []
    };
  }
};
