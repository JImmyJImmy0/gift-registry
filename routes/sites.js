import { Router } from 'express'
import * as sitesCtrl from '../controllers/sites.js'
import { isLoggedIn } from '../middleware/middleware.js'

export {
    router
}

const router = Router()

router.get('/', sitesCtrl.index)
router.post('/', isLoggedIn, sitesCtrl.create)