import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Site,
}


const siteSchema = new Schema ({
    name: String,
    description: String,
    url: String,
    owner: {type: Schema.Types.ObjectId, 'ref': 'Profile'}
})

const Site = mongoose.model('Site', siteSchema)