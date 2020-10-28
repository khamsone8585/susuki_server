import {Request, Response} from 'express'
import categoryBlog from '@/model/CategoryBlog'

const categoryBlogController = {
    addCateBlog : async (req: Request, res: Response) =>{
        const{cateName,sortOrder}=req.body
        try{
            if(!cateName) return res.status(400).json('Please Enter Category')
            const sort:any = await categoryBlog.findOne().sort('-createdAt')
            const addCateBlogs = new categoryBlog({
                cateName,
                sortOrder:sort.sortOrder + 1
            })
        await addCateBlogs.save()
        res.status(200).json({addCateBlogs})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getCateBlog : async(req:Request, res: Response) =>{
        try{
            const getCateBlog = await categoryBlog.find().sort('sortOrder')
            res.status(200).json({getCateBlog}) 
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateCateBlog : async(req: Request, res: Response) =>{
        const{
            id,
            cateName,
            sortOrder
        }=req.body
        try{
            const updateCateBlogs = await categoryBlog.findByIdAndUpdate(id,{
                $set:{
                    cateName,
                    sortOrder
                }
            },{runValidators:true, new :true})
            res.status(200).json({updateCateBlogs})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteCateBlog: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await categoryBlog.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            res.status(400).json(e)
        }
    },
    findIdBlog: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await categoryBlog.findById(id)
            res.status(200).json(findId)
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default categoryBlogController