import express from 'express';
import { googleAuth, googleAuthCallback, loginSuccess } from '../controllers/authController.js';



const router=express.Router()

router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback);
router.get('/login/success', loginSuccess);

export default router