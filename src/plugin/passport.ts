import passport from 'passport'
import passportJWT from 'passport-jwt'
import {Strategy as LocalStrategy } from 'passport-local'
import User from '../model/User'
import bcrypt from 'bcrypt'

const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt

const secret: string = process.env.JWT_SECRET || 'Khamsone'

// used to serialize the user for the session
passport.serializeUser(function(user: any, done) {
    done(null, user._id); 
   // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    })
})

passport.use('adminLogin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},async(email,password, done)=>{
    try{
        const user: any = await User.findOne({ email })
    
        if(!user){
            return done(null,false,{message: 'Incorrect email'})
        }
        const passwordMatch = bcrypt.compareSync(password, user.password)
        if(!passwordMatch){
            return done(null, false,{ message: 'Incorrect password'})
        }
        done(null, user)
    }catch(e){
        done(e, false)
    }
}))

passport.use('isAuth', new JwtStrategy({ // Use Strategy to find token from a user ( check Auth, return user from db )
    jwtFromRequest:  ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
}, async (payload: any, done: any) => {
        try {
            const user = await User.findById(payload.sub)  // Find the user specified in token
            if(!user) {  // If user doesn't exists, handle it
                return done(null, false)
            }
            done(null, user)  // Otherwise, return the user
        } catch (err) {
            done(err, false)
        }
}))


export const isAuth = passport.authenticate('isAuth', {session: false})

export default passport