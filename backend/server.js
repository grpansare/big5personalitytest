 // Load environment variables right at the start

import express from 'express';
import session from 'express-session';
import cors from 'cors';
import passport from './config/passportConfig.js';
import authRoutes from './routes/google_auth.route.js';
import resultroutes from './routes/result.route.js';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import path from 'path';
import userRoutes from './routes/user.route.js';

 import ('./db/conn.js');
 
 const app = express();
 import { fileURLToPath } from 'url';


 const PORT = process.env.PORT || 6006;
 console.log(PORT);
 
 
 
 
 // Middleware
 app.use(cors({
     origin: "https://big5personalitytest.onrender.com",
     methods: "GET,POST,PUT,DELETE",
     credentials: true,
 }));
 app.use(express.json());


app.use(cookieParser());



app.use(
    session({
      name: "customSessionKey", // Custom cookie name
      secret: "yourSecretKey",  // Secret for signing the cookie
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "strict", // Adjust SameSite policy as needed
      },
    })
  );



 
//  Initialize passport and session handling
 app.use(passport.initialize());
 app.use(passport.session());
 
 
 // Routes


 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);
 
 // Serve static files from the 'uploads' folder
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

 app.use('/auth', authRoutes);
 app.use('/user',userRoutes)
 app.use('/result',resultroutes)
 
 // Start server
 app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});
 