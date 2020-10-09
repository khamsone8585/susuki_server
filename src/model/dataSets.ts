import {Schema , model} from 'mongoose'
const DataSetupSchema = new Schema({
    logo: {
        type: String,
    },
    companyName: {
        type: String,
    },
    detail: {
        type: String,
    },
    workingDay: {
        type: String,
    },
    address: {
        type: String,
    },
    moreInformation: {
        type: String,
    }
},{timestamps:true})
const dataSets = model('dataSets',DataSetupSchema,'dataSets')

export default dataSets