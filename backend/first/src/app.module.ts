import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CashModule } from './cash/cash.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cash } from './cash/cash.model';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      models: [Cash],
      autoLoadModels: true,
      synchronize: true,
    }),
    CashModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
