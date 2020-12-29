import { Module } from "@nestjs/common";
import { PostService } from "src/posts/models/post.service";
import { AuthorService } from "./autor.service";
import { AuthorResolver } from "./models/authors.resolvers";

@Module({
  providers: [AuthorResolver, AuthorService, PostService]
}
)

export class AuthorModule {}

