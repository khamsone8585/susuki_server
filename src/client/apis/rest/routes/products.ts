import {Router} from 'express'
import productClient from '../controller/productClient'

const router : Router = Router()

router.route('/show-products-client')
    .get(productClient.showProduct)
router.route('/find-products-client/:id')
    .get(productClient.findIdProducts)
router.route('/get-limit-products/:page/:perPage')
    .get(productClient.getLimitProducts)
export default router