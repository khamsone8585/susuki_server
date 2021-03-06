import { authenticate } from 'passport'
import {Request, Response, NextFunction } from 'express'

export const adminLogin = (req: Request, res: Response, next: NextFunction) =>{
    authenticate('adminLogin',{session: false}, async (err, user, info)=>{
    
        if(err) return next(err)
        if(!user){
            if(info.message === 'Incorrect email') return res.status(401).json({message: info.message})
            else if (info.message === 'Incorrect password') return res.status(401).json({message: info.message})
        }
        req.logIn(user,(err)=>{
        if(err) return next(err)
        next()
        })
    })(req,res,next)
}

// export const userSignIn = (req: Request, res: Response, next: NextFunction) =>{
//     authenticate('userSignIn',{session: false}, async (err, User, info)=>{
//         if(err) return next(err)
//         if(!User){
//             if(info.message === 'Incorrect email') return res.status(401).json({message: info.message})
//             else if (info.message === 'Incorrect password') return res.status(401).json({message: info.message})
//         }
//         req.logIn(User,(err)=>{
//         if(err) return next(err)
//         next()
//         })
//     })(req,res,next)
// }