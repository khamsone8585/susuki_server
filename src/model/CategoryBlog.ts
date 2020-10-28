import {Schema, model} from 'mongoose'
import Blog from '@/model/Blog'
const categoryBlogSchema = new Schema({
    cateName: {
        type: String,
        required: true
    },
    sortOrder:{
        type: Number,
        default: 0,
        required: true
    }
},{timestamps:true})
const categoryBlog = model('categoryBlog',categoryBlogSchema,'categoryBlog')
export default categoryBlog
