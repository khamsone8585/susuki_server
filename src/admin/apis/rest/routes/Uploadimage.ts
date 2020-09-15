import {Router, Request, Response} from 'express'
import uploadImage from '@/plugin/formidable'
const router: Router = Router()

router.route('/upload-image')
    .post(uploadImage)

export default router 