import {Router} from 'express'
import slideClient from '../controller/slideClient'

const router : Router = Router()

router.route('/show-slide-banner-client')
    .get(slideClient.getSlide)

export default router