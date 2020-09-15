import {Schema, model} from 'mongoose'

const CategorySchema = new Schema({
    cateName:{
        type: String,
        required: true
    },
    UsersId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{timestamps: true})
const Category = model('Category', CategorySchema,'Category')
export default Category