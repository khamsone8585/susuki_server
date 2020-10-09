import {Router} from 'express'
import dataSetupController from '../controller/dataSetup'

const router : Router = Router()

router.route('/show-dataset-client')
    .get(dataSetupController.getDatasets)
export default router