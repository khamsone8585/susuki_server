import {blogSchema,distributorSchema,productsSchema,userSchema,bannerSchema} from '../Schema/schema'
import {Request, Response, NextFunction} from 'express'

const blogValidator = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await blogSchema.validateAsync(req.body)
    }catch(e){
        return res.status(400).json({error: e.details[0].message })
    }
    next()
}

const distributorValidator = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await distributorSchema.validateAsync(req.body)
    }catch(e){
        return res.status(400).json({error: e.details[0].message})
    }
    next()
}

const productsValidator = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await productsSchema.validateAsync(req.body)
    }catch(e){
        return res.status(400).json({error: e.details[0].message})
    }
    next()
}

const userValidator = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await userSchema.validateAsync(req.body)
    }catch(e){
        
        return res.status(400).json({error: e.details[0].message})
    }
    next()
}

const bannerValidator = async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await bannerSchema.validateAsync(req.body)
    }catch(e){
        return res.status(400).json({error: e.details[0].message})
    }
}

