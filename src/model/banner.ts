import {Schema, model} from 'mongoose'

const bannerSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    url: {
        type: String,
    }
},{timestamps: true})
const banner = model('banner', bannerSchema,'banner')
export default banner