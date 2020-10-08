import {Router} from 'express'
import distributorClient from '../controller/distributorClient'

const router: Router = Router()
router.route('/show-distributor-client')
    .get(distributorClient.showDistributor)

export default router