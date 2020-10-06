import {Router} from 'express'
import tagController from '../controllers/tagController'

const router : Router = Router()
router.route('/create-tag')
    .post(tagController.addTag)
router.route('/get-tag')
    .get(tagController.getTag)
router.route('/update-tag')
    .put(tagController.updateTag)
router.route('/delete-tag/:id')
    .delete(tagController.deleteTag)
router.route('/findId-tag/:id')
    .get(tagController.findIdTag)
export default router