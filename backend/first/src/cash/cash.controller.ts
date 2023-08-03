import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CashService } from './cash.service';
import { Cash } from './cash.model';
import { AppModule } from 'src/app.module';

@Controller('cash')
export class CashController {
  constructor(private cashService: CashService) {}

  @Get(':id')
  async getCashScoreById(@Param('id') id: number): Promise<Cash> {
    return this.cashService.getCashScoreById(id);
  }

  @Post('topup/:id')
  async topUpCashScore(
    @Param('id') id: number,
    @Body('amount') amount: number,
  ): Promise<Cash> {
    return this.cashService.topUpCashScore(id, amount);
  }

  @Post('withdraw/:id')
  async withdrawCashScore(
    @Param('id') id: number,
    @Body('amount') amount: number,
  ): Promise<Cash> {
    return this.cashService.withdrawCashScore(id, amount);
  }
}
