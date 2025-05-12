import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ShipmentsResponse } from './interface/test';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {    
    return this.appService.getHello();
  }

  @Get("/data")
  getData() : ShipmentsResponse {
    return this.appService.printMessage();
  }
}
