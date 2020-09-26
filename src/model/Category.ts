import {Schema, model} from 'mongoose'

const CategorySchema = new Schema({
    cateName:{
        type: String,
        required: true
    }
},{timestamps: true})
const Category = model('Category', CategorySchema,'Category')
export default Category