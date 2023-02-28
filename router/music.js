import express from 'express';
import { getMusic, createMusic } from '../controller/music.js';

const router = express.Router();

router.get('/music', getMusic)
router.post('/music', createMusic)

export default router;