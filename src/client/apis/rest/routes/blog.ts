import {Router} from 'express'
import blogClient from '../controller/blogClient'

const router : Router = Router()

router.route('/show-blog-client')
    .get(blogClient.showBlog)

router.route('/find-blog-client/:id')
    .get(blogClient.findIdBlogClient)
    
router.route('/get-limit-products-client/:page/:perPage')
    .get(blogClient.getLimitBlogClient)

export default router