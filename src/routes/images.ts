import express from 'express';
import { resizeImage } from '../controllers/imageController';

const router = express.Router();

router.get('/', resizeImage);

export default router;
