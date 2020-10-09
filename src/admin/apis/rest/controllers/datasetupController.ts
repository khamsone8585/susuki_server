import {Request, Response} from 'express'
import dataSets from '@/model/dataSets'

const dataSetupController={
    addDatasets: async(req: Request, res: Response)=>{
        const{
            logo,
            companyName,
            detail,
            workingDay,
            address,
            moreInformation
        }=req.body
        try{
            const addDatasets = new dataSets({
                logo,
                companyName,
                detail,
                workingDay,
                address,
                moreInformation
            })
            await addDatasets.save()
            res.status(200).json({addDatasets})
        }catch(e){
            throw new Error(e)
        }
    },
    getDatasets: async(req: Request , res: Response)=>{
        try{
            const getDataset = await dataSets.find()
            res.status(200).json({getDataset})
        }catch(e){
            throw new Error(e)
        }
    },
    updateDatasets: async(req: Request, res: Response)=>{
        const{
            id,
            logo,
            companyName,
            detail,
            workingDay,
            address,
            moreInformation
        }=req.body
        try{
            const updateDataset = await dataSets.findByIdAndUpdate(id,{
                $set:{
                    logo,
                    companyName,
                    detail,
                    workingDay,
                    address,
                    moreInformation
                }
            },{runValidators:true, new:true}).populate(['$districts._id'])
            res.status(220).json({updateDataset})
        }catch(e){
            throw new Error(e)
        }
    },
    deleteDatasets: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await dataSets.findByIdAndDelete(id)
            res.status(200).json('Delete Successful')
        }catch(e){
            throw new Error(e)
        }
    }
}

export default dataSetupController