import { Get, JsonController } from 'routing-controllers';

@JsonController('/teste')
export default class TesteController {
  @Get()
  public async test() {
    return `i'm alive`;
  }
}
