import {Schema, model} from 'mongoose'

const CategorySchema = new Schema({
    cateName:{
        type: String,
        required: true
    },
    show:{
        type: Boolean,
        default: true,
        required: true
    },
},{timestamps: true})
const Category = model('Category', CategorySchema,'Category')
export default Category