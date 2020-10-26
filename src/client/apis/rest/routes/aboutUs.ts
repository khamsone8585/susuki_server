import {Router} from 'express'
import aboutUsClient from '../controller/aboutUsClient'

const router : Router = Router()

router.route('/show-aboutUs-client')
    .get(aboutUsClient.showAboutUs)

export default router