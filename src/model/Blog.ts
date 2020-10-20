import { number } from '@hapi/joi'
import { isInteger, toInteger } from 'lodash'
import {Schema, model} from 'mongoose'

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    descriptions: {
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true,
        default: 0
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'categoryBlog'
    }
},{timestamps: true})
const Blogs = model('Blogs', BlogSchema,'Blogs')
export default Blogs