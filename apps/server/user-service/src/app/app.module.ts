import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqLModule } from './graphql/graphql-module';
import { PrismaAppModule } from '../prisma/prisma.module';
import { UserModule } from './user/user-module';

@Module({
  imports: [GraphqLModule, PrismaAppModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
