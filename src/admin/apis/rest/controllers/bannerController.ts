import {Request, Response} from 'express'
import banner from '@/model/banner'

const bannerController = {
    addBanner: async(req: Request, res: Response)=>{
        const{image,url}=req.body
        try{
            const addBanners = new banner({
                image,
                url
            })
            await addBanners.save()
            res.status(200).json({addBanners})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getBanner: async(req: Request, res: Response)=>{
        try{
            const getBanners = await banner.find()
            res.status(200).json({getBanners})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateBanner: async(req: Request, res: Response)=>{
        const {id,image,url}=req.body
        try{
            const updateBanners = await banner.findByIdAndUpdate(id,{
                image,
                url
            },{runValidators: true, new: true})
            res.status(200).json({updateBanners})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteBanner: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await banner.findByIdAndDelete(id)
            res.status(200).json('Delete Complete')
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdBanner: async(req:Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await banner.findById(id)
            res.status(200).json(findId)
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default bannerController