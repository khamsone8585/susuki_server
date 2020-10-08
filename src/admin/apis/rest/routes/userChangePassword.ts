
import {Router} from 'express'
import { adminSignIn } from '@/middlewares/auth'
import userChangePassword from '../controllers/userChangePassword'

const router: Router = Router()


router.route('/update-user-change')
    .put(userChangePassword.updateUser)

router.route('/admin-sign-in')
    .post(adminSignIn, userChangePassword.adminSignIn)
router.route('/findId-user/:id')
    .get(userChangePassword.findIdUser)
export default router