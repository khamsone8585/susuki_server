import {Router} from 'express'
import categoryblog from '../controllers/catetogoryblogController'

const router : Router = Router()
router.route('/categoryblog')
    .post(categoryblog.addCateBlog)
router.route('/showcateblog')
    .get(categoryblog.getCateBlog)
router.route('/updatecateblog')
    .put(categoryblog.updateCateBlog)
router.route('/deletecateblog/:id')
    .delete(categoryblog.deleteCateBlog)
export default router