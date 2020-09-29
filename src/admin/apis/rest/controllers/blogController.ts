import {Request, Response} from 'express'
import Blogs from '@/model/Blog'
import catBlog from '@/model/CategoryBlog'

const blogController = {
    addBlog: async(req: Request, res: Response)=>{
        const{title,image,descriptions,CategoryId}=req.body
        try{
            if(!title) return res.status(400).json('Please Enter Category')
            const addBlogs = new Blogs({
                title,
                image,
                descriptions,
                CategoryId
            })
            await addBlogs.save()
            res.status(200).json({addBlogs})
        }catch(e){
            throw new Error(e)
        }
    },
    showBlog: async(req: Request, res: Response)=>{
        try{
            const showBlogs = await Blogs.find().populate(['CategoryId'])
            
            res.status(200).json({showBlogs})
        }catch(e){
            throw new Error(e)
        }
    },
    updateBlog: async(req: Request , res: Response)=>{
        const{
            id,
            title,
            image,
            descriptions,
            CategoryId
        }=req.body
        try{
            const updateBlogs = await Blogs.findByIdAndUpdate(id,{
                $set:{
                    title,
                    image,
                    descriptions,
                }
            },{runValidators: true, new:true}).populate(['CategoryId'])
            res.status(220).json({updateBlogs})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteBlog: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await Blogs.findByIdAndDelete(id)
            res.status(200).json('Delete Complete')
        }catch(e){
            throw new Error(e)
        }
    }
}

export default blogController