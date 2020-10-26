import {Request , Response} from 'express'
import distributor from '@/model/Distributors'


const distributorClient={
    showDistributor: async(req: Request, res: Response)=>{
        try{
            const showDistributors = await distributor.find().populate({
                path: 'districtId',
                populate: 'provinceId'
            }).sort("-createdAt")
            res.status(200).json({showDistributors})
        }catch(e){
            throw new Error(e)
        }
    },
    findIdProducts: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            console.log(id)
            const findId = await distributor.findById(id).populate({
                path: 'districtId',
                populate: 'provinceId'
            })
            res.status(200).json({findId})
        }catch(e){
            throw new Error
        }
    },
    getLimitDistributor: async(req: Request, res: Response)=>{
        const page = parseInt(req.params.page, 10)
        const perPage = parseInt(req.params.perPage, 5)
        try{
            const distributors = await distributor.find()
            .skip((page * perPage) - perPage)
            .limit(perPage)
            .populate({
                path: 'districtId',
                populate: 'provinceId'
            })
            const counts=await distributor.find().countDocuments()
        res.status(200).json({distributors, counts})
        }catch(e){
            throw new Error(e)
        }
    }
}
export default distributorClient