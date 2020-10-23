import {Request, Response} from 'express'
import aboutUs from '@/model/aboutUs'
const aboutUsController = {
    addAboutUs: async(req: Request, res: Response)=>{
        const{detail}=req.body
        try{
            const addAboutUss = new aboutUs({
                detail
            })
            await addAboutUss.save()
            res.status(200).json({addAboutUss})
        }catch(e){
            res.status(400).json(e)
        }
    },
    showAboutUs: async(req: Request, res: Response)=>{
        try{
            const showAboutUss = await aboutUs.findOne()
            res.status(200).json({showAboutUss})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateAboutUs: async(req: Request, res: Response)=>{
        const{id,detail}= req.body
        try{
            const updateAboutUss = await aboutUs.findOneAndUpdate({},{
                $set:{
                    detail
                }
            },{runValidators:true, new: true})
            res.status(200).json({updateAboutUss})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteAboutUs: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await aboutUs.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
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

export default aboutUsController