import {Request, Response} from 'express'
import specProduct from '@/model/specProducts'

const specProductsController = {
    addSpec: async(req: Request, res: Response)=>{
        const {
            key
        }=req.body
        try{
        const addSpecs = new specProduct({
            key
        })
        await addSpecs.save()
        res.status(200).json({addSpecs})
        }catch(e){
        throw new Error(e)
        }
    },
    getSpec: async(req: Request, res: Response)=>{
        try{
            const getSpecs = await specProduct.find()
            res.status(200).json({getSpecs}) 
        }catch(e){
            throw new Error(e)
        }
    },
    updateSpec: async(req: Request, res: Response)=>{
        const{
            id,
            key
        }=req.body
        try{
            const updateSpecs = await specProduct.findByIdAndUpdate(id,{
                $set:{
                    key
                }
            },{runValidators:true , new: true})
            res.status(200).json({updateSpecs})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteSpec: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await specProduct.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            throw new Error(e)
        }
    },
    findIdSpec: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            const findId = await specProduct.findById(id)
            res.status(200).json(findId)
        }catch(e){
            throw new Error
        }
    }
    
}
export default specProductsController