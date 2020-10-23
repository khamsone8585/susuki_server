import {Schema, model} from 'mongoose'

const aboutUsSchema = new Schema({
    detail: {
        type: String
    }
},{timestamps: true})
const aboutUs = model('aboutUs',aboutUsSchema,'aboutUs')
export default aboutUs