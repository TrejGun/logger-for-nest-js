import { NextFunction, Request, Response } from "express";
import { Inject, Logger, LoggerService, Module } from "@nestjs/common";
import { MiddlewareConsumer } from "@nestjs/common/interfaces";

@Module({
  providers: [Logger],
})
export class RequestLoggerModule {
  constructor(
    @Inject(Logger)
    private readonly loggerService: LoggerService,
  ) {}

  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply((req: Request, _res: Response, next: NextFunction): void => {
        this.loggerService.log(`${req.method} ${req.url}`, RequestLoggerModule.name);
        next();
      })
      .forRoutes("/");
  }
}
