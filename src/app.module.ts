import {Logger, MiddlewareConsumer, Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {UserModule} from "./user/user.module";
import {TypeOrmConfigModule} from "./typeorm/typeorm-config.module";
import {TypeOrmConfigService} from "./typeorm/typeorm-config.service";
import {LoggerMiddleware} from "./common/middlewares/logger";

@Module({
  providers: [Logger],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useExisting: TypeOrmConfigService,
    }),
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}
