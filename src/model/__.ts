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


const District = model('districts',districtSchema)


export default District