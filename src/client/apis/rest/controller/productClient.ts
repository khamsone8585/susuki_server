import {Request, Response} from 'express'
import product from '@/model/Products'

const productClient = {
    showProduct : async(req: Request , res: Response)=>{
        try{
            const showProducts = await product.find()
            res.status(200).json({showProducts})
        }catch(e){
            throw new Error(e)
        }
    }
}

export default productClient