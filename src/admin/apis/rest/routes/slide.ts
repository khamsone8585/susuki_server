import {Router} from 'express'
import slideController from '../controllers/slideController'

const router : Router = Router()

router.route('/add-slide-banner')
    .post(slideController.addSlide)
router.route('/show-slide-banner')
    .get(slideController.getSlide)
router.route('/update-slide-banner')
    .put(slideController.updateSlide)
router.route('/delete-slide-banner/:id')
    .delete(slideController.deleteSlide)
router.route('/find-slide-banner/:id')
    .get(slideController.findIdSlide)
export default router