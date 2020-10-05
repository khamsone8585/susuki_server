import {Router} from 'express'
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
export default router