import { Logger, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserModule } from "./user/user.module";
import { TypeOrmConfigModule } from "./typeorm/typeorm-config.module";
import { TypeOrmConfigService } from "./typeorm/typeorm-config.service";
import { RequestLoggerModule } from "./request-logger";

@Module({
  providers: [Logger],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useExisting: TypeOrmConfigService,
    }),
    RequestLoggerModule,
    UserModule,
  ],
})
export class AppModule {}
