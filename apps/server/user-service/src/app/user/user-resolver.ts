import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user-service';
import { User } from './user-model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async getUser() {
    return {
      id: '111',
      name: 'rahul',
      email: 'rahul@blackflux.in',
    };
  }

  @Mutation(() => User)
  async createUser() {
    return await this.userService.createUser();
  }
}
