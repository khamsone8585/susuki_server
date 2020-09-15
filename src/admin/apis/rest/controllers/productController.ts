import {Request, Response} from 'express'
import products from '@/model/Products'
import Category from '@/model/Category'

const productController ={
    addProducts : async(req: Request, res: Response)=>{
        const {
            CategoryId,
            images,
            name,
            price,
            info
        }=req.body
        try{
        const addProducts =  new products({
            CategoryId,
            images,
            name,
            price,
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
            const getProducts = await products.find().populate(['CategoryId'])
            res.status(200).json({getProducts})
        }catch(e){
            throw new Error(e)
        }
    },
    updateProducts: async(req: Request, res: Response)=>{
        const{
            id,
            images,
            name,
            price,
            info
        }=req.body
        try{
            const updateProducts = await products.findByIdAndUpdate(id,{
                $set:{
                    images,
                    name,
                    price,
                    info
                }
            },{runValidators: true, new : true}).populate(['CategoryId'])
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