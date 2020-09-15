import {Request , Response} from 'express'
import Category from '@/model/Category'
import User from '@/model/User'
const categoryController ={
    addCategory: async(req: Request,res: Response)=>{
        const {
            cateName,
            UsersId
        }=req.body
        try{
            const category = new Category({
                cateName,
                UsersId
            })
            await category.save()
            res.status(200).json({category})
        }catch(e){
            throw new Error(e)
        }
    },
    getCategory:async(req: Request, res: Response)=>{
        try{
            const getCategory = await Category.find().populate(['UsersId'])
            res.status(200).json({getCategory})
        }catch(e){
            throw new Error(e)
        }
    },
    updateCategory: async(req: Request, res: Response)=>{
        const{
            id,
            cateName
        }=req.body
        try{
            const updateCategory = await Category.findByIdAndUpdate(id,{
                $set:{
                    cateName
                }
            },{runValidators:true, new :true}).populate(['UsersId'])
            res.status(200).json({updateCategory})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteCategory: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await Category.findByIdAndDelete(id)
            res.status(200).json('Delete Succeed')
        }catch(e){
            throw new Error(e)
        }
    }
}
export default categoryController