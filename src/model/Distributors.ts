import {Schema , model } from 'mongoose'
const distributorSchema =  new Schema({
    distributor: {
        type: String,
        required: true
    },
    Village: {
        type: String,
        required: true
    },
    DistrictId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'District'
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
    }
})
const distributors = model('distributors',distributorSchema,'distributors')
export default distributors