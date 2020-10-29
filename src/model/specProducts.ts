import {Schema, model} from 'mongoose'
const specProductsSchema = new Schema({
        key: {
                type: String,
        },
        sortOrder:{
                type: Number,
                default: 0,
                required: true
        }
},{timestamps:true})
const specProduct = model ('specProduct',specProductsSchema,'specProduct')

export default specProduct