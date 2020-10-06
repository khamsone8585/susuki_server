import {Request, Response} from 'express'
import tag from '@/model/Tag'

const tagController = {
    addTag: async(req: Request, res: Response)=>{
        const {tagName}=req.body
        try{
            if(!tagName) return res.status(400).json('Please Enter Tag')
            const addTags = new tag({
                tagName
            })
        await addTags.save()
        res.status(200).json({addTags})
        }catch(e){
            throw new Error(e)
        }
    },
    getTag: async(req:Request, res: Response)=>{
        try{
            const getTags = await tag.find()
            res.status(200).json({getTags})
        }catch(e){
            throw new Error(e)
        }
    },
    updateTag: async(req:Request, res: Response)=>{
        const{
            id,
            tagName
        }=req.body
        try{
            const updateTags = await tag.findByIdAndUpdate(id,{
                $set:{
                    tagName
                }
            },{runValidators:true, new:true})
            res.status(220).json({updateTags})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteTag: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await tag.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            throw new Error(e)
        }
    },
    findIdTag: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await tag.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    }
}

export default tagController