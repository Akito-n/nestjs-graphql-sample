import { Injectable } from "@nestjs/common";

@Injectable()
export class PostService{
  async findAll(args: {authorId: number}){
    return args.authorId
  }
}
