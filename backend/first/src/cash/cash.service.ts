import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Cash } from './cash.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CashService {
  constructor(@InjectModel(Cash) private cashModel: typeof Cash) {}

  async getCashScoreById(id: number): Promise<Cash> {
    const cash = await this.cashModel.findOne({ where: { id } });
    if (!cash) {
      throw new HttpException('Счёт не найден', HttpStatus.NOT_FOUND);
    }
    return cash;
  }
  async topUpCashScore(id: number, amount: number): Promise<Cash> {
    const cashScore = await this.getCashScoreById(id);
    cashScore.score += amount;
    await cashScore.save();
    return cashScore;
  }
  async withdrawCashScore(id: number, amount: number): Promise<Cash> {
    const cashScore = await this.getCashScoreById(id);
    if (cashScore.score >= amount) {
      cashScore.score -= amount;
      await cashScore.save();
    } else
      throw new HttpException(
        'Операция не выполнена: недостаточно средств',
        HttpStatus.NOT_FOUND,
      );
    return cashScore;
  }
}
