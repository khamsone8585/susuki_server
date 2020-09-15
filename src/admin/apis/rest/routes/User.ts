
import {Router} from 'express'
import { adminSignIn } from '@/middlewares/auth'
import userController from '../controllers/userController'

const router: Router = Router()
router.route('/create-user')
    .post(userController.addUser)
router.route('/get-user')
    .get(userController.getUser)
router.route('/update-user')
    .put(userController.updateUser)
router.route('/delete-user/:id')
    .delete(userController.deleteUser)

router.route('/admin-sign-in')
    .post(adminSignIn userController.adminSignIn)
export default router