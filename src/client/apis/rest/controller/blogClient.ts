import {Request, Response} from 'express'
import blog from '@/model/Blog'
import catBlog from '@/model/CategoryBlog'
import { sortBy } from 'lodash'
//import use module

//create Controller
const blogClient = {
    showBlog: async(req: Request, res: Response)=>{
        try{
            const showBlogs = await blog.find().populate(['categoryId']).sort("-createdAt")
            res.status(200).json({showBlogs})
        }catch(e){
            throw new Error(e)
        }
    },
    findIdBlogClient: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId : any = await blog.findById(id)
            const blogCount =  await blog.findByIdAndUpdate(id,{
                $set:{
                    count: findId.count + 1
                }
            },{runValidators: true, new: true})
            res.status(200).json({findId:blogCount})
        }catch(e){
            res.status(400).json(e)
        }
    },
    getLimitBlogClient: async(req: Request, res: Response)=>{
        const page = parseInt(req.params.page, 10)
        const perPage = parseInt(req.params.perPage, 5)
        try{
            const Products = await blog.find()
            .skip((page * perPage) - perPage)
            .limit(perPage)
            .populate(['categoryId'])
            const counts=await blog.find().countDocuments()
        res.status(200).json({Products, counts})
        }catch(e){
            throw new Error(e)
        }
    },
    getLimitBlog: async(req: Request, res: Response)=>{
        const page = parseInt(req.params.page, 10)
        const perPage = parseInt(req.params.perPage, 5)
        try{
            const Blog = await blog.find()
            .skip((page * perPage) - perPage)
            .limit(perPage)
            .populate(['categoryId'])
            const counts=await blog.find().countDocuments()
        res.status(200).json({Blog, counts})
        }catch(e){
            throw new Error(e)
        }
    }
} 


//export file controller
export default blogClient