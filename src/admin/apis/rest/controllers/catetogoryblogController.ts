import {Request, Response} from 'express'
import categoryBlog from '@/model/CategoryBlog'

const categoryBlogController = {
    addCateBlog : async (req: Request, res: Response) =>{
        const{cateName}=req.body
        try{
            if(!cateName) return res.status(400).json('Please Enter Category')
            const addCateBlogs = new categoryBlog({
                cateName
            })
        await addCateBlogs.save()
        res.status(200).json({addCateBlogs})
        }catch(e){
            throw new Error(e)
        }
    },
    getCateBlog : async(req:Request, res: Response) =>{
        try{
            const getCateBlog = await categoryBlog.find()
            res.status(200).json({getCateBlog}) 
        }catch(e){
            throw new Error(e)
        }
    },
    updateCateBlog : async(req: Request, res: Response) =>{
        const{
            id,
            cateName
        }=req.body
        try{
            const updateCateBlogs = await categoryBlog.findByIdAndUpdate(id,{
                $set:{
                    cateName
                }
            },{runValidators:true, new :true})
            res.status(200).json({updateCateBlogs})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteCateBlog: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await categoryBlog.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            throw new Error(e)
        }
    },
    findIdBlog: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await categoryBlog.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    }
}

export default categoryBlogController