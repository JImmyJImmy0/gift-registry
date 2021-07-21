import { Router } from 'express'
import * as sitesCtrl from '../controllers/sites.js'
import { isLoggedIn } from '../middleware/middleware.js'


export {
    router
}

const router = Router()

router.get('/', sitesCtrl.index)
router.get('/new', sitesCtrl.new)
router.get('/:id', sitesCtrl.show)
router.get('/:id/edit', isLoggedIn, sitesCtrl.edit)
router.post('/', isLoggedIn, sitesCtrl.create)
router.post('/:id/description', isLoggedIn, sitesCtrl.addDescription)
router.put('/:id', isLoggedIn, sitesCtrl.update)
router.delete('/:id', isLoggedIn, sitesCtrl.delete)