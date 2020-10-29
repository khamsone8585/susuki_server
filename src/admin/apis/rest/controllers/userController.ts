import {Request, Response} from 'express'
import users from '@/model/User'
import {genHash} from '@/utils/bcrypt'
import {signToken} from '@/utils/jwt'
import { genNumber } from '@/utils/Generate'
import {compareHash} from '@/utils/bcrypt'
import transporter from '@/plugin/nodemailer'
import { verify } from 'crypto'
const userController ={
    addUser: async(req: Request, res: Response) =>{
        const {
            picture,
            firstName,
            lastName,
            email,
            password,
        }=req.body
        try{
            const md5Password=genHash(password)
            const check = await users.findOne({email})
            if(check){
                res.status(200).json('This e-mail already registered')
            }else{
            const addUsers = new users({
                picture,
                firstName,
                lastName,
                email,
                password:md5Password,
            })
            await addUsers.save()
            res.status(200).json({addUsers})
            }
        }catch (e){
            res.status(400).json(e)
        }
    },
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
            picture,
            firstName,
            lastName,
            email
        }=req.body
        try{
            const updateUsers = await users.findByIdAndUpdate(id,{
                $set:{
                    picture,
                    firstName,
                    lastName,
                    email
                    }
                },{ runValidators: true, new:true})
                res.status(200).json({updateUsers})
            }catch(e){
                res.status(400).json(e)
        }
    },
    deleteUser: async(req: Request, res: Response) =>{
        const {id}=req.params
        try{
            await users.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            res.status(400).json(e)
        }
    },
    adminSignIn:async(req: Request, res: Response)=>{
        const user: any = req.user
        const accessToken = signToken(user)
        res.status(200).json({accessToken})
    },
    findIdUser: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await users.findById(id)
            res.status(200).json(findId)
        }catch(e){
            res.status(400).json(e)
        }
    },
    getCurrentUser : async(req: Request, res: Response)=>{
        res.status(200).json({user:req.user})
    },
    sendEmail: async(req: Request, res: Response)=>{
        const {email}=req.body
        try{
            const sendmail:any = await users.findOne({email})
              if(!sendmail) res.status(200).json('This is does not existed')
                 const randomNumber = genNumber(6)
                await users.findByIdAndUpdate(sendmail,{
                    $set:{
                        verifyCode:randomNumber
                        //verifyCode:undefined
                    }
                },{runValidators:true, new:true})
                console.log(email)
                sendmail.email.map((email:string)=>{
                    transporter.sendMail({
                        from: '108.jobs',
                        to: email,
                        subject: 'VerifyCode from suzuki',
                        text : 'Your verification code is ' + randomNumber
                    })
                })
        }catch(e){
            res.status(400).json(e)
        }
    }
}
export default userController
