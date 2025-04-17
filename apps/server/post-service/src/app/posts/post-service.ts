import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPosts() {
    return await this.prisma.post.create({
      data: {
        title: 'post title',
        userId: '1111',
      },
    });
  }
}
