
import { GoogleGenAI, Type } from "@google/genai";
import { Job, User } from "../types";

export const analyzeJobMatch = async (user: User, job: Job): Promise<{ score: number; reason: string }> => {
  // Always initialize with process.env.API_KEY directly inside the call to ensure the latest key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Analyze the match between a job seeker and a job posting.
    Seeker Skills: ${user.skills?.join(', ') || 'Not specified'}
    Seeker Bio: ${user.bio || 'Not specified'}
    
    Job Title: ${job.title}
    Job Description: ${job.description}
    Job Requirements: ${job.requirements.join(', ')}
    
    Return a match percentage (0-100) and a short 1-sentence reason in Somali.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER },
            reason: { type: Type.STRING }
          },
          required: ["score", "reason"]
        }
      }
    });

    // Directly access .text property from GenerateContentResponse
    const result = JSON.parse(response.text || '{}');
    return {
      score: result.score || 0,
      reason: result.reason || "Codsigaaga si fiican ayaa loo eegay."
    };
  } catch (error) {
    console.error("AI Matching Error:", error);
    return { score: 50, reason: "Xog kooban ayaa la helay." };
  }
};

export const generateJobSummary = async (description: string): Promise<string> => {
  // Always initialize with process.env.API_KEY directly inside the call
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Summarize this job description into 3 bullet points in Somali: ${description}`
  });
  // Directly access .text property from GenerateContentResponse
  return response.text || "Summary unavailable.";
};
