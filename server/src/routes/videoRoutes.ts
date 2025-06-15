// server/src/routes/videoRoutes.ts
import { Router } from 'express';
import { generateMarketingVideo, generateRealEstateVideo } from '../controllers/videoController';

const router = Router();

router.post('/marketing', generateMarketingVideo);
router.post('/realestate', generateRealEstateVideo);

export default router;
