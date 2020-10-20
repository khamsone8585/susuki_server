import {Request, Response} from 'express'
import product from '@/model/Products'
import Category from '@/model/Category'

import tag from '@/model/Tag'
import categoryPipe from '@/pipes/groupCategory'
import productPipe from '@/pipes/groupProducts'
import products from '@/model/Products'
const productClient = {
    showProduct : async(req: Request , res: Response)=>{
        try{
            const showProducts = await Category.aggregate(productPipe)
            const mapProducts = showProducts.map((i: any) =>{
                const products = i.products.filter((o: any) => {
                    if(!o._id || !o.show) return 
                    return o
                })
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
            const findId: any = await product.findById(id)
            const productsCount =  await product.findByIdAndUpdate(id,{
                $set:{
                    count: findId.count + 1
                }
            },{runValidators: true, new: true})
            res.status(200).json({findId:productsCount})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getLimitProducts: async(req: Request, res: Response)=>{
        const page = parseInt(req.params.page, 10)
        const perPage = parseInt(req.params.perPage, 5)
        try{
            const Products = await product.find()
            .skip((page * perPage) - perPage)
            .limit(perPage)
            .populate(['categoryId','tagId'])
            const counts=await product.find().countDocuments()
        res.status(200).json({Products, counts})
        }catch(e){
            throw new Error(e)
        }
    }
}

export default productClient