import {Schema , model} from 'mongoose'

const DataSetupSchema = new Schema({
    logo: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    callCenter: {
        type: String,
        required: true
    },
    workingDay: {
        type: String,
        required: true
    },
    workingTimes: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    DistrictId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'District'
    },
    moreInformation: {
        type: String,
        required: true
    }
},{timestamps:true})
const dataSets = model('dataSets',DataSetupSchema,'dataSets')

export default dataSets