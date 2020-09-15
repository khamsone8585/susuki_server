import Jwt from 'jsonwebtoken'
import User from '@/model/User'

const secret: string = process.env.JWT_SECRET || 'khamsone'

export const signToken = (User: any) =>{
    return Jwt.sign({
        iss: secret,
        sub: User._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 365)
    },secret) //secret key
}