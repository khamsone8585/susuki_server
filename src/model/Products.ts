import {Schema, model} from 'mongoose'
const productsSchema = new Schema({
    CategoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    images: [{
        type: String,
        required: true
    }],
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    info: [{
        _id: false,
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