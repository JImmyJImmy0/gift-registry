import { Site } from "../models/site.js";

export {
    index,
    create,
    show,
}

function show(req, res) {
    Site.findById(req.params.id)
    .populate('owner')
    .then(site => {
        res.render('/sites/show', {
            site,
            title: 'Site Review'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/sites')
    })
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

