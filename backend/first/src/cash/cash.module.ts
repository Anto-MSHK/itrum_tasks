import { Module } from '@nestjs/common';
import { CashController } from './cash.controller';
import { CashService } from './cash.service';
import { Cash } from './cash.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CashController],
  providers: [CashService],
  imports: [SequelizeModule.forFeature([Cash])],
})
export class CashModule {}
