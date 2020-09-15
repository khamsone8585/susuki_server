import {IncomingForm} from 'formidable'
import {Request,Response} from 'express'
import {v4 as uuidv4} from 'uuid'
import fs from 'fs'

const uploadImage = (req: Request, res: Response) =>{
    const form = new IncomingForm()

    form.on('progress', (_bytesReceived, _bytesExpected)=>{})
    form.on('field',(_name, _file)=>{})
    form.on('fileBegin', (_name,file)=>{
        if(!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
        const fileType = '.' + file.name.split('.').pop()
        const fileName = uuidv4() + fileType
        file.path = './tmp/' + fileName
    })
    form.on('file', (_name, file)=>{
        if(file.size === 0) return res.status(413).json({message: 'Your file size is zero byte'})
        return res.status(201).json({fileName: file.name})
    })
    form.on('aborted', ()=>{
        return res.status(400).json({message: 'Request aborted by the user'})
    })
    form.on('error', (err)=>{
        return res.status(400).json({err})
    })
    form.on('end',()=>{
        return res.status(201).end()
    })
    form.parse(req)
}
export default uploadImage