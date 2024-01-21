import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Logger } from "@nestjs/common";

import { TypeOrmConfigService } from "../typeorm/typeorm-config.service";
import { TypeOrmConfigModule } from "../typeorm/typeorm-config.module";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [TypeOrmConfigModule],
          useExisting: TypeOrmConfigService,
        }),
        TypeOrmModule.forFeature([UserEntity]),
      ],
      providers: [Logger, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
