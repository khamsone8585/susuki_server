import {Request, Response} from 'express'
import District from '@/model/Di'
import distributor from '@/model/Distributors'

require('../../../../model/Di')

const distributorController ={
    addDistributor: async(req: Request, res: Response)=>{
        const{
            districtId,
            map,
            image,
            dealerCompany,
            village,
            telephone,
            facebook
        }=req.body
        try{
            const distributors = new distributor({
                districtId,
                map,
                image,
                dealerCompany,
                village,
                telephone,
                facebook
            })
            await distributors.save()
            res.status(200).json({distributors})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getDistributor: async(req: Request , res: Response)=>{
        try{
            // const d = await District.findOne().populate('ProvinceId')
            // console.log(d)
            const getDistributors: any = await distributor.find()
            .populate({
                path: 'districtId',
                populate: 'provinceId'
            })
            // .populate({
            //     path: 'DistrictId'
            // })
            
            // console.log(getDistributors)

            res.status(200).json({getDistributors})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateDistributor: async(req: Request, res: Response)=>{
        const{
            id,
            districtId,
            map,
            image,
            dealerCompany,
            village,
            telephone,
            facebook
        }=req.body
        try{
            const updateDistributors = await distributor.findByIdAndUpdate(id,{
                $set:{
                    districtId,
                    map,
                    image,
                    dealerCompany,
                    village,
                    telephone,
                    facebook
                }
            },{runValidators:true, new:true}).populate({
                path: 'districtId',
                populate: 'provinceId'
            })
            res.status(220).json({updateDistributors})
        }catch(err){
            throw new Error(err)
        }
    },
    deleteDistributor: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await distributor.findByIdAndDelete(id)
            res.status(200).json('Delete Complete')
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdsDistributor: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await distributor.findById(id).populate({
                path: 'districtId',
                populate: 'provinceId'
            })
            res.status(200).json(findId)
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

export default distributorController