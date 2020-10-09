import {Router} from 'express'
import distributorClient from '../controller/distributorClient'

const router: Router = Router()
router.route('/show-distributor-client')
    .get(distributorClient.showDistributor)
router.route('/find-distributor-client/:id')
    .get(distributorClient.findIdProducts)
router.route('/get-limit-distributor-client/:page/:perPage')
    .get(distributorClient.getLimitDistributor)
export default router