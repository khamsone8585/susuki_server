import {Request, Response} from 'express'
import products from '@/model/Products'
import Category from '@/model/Category'
import tag from '@/model/Tag'

const productController ={
    addProducts : async(req: Request, res: Response)=>{
        const {
            categoryId,
            colorPic,
            name,
            price,
            tagId,
            show,
            info
        }=req.body
        try{
        const addProducts =  new products({
            categoryId,
            colorPic,
            name,
            price,
            tagId,
            show,
            info
        })
        await addProducts.save()
        res.status(200).json({addProducts})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getProducts: async(req: Request, res: Response)=>{
        const {name}=req.query
        try{
            const getProducts = await products.find({  name: { $regex: name, $options: "i" } }).populate(['categoryId','tagId'])
            res.status(200).json({getProducts})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateProducts: async(req: Request, res: Response)=>{
        const{
            id,
            categoryId,
            colorPic,
            name,
            price,
            tagId,
            show,
            info
        }=req.body
        try{
            const updateProducts = await products.findByIdAndUpdate(id,{
                $set:{
                    categoryId,
                    colorPic,
                    name,
                    price,
                    tagId,
                    show,
                    info
                }
            },{runValidators: true, new : true})
            res.status(220).json({updateProducts})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteProducts: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await products.findByIdAndDelete(id)
            res.status(200).json('Delete Succeed')
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdProducts: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await products.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    },
    getLimitProducts: async(req: Request, res: Response)=>{
        const page = parseInt(req.params.page, 10)
        const perPage = parseInt(req.params.perPage, 10)
        const {name}=req.query
        console.log(name)
        try{
            const Products = await products.find({ name: { $regex: name, $options: "i" } })
            .skip((page * perPage) - perPage)
            .limit(perPage)
            .populate(['categoryId','tagId'])
            const counts=await products.find({ name: { $regex: name, $options: "i" } }).countDocuments()
        res.status(200).json({Products, counts})
        }catch(e){
            throw new Error(e)
        }
    }
}

export default productController