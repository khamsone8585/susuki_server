import {Request, Response} from 'express'
import District from '@/model/Di'
import Distributor from '@/model/Distributors'

require('../../../../model/Di')

const distributorController ={
    addDistributor: async(req: Request, res: Response)=>{
        const{
            districtId,
            distributor,
            map
        }=req.body
        try{
            const distributors = new Distributor({
                districtId,
                distributor,
                map
            })
            await distributors.save()
            res.status(200).json({distributors})
        }catch(e){
            throw new Error(e)
        }
    },
    getDistributor: async(req: Request , res: Response)=>{
        try{
            // const d = await District.findOne().populate('ProvinceId')
            // console.log(d)
            const getDistributors: any = await Distributor.find()
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
            throw new Error(e)
        }
    },
    updateDistributor: async(req: Request, res: Response)=>{
        const{
            id,
            districtId,
            distributor,
            map
        }=req.body
        try{
            const updateDistributors = await Distributor.findByIdAndUpdate(id,{
                $set:{
                    districtId,
                    distributor,
                    map
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
            await Distributor.findByIdAndDelete(id)
            res.status(200).json('Delete Complete')
        }catch(e){
            throw new Error(e)
        }
    }
}

export default distributorController