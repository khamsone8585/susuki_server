import {Schema, model} from 'mongoose'
const tagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    },
    sortOrder:{
        type: Number,
        default: 0,
        required: true
    }
},{timestamps: true})
const tag = model ('tag', tagSchema,'tag')
export default tag