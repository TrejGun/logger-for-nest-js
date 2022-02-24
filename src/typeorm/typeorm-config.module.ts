import { Module } from "@nestjs/common";

import { TypeOrmConfigService } from "./typeorm-config.service";
import { TypeOrmLoggerModule } from "./typeorm-logger.module";

@Module({
  imports: [TypeOrmLoggerModule],
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class TypeOrmConfigModule {}
