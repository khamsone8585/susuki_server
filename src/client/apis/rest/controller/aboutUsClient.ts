import {Request, Response} from 'express'
import aboutUs from '@/model/aboutUs'
const aboutUsClient = {
    showAboutUs: async(req: Request, res: Response)=>{
        try{
            const showAboutUss = await aboutUs.findOne().sort("-createdAt")
            res.status(200).json({showAboutUss})
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdAboutUs: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            const findId = await aboutUs.findById(id)
            res.status(200).json({findId})
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default aboutUsClient