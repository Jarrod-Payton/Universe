import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const SpeciesSchema = new Schema({
  name: { type: String, required: true },
  creatorId: { type: ObjectId, required: true, ref: 'Profile' }
})
