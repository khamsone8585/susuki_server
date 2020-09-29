import {Schema, model} from 'mongoose'
const specProductsSchema = new Schema({
    machine: {
        type: String,
        required: true
    },
    fuel_oil: {
        type: String,
        required: true
    },
    brake: {
        type: String,
        required: true
    },
    tire: {
        type: String,
        required: true
    },
    gearshift: {
        type: String,
        required: true
    }
},{timestamps:true})
const specProduct = model ('specProduct',specProductsSchema,'specProduct')

export default specProduct