import { Injectable } from '@nestjs/common';
import { data } from './constants/data';
import { ShipmentsResponse } from './interface/test';
import { Sequelize } from 'sequelize-typescript';

@Injectable()

export class AppService {
constructor(private sequelize: Sequelize) {}
  getHello(): string {
    return 'Hello World!';
  }

  printMessage() : ShipmentsResponse {
    return data;
  }
}
