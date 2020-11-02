import {Request, Response} from 'express'
import categoryBlog from '@/model/CategoryBlog'
import { exit } from 'process'

const categoryBlogController = {
    addCateBlog : async (req: Request, res: Response) =>{
        const{cateName}=req.body
        try{
            if(!cateName) return res.status(400).json('Please Enter Category')

            const sort:any = await categoryBlog.findOne().sort('-createdAt')
            if(!sort){
                const addCateBlogs = new categoryBlog({
                    cateName
                })
                await addCateBlogs.save()
                res.status(200).json({addCateBlogs})
            }else{
                const addCateBlogs = new categoryBlog({
                    cateName,
                    sortOrder :sort.sortOrder + 1
                })
                await addCateBlogs.save()
                res.status(200).json({addCateBlogs})
            }
            
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
    },
    sortBlog: async(req: Request, res: Response)=>{
        const {items}=req.body
        try{
            await Promise.all(
                items.map(async(i:any, index:number)=>{
                    await categoryBlog.findByIdAndUpdate(i._id,{
                        $set:{
                            sortOrder:index
                        }
                    })
                })
            )
            res.status(200).json('Success')
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default categoryBlogController