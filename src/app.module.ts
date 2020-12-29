import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorModule } from './authors/author.module';

@Module({
  imports: [
    AuthorModule,
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      sortSchema: true,
  })
],
})
export class AppModule {}
