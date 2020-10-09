import {Request, Response} from 'express'
import dataSets from '@/model/dataSets'

const dataSetupController={
    getDatasets: async(req: Request , res: Response)=>{
        try{
            const getDataset = await dataSets.find()
            res.status(200).json({getDataset})
        }catch(e){
            throw new Error(e)
        }
    }
}

export default dataSetupController