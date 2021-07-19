import { Router } from 'express'
import * as sitesCtrl from '../controllers/sites.js'
import { isLoggedIn } from '../middleware/middleware.js'
import { Site } from '../models/site.js'

export {
    router
}

const router = Router()

router.get('/', sitesCtrl.index)
router.get('/:id', sitesCtrl.show)
router.get('/:id/edit', isLoggedIn, sitesCtrl.edit)
router.post('/', isLoggedIn, sitesCtrl.create)
router.post('/:id/description', isLoggedIn, sitesCtrl.addDescription)