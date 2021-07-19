export {
    passUserToView
}

function passUserToView(req, res, next) {
    res.locals.user = req.user ? req.user : null
    next()
}
