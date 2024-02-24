import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    PrismaModule,
    SchoolModule, 
  ],
  providers: [AppService],
})
export class AppModule {}
