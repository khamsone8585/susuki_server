import {Router} from 'express'
import categoryController from '../controllers/categoryController'

const router : Router = Router()
router.route('/add-category')
    .post(categoryController.addCategory)
router.route('/show-category')
    .get(categoryController.getCategory)
router.route('/update-category')
    .put(categoryController.updateCategory)
router.route('/delete-category/:id')
    .delete(categoryController.deleteCategory)
router.route('/findId-category/:id')
    .get(categoryController.findIdCategory)
router.route('/sort-category')
    .put(categoryController.sortCategory)
export default router