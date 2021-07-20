import { Profile } from '../models/profile.js'

export {
    index,
    show,
}

function show(req, res) {
    Profile.findById(req.params.id)
    .then((profile) => {
        Profile.findById(req.user.profile._id)
        .then(self => {
            const isSelf = self._id.equals(profile._id)
            res.render('profiles/show', {
                title: `${profile.name}'s profile`,
                profile,
                self,
                isSelf,
            })
        })
    })
    .catch((err) => {
        console.log(err)
        res.redirect('/')
    })
}

function index(req, res) {
    Profile.find({})
    .then(profiles => {
        res.render('profiles/index', {
            profiles,
            title: 'Profiles'
        }) 
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile}`)
    })
}
