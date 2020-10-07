import {Request, Response} from 'express'
import blog from '@/model/Blog'
import catBlog from '@/model/CategoryBlog'
//import use module

//create Controller
const blogClient = {
    showBlog: async(req: Request, res: Response)=>{
        try{
            const showBlogs = await blog.find().populate(['categoryId'])
            res.status(200).json({showBlogs})
        }catch(e){
            throw new Error(e)
        }
    }
} 


//export file controller
export default blogClient