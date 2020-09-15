import {Schema, model} from 'mongoose'

const ProvinceSchema = new Schema({
    provinceName:{
        type: String,
        required: true
    }
},{timestamps: true})
const Province = model('Province', ProvinceSchema,'Province')
export default Province