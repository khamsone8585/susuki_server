
import {Router} from 'express'
import userController from '../controllers/userController'
import {adminLogin} from '@/middlewares/auth'
const router: Router = Router()

router.route('/admin-sign-in')
.post(adminLogin, userController.adminSignIn)

export default router

