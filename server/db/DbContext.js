import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { SpeciesSchema } from '../models/Species'
import { ValueSchema } from '../models/Value'

class DbContext {
  Species = mongoose.model('Species', SpeciesSchema)
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
