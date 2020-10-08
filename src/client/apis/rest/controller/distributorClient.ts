import {Request , Response} from 'express'
import distributor from '@/model/Distributors'


const distributorClient={
    showDistributor: async(req: Request, res: Response)=>{
        try{
            const showDistributors = await distributor.find()
            res.status(200).json({showDistributors})
        }catch(e){
            throw new Error(e)
        }
    },
    findIdProducts: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            console.log(id)
            const findId = await distributor.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    }
}
export default distributorClient