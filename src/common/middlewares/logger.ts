import {NextFunction} from "express";
import {Injectable, Logger, Inject, LoggerService, NestMiddleware} from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(@Inject(Logger) private readonly loggerService: LoggerService) {}

  use(req: Request, _res: Response, next: NextFunction): void {
    this.loggerService.log(`${req.method} ${req.url}`, "LoggerMiddleware");
    next();
  }
}
