// pages/api/videos/realestate.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { style } = req.body;

  const videoMap: Record<string, string> = {
    Luxury: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    'Family-Friendly': 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    Minimalist: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    Artistic: 'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
    Cinematic: 'https://samplelib.com/lib/preview/mp4/sample-30s.mp4',
  };

  const videoUrl = videoMap[style] || videoMap["Luxury"];

  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API delay

  res.status(200).json({ videoUrl });
}
