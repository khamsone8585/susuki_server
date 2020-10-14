import {Router} from 'express'
import bannerClient from '../controller/bannerClient'

const router: Router = Router()

router.route('/show-banner-client')
    .get(bannerClient.showBanner)

export default router