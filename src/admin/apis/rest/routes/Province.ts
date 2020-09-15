import {Router} from 'express'
import provinceResolver from '../controllers/provinceController'

const router : Router = Router()

router.route('/show-province')
    .get(provinceResolver.getProvince)
export default router