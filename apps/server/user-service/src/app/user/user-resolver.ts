import { Query, Resolver } from '@nestjs/graphql';
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
}
