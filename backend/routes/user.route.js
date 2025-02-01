import express from 'express';
import { signUp, signIn, updateUser, sendEmail, changepass, logout, uploadProfile } from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyToken.js';
import upload from '../utils/multer.js';

const router = express.Router();     // Set up the router

// Define your routes here

  // Export the router for use in other files


  
router.post('/signup',signUp)
router.post('/signin',signIn)
router.put('/update/:id',verifyToken,updateUser)
router.post('/sendemail',sendEmail)
router.post('/changepassword',changepass)
router.put('/upload/:id', upload.single('file'), uploadProfile)
router.post('/logout',logout)
 
export default router