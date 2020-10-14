import {Router} from 'express'
import bannerController from '../controllers/bannerController'

const router: Router = Router()
router.route('/add-banner')
    .post(bannerController.addBanner)
router.route('/show-banner')
    .get(bannerController.getBanner)
router.route('/update-banner')
    .put(bannerController.updateBanner)
router.route('/delete-banner/:id')
    .delete(bannerController.deleteBanner)
router.route('/findid-banner/:id')
    .get(bannerController.findIdBanner)
export default router