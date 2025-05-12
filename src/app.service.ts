import { Injectable } from '@nestjs/common';
import { data } from './constants/data';
import { ShipmentsResponse } from './interface/test';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  printMessage() : ShipmentsResponse {
    return data;
  }
}
