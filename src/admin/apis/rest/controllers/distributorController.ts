import {Request, Response} from 'express'
import District from '@/model/District'
import Distributor from '@/model/Distributors'

const distributorController ={
    addDistributor: async(req: Request, res: Response)=>{
        const{
            distributor,
            Village,
            DistrictId,
            mobile,
            facebook,
            map
        }=req.body
        try{
            const distributors = new Distributor({
                distributor,
                Village,
                DistrictId,
                mobile,
                facebook,
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
            const getDistributors = await Distributor.find().populate(['$districts._id'])
            res.status(200).json({getDistributors})
        }catch(e){
            throw new Error(e)
        }
    },
    updateDistributor: async(req: Request, res: Response)=>{
        const{
            id,
            distributor,
            Village,
            DistrictId,
            mobile,
            facebook,
            map
        }=req.body
        try{
            const updateDistributors = await Distributor.findByIdAndUpdate(id,{
                $set:{
                    distributor,
                    Village,
                    DistrictId,
                    mobile,
                    facebook,
                    map
                }
            },{runValidators:true, new:true}).populate(['$districts._id'])
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