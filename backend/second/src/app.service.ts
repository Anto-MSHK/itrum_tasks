import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  @Cron('5 * * * * *')
  async makeOperation() {
    const curOper = Math.random() * (2 - 0) + 0;
    const curAmount = Math.random() * (1000 - 1) + 1;
    const urls = [
      'http://localhost:3000/topup/1',
      'http://localhost:3000/withdraw/1',
    ];
    await axios
      .post(urls[curOper], { amount: curAmount })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }
}
