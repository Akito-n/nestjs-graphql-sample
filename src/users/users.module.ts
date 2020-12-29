import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { User } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
})

export class UserModule {}
