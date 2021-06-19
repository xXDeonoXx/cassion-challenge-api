import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from 'routing-controllers';
import { CreatePublicationDto } from '../../dto/Publications/CreatePublicationDto';
import Publication from '../../interfaces/publication';
import PublicationModel from '../../models/publication';
import { uploadFileToS3 } from '../../utils/uploadFileToS3';

export default class CreatePublicationService {
  public async create(
    body: CreatePublicationDto,
    file: any,
  ): Promise<Publication> {
    if (!file)
      throw new BadRequestError('A publication must have a valid image file');
    const image_url = await uploadFileToS3(file);
    const publication = new PublicationModel({ ...body, image_url: image_url });
    try {
      await publication.save();
      return publication;
    } catch (error) {
      throw new InternalServerError(error);
    }
  }
}
