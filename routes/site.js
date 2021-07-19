import { Router } from 'express'
import * as siteCtrl from '../controllers/sites.js'

export {
    router
}

const router = Router()

router.get('/', siteCtrl.index)