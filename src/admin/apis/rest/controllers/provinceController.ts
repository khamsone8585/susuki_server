import {Request, Response} from 'express'
import Province from '@/model/Province'
import provincePipe from '@/pipes/province-pipe'

const provinceController ={
    getProvince:async(req:Request, res: Response)=>{
        try{
                const provinces = await Province.aggregate(provincePipe)
                res.status(200).json({provinces})
            }catch(e){
                throw new Error(e)
            }
    }
}

export default provinceController