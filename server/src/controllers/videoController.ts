// server/src/controllers/videoController.ts
import { Request, Response } from 'express';
import { generateVeoVideo } from '../services/veoService';

export const generateMarketingVideo = async (req: Request, res: Response) => {
  try {
    const { features = '', tone = '', audience = '', style = '' } = req.body;

    const prompt = `Create a product marketing video with features: ${features}, tone: ${tone}, audience: ${audience}, style: ${style}`;

    const { videoUrl } = await generateVeoVideo(prompt);

    res.status(200).json({ videoUrl });
  } catch (error) {
    console.warn("Veo unavailable for marketing, using fallback video");
    res.status(200).json({
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
    });
  }
};

export const generateRealEstateVideo = async (req: Request, res: Response) => {
  try {
    const { style = 'luxury' } = req.body;

    const prompt = `
      Generate a real estate video tour in a ${style} style for the following listing:
      - Address: 12012 Crest Ct, Beverly Hills, CA 90210
      - Price: $10,183,985
      - Bedrooms: 5
      - Bathrooms: 6.5
      - Square Footage: 6,100
      - Features: Luxury estate, three-car garage, landscaped grounds, elegant entrance with grand staircase, modern design, prime Beverly Hills location.
    `;

    const { videoUrl } = await generateVeoVideo(prompt);

    res.status(200).json({ videoUrl });
  } catch (error) {
    console.warn("Veo unavailable for real estate, using fallback video");
    res.status(200).json({
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    });
  }
};
