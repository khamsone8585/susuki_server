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
        },
        lng: {
        type: Number,
        }
    }],
    image:{
        type: String,
        required: true
    },
    dealerCompany:{
        type: String,
        required: true
    },
    village:{
        type: String,
        required: true
    },
    telephone:{
        type: String,
        required: true
    },
    facebook:{
        type: String,
        required: true
    }
},{timestamps:true})
const distributors = model('distributors',distributorSchema)
export default distributors