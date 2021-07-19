import { Site } from "../models/site.js";

export {
    index,
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

