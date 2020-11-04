import {Router} from 'express'
import userController from '../controllers/userController'
import newPasswordController from '../controllers/newPasswordController'
import {adminLogin} from '@/middlewares/auth'
const router: Router = Router()

router.route('/admin-sign-in')
    .post(adminLogin, userController.adminSignIn)
router.route('/send-email')
    .post(userController.sendEmail)
router.route('/reset-new-password/:id')
    .put(newPasswordController.changePasswordWhenLogin)
export default router

