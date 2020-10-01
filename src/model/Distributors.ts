import {Schema , model } from 'mongoose'
const distributorSchema =  new Schema({
    districtId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
    map:[{
        lat: {
        type: Number,
        required: true
        },
        lng: {
        type: Number,
        required: true
        }
    }],
    distributor:[{
        _id: false,
            key: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }]
},{timestamps:true})
const distributors = model('distributors',distributorSchema)
export default distributors