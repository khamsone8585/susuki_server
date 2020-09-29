import {Request , Response} from 'express'
import category from '@/model/Category'
import User from '@/model/User'
const categoryController ={
    addCategory: async(req: Request,res: Response)=>{
        const {
            cateName,
        }=req.body
        try{
            if(!cateName) return res.status(400).json('Please Enter Category')
            const addCategorys = new category({
                cateName,
            })
            await addCategorys.save()
            res.status(200).json({addCategorys})
        }catch(e){
            throw new Error(e)
        }
    },
    getCategory:async(req: Request, res: Response)=>{
        try{
            const getCategory = await category.find()
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
            const updateCategorys = await category.findByIdAndUpdate(id,{
                $set:{
                    cateName
                }
            },{runValidators:true, new :true}).populate(['usersId'])
            res.status(200).json({updateCategorys})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteCategory: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await category.findByIdAndDelete(id)
            res.status(200).json('Delete Succeed')
        }catch(e){
            throw new Error(e)
        }
    }
}
export default categoryController