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
    }
}
export default distributorClient