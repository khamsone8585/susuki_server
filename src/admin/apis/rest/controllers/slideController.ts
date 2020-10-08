import {Request, Response} from 'express'
import slidebanner from '@/model/slidebanner'

const slideController = {
    addSlide: async(req: Request, res: Response)=>{
        const {image,url}=req.body
        try{
            const addSlides = new slidebanner({
                image,
                url
            })
            await addSlides.save()
            res.status(200).json({addSlides})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getSlide: async(req: Request, res: Response)=>{
        try{
            const getSlides = await slidebanner.find()
            res.status(200).json({getSlides})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateSlide: async(req: Request, res: Response)=>{
        const {id,image,url}=req.body
        try{
            const updateSlides = await slidebanner.findByIdAndUpdate(id,{
                $set:{
                    image,
                    url
                }
            },{runValidators:true, new:true})
            res.status(220).json({updateSlides})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteSlide: async(req:Request, res: Response)=>{
        const{id}=req.params
        try{
            await slidebanner.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default slideController