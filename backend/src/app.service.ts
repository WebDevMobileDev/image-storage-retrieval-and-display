import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { userInfo } from 'os';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

    getHello(): string {
     return "hello"
  }
}
