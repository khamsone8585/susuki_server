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
export default router