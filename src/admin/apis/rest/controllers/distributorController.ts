import {Request, Response} from 'express'
import distributor from '@/model/Distributors'

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
            const distributors = new distributor({
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
    }
}

export default distributorController