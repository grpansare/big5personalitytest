// config/passportConfig.js
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-google-oauth2';


import userModel from '../models/userSchema.js';
const GOOGLE_CLIENT_ID="1036258006429-p744hl3lki6efg40tmd1vasjhb7jr1as.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"


passport.use(
    new OAuth2Strategy({
        clientID:GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:6006/auth/google/callback',
        scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const email=profile.emails[0].value
            const username=email.split('@')[0]
            let user = await userModel.findOne({ googleId: profile.id });
            if (!user) {
                user = new userModel({
                  
                    fullname: profile.displayName,
                    username:username,
                    email: profile.emails[0].value,
                    image: profile.photos[0].value,
                });
                await user.save();
            }
            return done(null, user);
        } catch (err) {
            return done(err, null);
        }
    })
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

export default passport;

