import {
  Body,
  Get,
  JsonController,
  Post,
  UploadedFile,
} from 'routing-controllers';
import { CreatePublicationDto } from '../dto/Publications/CreatePublicationDto';
import Publication from '../interfaces/publication';
import CreatePublicationService from '../services/posts/CreatePostService';
import FindPublicationService from '../services/posts/FindPostService';

@JsonController('/publication')
export default class PublicationController {
  findPublicationService = new FindPublicationService();
  createPublicationService = new CreatePublicationService();

  @Get()
  public async find(): Promise<Publication[]> {
    return this.findPublicationService.find();
  }

  // @Post()
  // public async create(@Body() body: CreatePublicationDto) {
  //   return await this.createPublicationService.create(body);
  // }

  @Post()
  public async create(
    @Body() body: CreatePublicationDto,
    @UploadedFile('file') file: any,
  ) {
    return await this.createPublicationService.create(body, file);
  }
}
