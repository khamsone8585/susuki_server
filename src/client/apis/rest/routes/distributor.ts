import {Router} from 'express'
import distributorClient from '../controller/distributorClient'

const router: Router = Router()
router.route('/show-distributor-client')
    .get(distributorClient.showDistributor)
router.route('/find-distributor-client')
    .get(distributorClient.findIdProducts)
export default router