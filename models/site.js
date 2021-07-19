import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Site,
}

const infoSchema = new Schema ({
    name: String,
    description: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    link: String,
    site: {type: mongoose.Schema.Types.ObjectId, ref: 'Site'}
})

const siteSchema = new Schema ({
    name: String,
    info: [infoSchema],
    owner: {type: Schema.Types.ObjectId, 'ref': 'Profile'}
})

const Site = mongoose.model('Site', siteSchema)