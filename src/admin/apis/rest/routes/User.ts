import {Router} from 'express'
import { adminSignIn } from '@/middlewares/auth'
import userController from '../controllers/userController'

const router: Router = Router()

router.route('/create-user')
    .post(adminSignIn,userController.addUser)
router.route('/get-user')
    .get(adminSignIn,userController.getUser)
router.route('/update-user')
    .put(adminSignIn,userController.updateUser)
router.route('/delete-user/:id')
    .delete(adminSignIn,userController.deleteUser)

router.route('/admin-sign-in')
    .post(adminSignIn, userController.adminSignIn)
router.route('/findId-user/:id')
    .get(adminSignIn,userController.findIdUser)
export default router