import { dbContext } from '../db/DbContext'

class SpeciesService {
  async getAll(query = {}) {
    const species = await dbContext.Species.find(query).populate('creator', 'name picture')
    return species
  }

  async create(body) {
    const species = await dbContext.Species.create(body)
    return species
  }
}

export const speciesService = new SpeciesService()
