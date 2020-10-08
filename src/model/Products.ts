import {Schema, model} from 'mongoose'
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
    tagId:{
        type: Schema.Types.ObjectId,
        ref: 'tag'
    },
    info: [{
    key: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
    }]
},{timestamps: true})
const products = model('products', productsSchema,'products')
export default products