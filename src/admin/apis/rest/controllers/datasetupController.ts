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
            res.status(400).json(e)
        }
    },
    getDatasets: async(req: Request , res: Response)=>{
        try{
            const getDataset = await dataSets.findOne()
            res.status(200).json({getDataset})
        }catch(e){
            res.status(400).json(e)
        }
    },
    updateDatasets: async(req: Request, res: Response)=>{
        const{
            logo,
            companyName,
            detail,
            workingDay,
            address,
            moreInformation
        }=req.body
        try{
            const updateDataset = await dataSets.findOneAndUpdate({},{
                $set:{
                    logo,
                    companyName,
                    detail,
                    workingDay,
                    address,
                    moreInformation
                }
            },{runValidators:true, new:true})
            res.status(220).json({updateDataset})
        }catch(e){
            res.status(400).json(e)
        }
    },
    deleteDatasets: async(req: Request, res: Response)=>{
        const {id}=req.params
        try{
            await dataSets.findByIdAndDelete(id)
            res.status(200).json('Delete Successful')
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default dataSetupController