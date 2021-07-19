import { Site } from "../models/site.js";

export {
    index,
    create,
}

function create(req, res) {
    req.body.owner = req.user.profile
    Site.create(req.body)
    .then(site => {
        res.redirect('/sites')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/sites')
    })
}

function index(req, res) {
    Site.find({})
    .then(sites => {
        res.render('sites/index', {
            sites,
            title: "Sites"
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/sites')
    })
}

