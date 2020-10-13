import Jwt from 'jsonwebtoken'

const secret: string = process.env.JWT_SECRET || 'Khamsone'

export const signToken = (user: any) =>{
    return Jwt.sign({
        iss: secret,
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 365)
    },secret) //secret key
}