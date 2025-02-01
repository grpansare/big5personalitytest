import express from 'express';

import { saveresult, getResults } from '../controllers/ResultController.js';

const router = express.Router();     // Set up the router

// Define your routes here

  // Export the router for use in other files


  
router.post('/save-result',saveresult)
router.get('/get-results/:username',getResults)
 
export default router