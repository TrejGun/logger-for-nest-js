import {Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";

import {TypeOrmLoggerService} from "./typeorm-logger.service";
import ormconfig from "../ormconfig";

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
