import { Auth0Provider } from '@bcwdev/auth0provider'
import { speciesService } from '../services/SpeciesService'
import BaseController from '../utils/BaseController'

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    const query = res.query
    const Species = await speciesService.getAll(query)
    return res.send(Species)
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const species = await speciesService.create(req.body)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }
}
