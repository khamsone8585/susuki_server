import {Router} from 'express'
import datasetsController from '../controllers/datasetupController'

const router : Router = Router()

router.route('/create-datasets')
    .post(datasetsController.addDatasets)
router.route('/show-datasets')
    .get(datasetsController.getDatasets)
router.route('/update-datasets')
    .put(datasetsController.updateDatasets)
router.route('/delete-datasets/:id')
    .delete(datasetsController.deleteDatasets)
export default router