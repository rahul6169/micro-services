import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async createPosts() {
    return await this.prisma.post.create({
      data: {
        title: 'post title',
        userId: '6800ca1e2ec2761c003f51bc',
      },
    });
  }
  async getPost() {
    return await this.prisma.post.findFirst({});
  }
}
