import {Schema , model } from 'mongoose'
const distributorSchema =  new Schema({
    images:{
        type: String,
        required: true
    },
    distributor: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    map: {
        lat: {
        type: Number,
        required: true
        },
        lng: {
        type: Number,
        required: true
        }
    },
    districtId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
},{timestamps:true})
const distributors = model('distributors',distributorSchema)
export default distributors