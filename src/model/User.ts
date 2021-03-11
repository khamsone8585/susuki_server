import { number } from '@hapi/joi'
import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    picture: {
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    verifyCode:{
        type: Number,
        default: 0
    }
},{timestamps:true})
const users = model('user', userSchema,'user')


export default users