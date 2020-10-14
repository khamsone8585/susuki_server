import {Request, Response} from 'express'
import dataSets from '@/model/dataSets'

const dataSetupClient={
    getDatasets: async(req: Request , res: Response)=>{
        try{
            const getDataset = await dataSets.find()
            res.status(200).json({getDataset})
        }catch(e){
            res.status(400).json(e)
        }
    }
}

export default dataSetupClient