import {Router} from 'express'
import specProductsController from '../controllers/specproductsController'

const router : Router = Router()
router.route('/add-spec-products')
    .post(specProductsController.addSpec)
router.route('/get-spec-products')
    .get(specProductsController.getSpec)
router.route('/update-spec-products')
    .put(specProductsController.updateSpec)
router.route('/delete-spec-products/:id')
    .delete(specProductsController.deleteSpec)
router.route('/findId-spec-products/:id')
    .get(specProductsController.findIdSpec)
router.route('/sort-specProducts')
    .put(specProductsController.sortSpecProduct)
export default router