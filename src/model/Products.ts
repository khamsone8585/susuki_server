import {Schema, model} from 'mongoose'
import { boolean } from 'yup'
const productsSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    colorPic:[{
            imageName: {
            type: String,
            required: true
        },
            colorName: {
            type: String,
            required: true
        }
    }],
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    show:{
        type: Boolean,
        default: true
    },
    tagId:{
        type: Schema.Types.ObjectId,
        ref: 'tag'
    },
    info: [{
    key: {
        type: String,
    },
    value: {
        type: String,
    }
    }]
},{timestamps: true})
const products = model('products', productsSchema,'products')
export default products