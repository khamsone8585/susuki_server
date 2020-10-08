import {Schema, model} from 'mongoose'
const slideSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    url:{
        type: String
    }
},{timestamps:true})
const slidebanner = model ('slidebanner',slideSchema,'slidebanner')
export default slidebanner