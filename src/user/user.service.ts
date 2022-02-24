import { Repository } from "typeorm";

import { Injectable, Inject, Logger, LoggerService } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntityRepository: Repository<UserEntity>,
    @Inject(Logger) private readonly loggerService: LoggerService,
  ) {}

  public findAndCount(): Promise<[UserEntity[], number]> {
    this.loggerService.log("Search users", UserService.name);
    return this.userEntityRepository.findAndCount();
  }
}
