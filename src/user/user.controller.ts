import { Controller, Get } from "@nestjs/common";

import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  public findAll(): Promise<{ list: UserEntity[]; count: number }> {
    return this.userService.findAndCount().then(([list, count]) => ({ list, count }));
  }
}
