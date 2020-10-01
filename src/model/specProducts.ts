import {Schema, model} from 'mongoose'
const specProductsSchema = new Schema({
    defaultSpec:[{
        _id: false,
        key: {
        type: String,
        },
        value: {
        type: String,
        }
    }]
},{timestamps:true})
const specProduct = model ('specProduct',specProductsSchema,'specProduct')

export default specProduct