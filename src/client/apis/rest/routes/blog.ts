import {Router} from 'express'
import blogClient from '../controller/blogClient'

const router : Router = Router()

router.route('/show-blog-client')
    .get(blogClient.showBlog)

export default router