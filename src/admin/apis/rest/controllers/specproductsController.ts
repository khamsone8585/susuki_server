import {Request, Response} from 'express'
import specProduct from '@/model/specProducts'

const specProductsController = {
    addSpec: async(req: Request, res: Response)=>{
        const {key}=req.body
        try{
            const sort:any = await specProduct.findOne().sort('-createdAt')
            if(!sort){
                const addCateBlogs = new specProduct({
                    key
                })
                await addCateBlogs.save()
                res.status(200).json({addCateBlogs})
            }else{
                const plusOrder:any = await specProduct.findOne().sort('-sortOrder')
                const addCateBlogs = new specProduct({
                    key,
                    sortOrder : plusOrder.sortOrder + 1
                })
                await addCateBlogs.save()
                res.status(200).json({addCateBlogs})
            }
        }catch(e){
        res.status(400).json(e)
        }
    },
    getSpec: async(req: Request, res: Response)=>{
        try{
            const getSpecs = await specProduct.find().sort('sortOrder')
            res.status(200).json({getSpecs}) 
        }catch(e){
            res.status(400).json(e)
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
            res.status(400).json(e)
        }
    },
    deleteSpec: async(req: Request, res: Response)=>{
        const{id}=req.params
        try{
            await specProduct.findByIdAndDelete(id)
            res.status(200).json('Delete Success')
        }catch(e){
            res.status(400).json(e)
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
    },
    sortSpecProduct: async(req: Request, res: Response)=>{
        const {items}=req.body
        try{
            await Promise.all(
                items.map(async(i:any, index:number)=>{
                    await specProduct.findByIdAndUpdate(i._id,{
                        $set:{
                            sortOrder:index
                        }
                    })
                })
            )
            res.status(200).json('Success')
        }catch(e){
            res.status(400).json(e)
        }
    }
    
}
export default specProductsController