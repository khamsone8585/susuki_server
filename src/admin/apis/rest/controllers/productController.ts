import {Request, Response} from 'express'
import products from '@/model/Products'
import Category from '@/model/Category'
import tag from '@/model/Tag'

const productController ={
    addProducts : async(req: Request, res: Response)=>{
        const {
            categoryId,
            color_pic,
            name,
            price,
            tagId,
            info
        }=req.body
        try{
        const addProducts =  new products({
            categoryId,
            color_pic,
            name,
            price,
            tagId,
            info
        })
        await addProducts.save()
        res.status(200).json({addProducts})
        }catch(e){
            throw new Error(e)
        }
    },
    getProducts: async(req: Request, res: Response)=>{
        try{
            const getProducts = await products.find().populate(['categoryId','tagId'])
            res.status(200).json({getProducts})
        }catch(e){
            throw new Error(e)
        }
    },
    updateProducts: async(req: Request, res: Response)=>{
        const{
            id,
            color_pic,
            name,
            price,
            tagId,
            info
        }=req.body
        try{
            const updateProducts = await products.findByIdAndUpdate(id,{
                $set:{
                    color_pic,
                    name,
                    price,
                    tagId,
                    info
                }
            },{runValidators: true, new : true}).populate(['categoryId','tagId'])
            res.status(220).json({updateProducts})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteProducts: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await products.findByIdAndDelete(id)
            res.status(200).json('Delete Succeed')
        }catch(e){
            throw new Error(e)
        }
    }
}

export default productController