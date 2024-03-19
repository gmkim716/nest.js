import { Injectable } from '@nestjs/common';

@Injectable()

export class DbService {
  getStockPrice(): string {
    return 'Hello World!';
  }
}
