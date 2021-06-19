import { InternalServerError, NotFoundError } from 'routing-controllers';
import Publication from '../../interfaces/publication';
import PublicationModel from '../../models/publication';

export default class FindPublicationService {
  public async find(): Promise<Publication[]> {
    try {
      return PublicationModel.find().exec();
    } catch (error) {
      throw new InternalServerError('Internal server error');
    }
  }
}
