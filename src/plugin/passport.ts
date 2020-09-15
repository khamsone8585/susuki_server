import passport from 'passport'
import passportJWT from 'passport-jwt'
import {Strategy as LocalStrategy } from 'passport-local'
import Users from '@/model/User'
import bcrypt from 'bcrypt'

const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt

const secret: string = process.env.JWT_SECRET || 'Khamsone'

//used to serialize the user for the session

passport.serializeUser((User, done) => {
    done(null, User)
})
//used to deserialize the user
passport.deserializeUser((id,done)=>{
    Users.findById(id,(err,User) =>{
        done(err,User)
    })
})

passport.use('adminSignIn', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},async(email,password, done)=>{
    try{
        const User: any = await Users.findOne({ email })
        if(!User){
            return done(null,false,{message: 'Incorrect email'})
        }
        const passwordMatch = bcrypt.compareSync(password, User.password)
        if(!passwordMatch){
            return done(null, false,{ message: 'Incorrect password'})
        }
        done(null, User)
    }catch(e){
        done(e, false)
    }
}))


passport.use('userSignIn', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},async(email,password, done)=>{
    try{
        const User: any = await Users.findOne({ email })
        if(!User){
            return done(null,false,{message: 'Incorrect email'})
        }
        const passwordMatch = bcrypt.compareSync(password, User.password)
        if(!passwordMatch){
            return done(null, false,{ message: 'Incorrect password'})
        }
        done(null, User)
    }catch(e){
        done(e, false)
    }
}))
export default passport