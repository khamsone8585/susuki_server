import {Router} from 'express'
import productClient from '../controller/productClient'

const router : Router = Router()

router.route('/show-products-client')
    .get(productClient.showProduct)

export default router