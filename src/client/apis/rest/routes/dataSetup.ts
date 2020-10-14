import {Router} from 'express'
import dataSetupClient from '../controller/dataSetup'

const router : Router = Router()

router.route('/show-dataset-client')
    .get(dataSetupClient.getDatasets)
export default router