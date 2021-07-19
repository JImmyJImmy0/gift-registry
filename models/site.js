import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Site,
}


const siteSchema = new Schema ({
    name: String,
    description: String,
    // rating: {
    //     type: Number,
    //     min: 1,
    //     max: 5,
    // },
    url: String,
    owner: {type: Schema.Types.ObjectId, 'ref': 'Profile'}
})

const Site = mongoose.model('Site', siteSchema)