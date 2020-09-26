import {Schema, model} from 'mongoose'
import Blog from '@/model/Blog'
const categoryBlogSchema = new Schema({
    cateName: {
        type: String,
        required: true
    }
},{timestamps:true})
const categoryBlog = model('categoryBlog',categoryBlogSchema,'categoryBlog')
export default categoryBlog
