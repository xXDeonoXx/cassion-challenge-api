import { InternalServerError, NotFoundError } from 'routing-controllers';
import { CreatePublicationDto } from '../../dto/Publications/CreatePublicationDto';
import Publication from '../../interfaces/publication';
import PublicationModel from '../../models/publication';

export default class CreatePublicationService {
  public async create(body: CreatePublicationDto): Promise<Publication> {
    const publication = new PublicationModel(body);
    try {
      await publication.save();
      console.log(publication);
      return publication;
    } catch (error) {
      console.log(error);
      throw new InternalServerError(error);
    }
  }
}
