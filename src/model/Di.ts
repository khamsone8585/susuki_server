import {Schema, model} from 'mongoose'

const districtSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    provinceId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Province'
    }
}, {timestamps:true}) 


const District = model('District', districtSchema, 'District')


export default District