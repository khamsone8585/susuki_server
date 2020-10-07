import {Request, Response} from 'express'
import product from '@/model/Products'
import Category from '@/model/Category'

import tag from '@/model/Tag'
import categoryPipe from '@/pipes/groupCategory'
import productPipe from '@/pipes/groupProducts'
const productClient = {
    showProduct : async(req: Request , res: Response)=>{
        try{
            const showProducts = await Category.aggregate(productPipe)
            res.status(200).json({showProducts})
        }catch(e){
            throw new Error(e)
        }
    }
}

export default productClient