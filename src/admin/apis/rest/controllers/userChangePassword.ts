import {Request, Response} from 'express'
import users from '@/model/User'
import {genHash} from '@/utils/bcrypt'
import {signToken} from '@/utils/jwt'
import {compareHash} from '@/utils/bcrypt'

const userController ={
    // syntax Query data from mongo  
    getUser : async(req: Request, res: Response) =>{
        try{
            const getUsers = await users.find()
            res.status(200).json({getUsers})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateUser: async(req: Request, res: Response) =>{
        const{
            id,
            password,
            newPassword
        }=req.body
        try{
            const userChange:any = await users.findById(id)
            const isMatch = compareHash(password,userChange.password)
            if(isMatch){
            const md5Password=genHash(newPassword)
            const updateUsers = await users.findByIdAndUpdate(id,{
                $set:{
                    password:md5Password,
                    }
                },{ runValidators: true, new:true})
                res.status(200).json({updateUsers})
                }else{
                    res.status(400).json('Password Wrong !!!')
                }
            }catch(e){
                res.status(400).json(e)
        }
    },
    findIdUser: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await users.findById(id)
            res.status(200).json(findId)
        }catch(e){
            res.status(400).json(e)
        }
    }
}
export default userController
