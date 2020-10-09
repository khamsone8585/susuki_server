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
            const mapProducts = showProducts.map((i: any) =>{
                const products = i.products.filter((o: any) => {
                    if(!o._id) return 
                    return o
                })
                console.log(products)
                return {
                    ...i,
                products
                }
            })
            res.status(200).json({mapProducts})
        }catch(e){
            throw new Error(e)
        }
    },
    findIdProducts: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            console.log(id)
            const findId = await product.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    }
}

export default productClient