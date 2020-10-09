import {Request , Response} from 'express'
import category from '@/model/Category'
import User from '@/model/User'
const categoryController ={
    addCategory: async(req: Request,res: Response)=>{
        const {
            cateName,
            show
        }=req.body
        try{
            if(!cateName) return res.status(400).json('Please Enter Category')
            const addCategorys = new category({
                cateName,
            })
            await addCategorys.save()
            res.status(200).json({addCategorys})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getCategory:async(req: Request, res: Response)=>{
        try{
            const getCategory = await category.find()
            res.status(200).json({getCategory})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateCategory: async(req: Request, res: Response)=>{
        const{
            id,
            cateName,
            show
        }=req.body
        try{
            const updateCategorys = await category.findByIdAndUpdate(id,{
                $set:{
                    cateName
                }
            },{runValidators:true, new :true}).populate(['usersId'])
            res.status(200).json({updateCategorys})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteCategory: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await category.findByIdAndDelete(id)
            res.status(200).json('Delete Succeed')
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdCategory: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await category.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    }
}
export default categoryController