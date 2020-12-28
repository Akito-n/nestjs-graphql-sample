import { Query } from "@nestjs/common";
import { Args, Parent, ResolveField, Int } from "@nestjs/graphql";
import { Resolver } from "dns";
import { Author } from "./author.model";

@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private authorService:  AuthorService,
    private postsService: PostsService,
  ){}

  @Query(returns => Author, { name: 'author' })
  async getAuthor(@Args('id', {type: () => Int}) id: number){
    return this.authorService.findOneById(id)
  }


  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: Author){
    const { id } = author
    return this.postsService.findAll({authorId: id})
  }
}
