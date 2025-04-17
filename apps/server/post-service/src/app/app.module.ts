import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqLModule } from './graphql/graphql-module';
import { PrismaAppModule } from '../prisma/prisma.module';
import { PostModule } from './posts/post-module';

@Module({
  imports: [GraphqLModule, PrismaAppModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
