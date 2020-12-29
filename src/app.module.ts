import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Connection } from 'typeorm';
import { AuthorModule } from './authors/author.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      sortSchema: true,
  }),
  TypeOrmModule.forRoot()
],
})
export class AppModule {
  constructor(private connection: Connection){}
}
