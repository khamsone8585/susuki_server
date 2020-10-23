import {Router} from 'express'
import aboutUsController from '../controllers/aboutusController'

const router : Router = Router()

router.route('/add-aboutUs')
    .post(aboutUsController.addAboutUs)
router.route('/show-aboutUs')
    .get(aboutUsController.showAboutUs)
router.route('/update-aboutUs')
    .put(aboutUsController.updateAboutUs)
router.route('/delete-aboutUs/:id')
    .delete(aboutUsController.deleteAboutUs)
router.route('/getId-aboutUs/:id')
    .get(aboutUsController.findIdAboutUs)
export default router