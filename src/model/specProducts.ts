import {Schema, model} from 'mongoose'
const specProductsSchema = new Schema({
        key: {
        type: String,
        }
},{timestamps:true})
const specProduct = model ('specProduct',specProductsSchema,'specProduct')

export default specProduct