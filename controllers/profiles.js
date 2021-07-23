import { Profile } from '../models/profile.js'

export {
    index,
    show,
    createGift,
    showGift,
    deleteGift as delete,
}

function deleteGift(req, res) {
    Profile.findById(req.user.profile)
    .then(profile => {
        if (profile._id.equals(req.user.profile._id)) {
            profile.gifts.remove({_id: req.params.giftId})
            profile.save()
            .then(() => {
                res.redirect(`/profiles/${req.user.profile._id}`)
            })
        } else {
            throw new Error ('You are not authorized to delete this gift')
        }
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile}`)
    })
}

function showGift(req, res) {
    Profile.findById(req.params.profileId)
    .then(profile => {
        const gift = profile.gifts.id(req.params.giftId)
        res.render('profiles/gift', {
            gift,
            profile,
            title: 'Gift'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile}`)
    })
}

function createGift(req, res) {
    Profile.findById(req.user.profile._id)
    .then(profile => {
        profile.gifts.unshift(req.body)
        profile.save()
        .then(() => {
            res.redirect(`/profiles/${req.user.profile._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile}`)
    })
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
// hi