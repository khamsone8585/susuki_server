import {Request, Response} from 'express'
import banner from '@/model/banner'

const bannerClient = {
    showBanner: async(req: Request, res: Response)=>{
        try{
            const getBanners = await banner.find().sort("-createdAt")
            res.status(200).json({getBanners})
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default bannerClient