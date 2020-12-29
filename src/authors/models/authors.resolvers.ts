import { Args, Parent, ResolveField, Int, Resolver, Query} from "@nestjs/graphql";
import { Author } from "./author.model";
import { Post } from '../../posts/models/post.model'
import { AuthorService } from "../autor.service";
import { PostService } from "src/posts/models/post.service";
@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    private authorService:  AuthorService,
    private postsService: PostService,
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
