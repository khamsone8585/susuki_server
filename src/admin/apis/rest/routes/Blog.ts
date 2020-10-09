import {Router} from 'express'
import blogsController from '@/admin/apis/rest/controllers/blogController'

const router: Router = Router()
router.route('/create-blog')
    .post(blogsController.addBlog)
router.route('/show-blogs')
    .get(blogsController.showBlog)
router.route('/update-blog')
    .put(blogsController.updateBlog)
router.route('/delete-blog/:id')
    .delete(blogsController.deleteBlog)
router.route('/findId-blog/:id')
    .get(blogsController.findIdBlog)
router.route('/get-limit-products/:page/:perPage')
    .get(blogsController.getLimitBlog)
export default router