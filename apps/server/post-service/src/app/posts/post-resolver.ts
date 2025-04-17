import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post-service';
import { Post } from './post-model';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Post)
  async getposts() {
    return {
      id: '111',
      title: 'rahul',
      userId: 'rahul@blackflux.in',
    };
  }

  @Mutation(() => Post)
  async createPosts() {
    return await this.postService.createPosts();
  }
}
