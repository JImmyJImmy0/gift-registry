import mongoose from 'mongoose'

export {
  Profile
}

const giftSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // image: Image,
  note: String,
  priority: Number,
  url: String, 
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  gifts: [giftSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)