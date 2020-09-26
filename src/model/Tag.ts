import {Schema, model} from 'mongoose'
const tagSchema = new Schema({
    tagName: {
        type: String,
        required: true
    }
},{timestamps: true})
const tag = model ('tag', tagSchema,'tag')
export default tag