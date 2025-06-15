"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const videoController_1 = require("../controllers/videoController");
const router = express_1.default.Router();
router.post('/marketing', videoController_1.generateMarketingVideo);
router.post('/realestate', videoController_1.generateRealEstateVideo);
exports.default = router;
