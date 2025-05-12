import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  // In-memory “local” data store
  private cats: Cat[] = [
    { id: 1, name: 'Whiskers', age: 2, breed: 'Siamese' },
    { id: 2, name: 'Paws',      age: 4, breed: 'Maine Coon' },
  ];

  findAll(): Cat[] {
    return this.cats;
  }
}
