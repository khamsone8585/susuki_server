import {Request, Response} from 'express'
import District from '@/model/District'

const districtController={
    getDistrict: async(req: Request, res: Response)=>{
        try{
            const getDistricts = await District.find()
            res.status(200).json({getDistricts})
        }catch(e){
            throw new Error(e)
        }
    }
}

export default districtController