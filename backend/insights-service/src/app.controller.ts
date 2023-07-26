import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  getGoodbye(): string {
    return this.appService.getGoodbye();
  }
  @Get()
  getMore(): string {
    return this.appService.getMore();
  }
}
