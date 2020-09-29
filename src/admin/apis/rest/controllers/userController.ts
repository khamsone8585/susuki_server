import {Request, Response} from 'express'
import User from '@/model/User'
import {genHash} from '@/utils/bcrypt'
import {signToken} from '@/utils/jwt'

const userController ={
    addUser: async(req: Request, res: Response) =>{
        const {
            picture,
            firstName,
            lastName,
            gender,
            status,
            email,
            password,
            mobile
        }=req.body
        try{
            const md5Password=genHash(password)
            const check = await User.findOne({email})
            if(check){
                res.status(200).json('This e-mail already registered')
            }else{
            const addUsers = new User({
                picture,
                firstName,
                lastName,
                gender,
                status,
                email,
                password:md5Password,
                mobile
            })
            await addUsers.save()
            res.status(200).json({addUsers})
            }
        }catch (e){
            throw new Error(e)
        }
    },
    // syntax Query data from mongo  
    getUser : async(req: Request, res: Response) =>{
        try{
            const getUsers = await User.find()
            res.status(200).json({getUsers})
        }catch(e){
            throw new Error(e)
        }
    },
    updateUser: async(req: Request, res: Response) =>{
        const{
            id,
            picture,
            firstName,
            lastName,
            gender,
            status,
            email,
            password,
            mobile
        }=req.body
        try{
            const updateUsers = await User.findByIdAndUpdate(id,{
                $set:{
                    picture,
                    firstName,
                    lastName,
                    gender,
                    status,
                    email,
                    password,
                    mobile
                    }
                },{ runValidators: true, new:true})
                res.status(220).json({updateUsers})
            }catch(err){
                throw new Error(err)
        }
    },
    deleteUser: async(req: Request, res: Response) =>{
        const {id}=req.params
        try{
            await User.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(err){
            throw new Error(err)
        }
    },
    adminSignIn:async(req: Request, res: Response)=>{
        const user: any = req.user
        const accessToken = signToken(user)
        res.status(200).json({accessToken})
    }
}
export default userController
