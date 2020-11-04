import {Request, Response} from 'express'
import users from '@/model/User'
import {genHash} from '@/utils/bcrypt'
import {signToken} from '@/utils/jwt'
import {compareHash} from '@/utils/bcrypt'
import bcrypt  from 'bcrypt'

const newPasswordController ={
    showNewPassword : async(req: Request, res: Response) =>{
        try{
            const getUsers = await users.find()
            res.status(200).json({getUsers})
        }catch(e){
            res.status(400).json(e)
        }
    },
    // updateNewPassword: async(req: Request, res: Response) =>{
    //     const{
    //         id,
    //         password,
    //         newPassword
    //     }=req.body
    //     try{
    //         const userChange:any = await users.findById(id)
    //         const isMatch = compareHash(password,userChange.password);
    //         if(isMatch){
    //         const md5Password=genHash(newPassword)
    //         const updateUsers = await users.findByIdAndUpdate(id,{
    //             $set:{
    //                 password:md5Password,
    //                 }
    //             },{ runValidators: true, new:true})
    //             res.status(200).json({updateUsers})
    //             }else{
    //                 res.status(400).json('Password Wrong !!!')
    //             }
    //         }catch(e){
    //             res.status(400).json(e)
    //     }
    // },
    changePasswordWhenLogin: async (req: Request, res: Response) => {
            const {newPasswords, confirmPasswords } = req.body
            const {id}= req.params
            try {
                const isMatch = newPasswords === confirmPasswords
                if (!isMatch) return "Password doesn't match...!"
                const hashedPassword = genHash(newPasswords)
                console.log(hashedPassword)
                    await users.findByIdAndUpdate(id, {
                        $set: {
                            password: hashedPassword
                        }
                    }, { runValidators: true, new: true })
                    res.status(200).json('Password has changed')
            } catch (e) {
                    res.status(400).json(e)
            }
    }
}

export default newPasswordController