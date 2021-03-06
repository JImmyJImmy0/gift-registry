import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

export {
    router
}

const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
router.get('/:profileId/:giftId', isLoggedIn, profilesCtrl.showGift)
router.post('/:id/gifts', isLoggedIn, profilesCtrl.createGift)
router.delete('/:profileId/:giftId', isLoggedIn, profilesCtrl.delete)