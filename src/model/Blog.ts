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
    CategoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'categoryBlog'
    }
},{timestamps: true})
const Blogs = model('Blogs', BlogSchema,'Blogs')
export default Blogs