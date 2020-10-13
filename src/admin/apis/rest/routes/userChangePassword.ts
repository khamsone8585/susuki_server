import {Router} from 'express'

import userChangePassword from '../controllers/userChangePassword'

const router: Router = Router()


router.route('/update-user-change')
    .put(userChangePassword.updateUser)

router.route('/findId-user/:id')
    .get(userChangePassword.findIdUser)

export default router