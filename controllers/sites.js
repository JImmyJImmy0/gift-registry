import { Site } from "../models/site.js";

export {
    index,
    create,
    show,
    addDescription,
    edit,
    update,
    deleteSite as delete,
}

function deleteSite(req, res) {
    console.log('delete works')
}

function update(req, res) {
    Site.findById(req.params.id)
    .then(site => {
        if (site.owner.equals(req.user.profile._id)) {
            site.update(req.body, {new: true})
            .then(() => {
                res.redirect(`/sites/${site._id}`)
            })
        } else {
            throw new Error ('Not authorized to update this site')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/sites`)
    })
}

function edit(req, res) {
    Site.findById(req.params.id)
    .then(site => {
        res.render('sites/edit', {
            site,
            title: 'Edit Description'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/sites')
    })
}

function addDescription(req, res) {
    Site.findById(req.params.id)
    .then(site => {
        site.description.push(req.body)
        site.save()
        .then(() => {
            res.redirect('/sites/show')
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/sites/show')
    }) 
}

function show(req, res) {
    Site.findById(req.params.id)
    .populate('owner')
    .then(site => {
        res.render('sites/show', {
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

