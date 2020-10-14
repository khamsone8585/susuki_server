import {Request, Response} from 'express'
import slideBanner from '@/model/slidebanner'

const slideClient = {
    getSlide: async(req: Request, res: Response)=>{
        try{
            const getSlides = await slideBanner.find()
            res.status(200).json({getSlides})
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default slideClient