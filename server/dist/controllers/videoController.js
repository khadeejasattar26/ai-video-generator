"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRealEstateVideo = exports.generateMarketingVideo = void 0;
// server/controllers/videoController.ts
const veoService_1 = require("../services/veoService");
const generateMarketingVideo = async (req, res) => {
    const { features, tone, audience, style } = req.body;
    const prompt = `Create a product marketing video with features: ${features}, tone: ${tone}, audience: ${audience}, style: ${style}`;
    const videoUrl = await (0, veoService_1.generateVeoVideo)(prompt);
    res.json({ videoUrl });
};
exports.generateMarketingVideo = generateMarketingVideo;
const generateRealEstateVideo = async (req, res) => {
    const { style } = req.body;
    const prompt = `Create a real estate walkthrough video in ${style} style.`;
    const videoUrl = await (0, veoService_1.generateVeoVideo)(prompt);
    res.json({ videoUrl });
};
exports.generateRealEstateVideo = generateRealEstateVideo;
