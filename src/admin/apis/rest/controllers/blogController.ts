import {Request, Response} from 'express'
import Blogs from '@/model/Blog'
import catBlog from '@/model/CategoryBlog'

const blogController = {
    addBlog: async(req: Request, res: Response)=>{
        const{title,image,descriptions,categoryId}=req.body
        try{
            if(!title) return res.status(400).json('Please Enter Category')
            const addBlogs = new Blogs({
                title,
                image,
                descriptions,
                categoryId
            })
            await addBlogs.save()
            res.status(200).json({addBlogs})
        }catch(e){  
            res.status(400).json(e)
        }
    },
    showBlog: async(req: Request, res: Response)=>{
        try{
            const showBlogs = await Blogs.find().populate(['categoryId'])
            
            res.status(200).json({showBlogs})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateBlog: async(req: Request , res: Response)=>{
        const{
            id,
            title,
            image,
            descriptions,
            categoryId
        }=req.body
        try{
            const updateBlogs = await Blogs.findByIdAndUpdate(id,{
                $set:{
                    title,
                    image,
                    descriptions,
                    categoryId
                }
            },{runValidators: true, new:true}).populate(['categoryId'])
            res.status(220).json({updateBlogs})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteBlog: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await Blogs.findByIdAndDelete(id)
            res.status(200).json('Delete Complete')
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdBlog: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findIdBlogs = await Blogs.findById(id).populate(['categoryId'])
            res.status(200).json(findIdBlogs)
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default blogController