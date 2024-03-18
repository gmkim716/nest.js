import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/db')
export class DbController {
  constructor(private readonly appService: AppService) {}

  @Get('stock-price/:isuCd')
  findOne(@Param('isuCd') isuCd: string) {
    return this.appService.getStockPrice(isuCd);
  }
}
