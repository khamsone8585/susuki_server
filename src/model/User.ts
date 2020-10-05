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
    }
},{timestamps:true})
const User = model('User', userSchema,'User')

export default User