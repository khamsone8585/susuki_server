import {hashSync, compareSync} from 'bcrypt'

export const genHash = (plainTextPassword: string) => {
    return hashSync(plainTextPassword, 10) as String
}

export const compareHash =(plainTextPassword: string, HashedPassword: string) => {
    return compareSync(plainTextPassword,HashedPassword)as boolean
}