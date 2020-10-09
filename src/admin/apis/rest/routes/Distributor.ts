import {Router} from 'express'
import distributorController from '../controllers/distributorController'

const router: Router = Router()
router.route('/create-distributor')
    .post(distributorController.addDistributor)
router.route('/show-distributor')
    .get(distributorController.getDistributor)
router.route('/update-distributor')
    .put(distributorController.updateDistributor)
router.route('/delete-distributor/:id')
    .delete(distributorController.deleteDistributor)
router.route('/findId-distributor/:id')
    .get(distributorController.findIdsDistributor)
router.route('/get-limit-distributor/:page/:perPage')
    .get(distributorController.getLimitDistributor)
export default router