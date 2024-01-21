import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

import ormconfig from "../ormconfig";
import { TypeOrmLoggerService } from "./typeorm-logger.service";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly logger: TypeOrmLoggerService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      logger: this.logger,
      ...ormconfig,
    };
  }
}
