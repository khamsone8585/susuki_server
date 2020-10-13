import {Router} from 'express'
import { authenticate } from 'passport'
import productController from '../controllers/productController'



const router: Router = Router()

router.route('/create-products')
    .post(productController.addProducts)
router.route('/show-products')
    .get(productController.getProducts)
router.route('/update-products')
    .put(productController.updateProducts)
router.route('/delete-products/:id')
    .delete(productController.deleteProducts)
router.route('/findId-products/:id')
    .get(productController.findIdProducts)
router.route('/get-limit-products/:page/:perPage')
    .get(productController.getLimitProducts)


export default router