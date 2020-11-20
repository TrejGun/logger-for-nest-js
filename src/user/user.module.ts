import {Logger, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {UserEntity} from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [Logger, UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
