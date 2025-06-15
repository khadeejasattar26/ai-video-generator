// src/services/veoService.ts

export const generateVeoVideo = async (prompt: string): Promise<{ videoUrl: string }> => {
  console.log('[Mock] Generating Veo video with prompt:', prompt);

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Return a static or mock video URL
  return {
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
  };
};
