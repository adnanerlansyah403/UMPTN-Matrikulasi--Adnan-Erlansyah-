import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!, My Name is Adnan Erlansyah From Indonesian. I was born in Bekasi, now im already 19 years old';
  }
}
