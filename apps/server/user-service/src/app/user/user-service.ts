import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser() {
    return await this.prisma.user.create({
      data: {
        name: 'Rahul',
        email: 'rahul@blackux.in',
      },
    });
  }
}
