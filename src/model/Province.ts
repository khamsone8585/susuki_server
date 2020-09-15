import {Schema, model} from 'mongoose'

const ProvinceSchema = new Schema({
    provinceName:{
        type: String,
        required: true
    }
},{timestamps: true})
const province = model('province', ProvinceSchema,'province')
export default province