import {Router} from 'express'
import distributorController from '../controllers/distributorController'

const router: Router = Router()
router.route('/create-distributor')
    .post(distributorController.addDistributor)

export default router