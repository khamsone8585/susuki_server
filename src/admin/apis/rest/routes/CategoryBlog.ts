import {Router} from 'express'
import catetogoryblogController from '../controllers/catetogoryblogController'

const router : Router = Router()
router.route('/create-categoryblog')
    .post(catetogoryblogController.addCateBlog)
router.route('/showcateblog')
    .get(catetogoryblogController.getCateBlog)
router.route('/updatecateblog')
    .put(catetogoryblogController.updateCateBlog)
router.route('/deletecateblog/:id')
    .delete(catetogoryblogController.deleteCateBlog)
router.route('/findId-cateblog/:id')
    .get(catetogoryblogController.findIdBlog)
export default router