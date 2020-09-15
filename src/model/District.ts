import {Schema, model} from 'mongoose'

const districtSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ProvinceId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Province'
    }
},{timestamps:true})
const district = model ('district',districtSchema,'district')
export default district