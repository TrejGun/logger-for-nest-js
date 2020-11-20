import {Injectable} from "@nestjs/common";
import {WinstonModuleOptions, WinstonModuleOptionsFactory} from "nest-winston";
import {PapertrailTransport} from "winston-papertrail-transport";
import {format, transports} from "winston";
import chalk from "chalk";


export const winstonModuleOptions = {
  format: format.combine(
    format.timestamp(),
    format.printf(args => {
      const {level, context, timestamp, message, stack, trace} = args;
      let color = chalk.green;
      let text = "";
      if (level === "error") {
        color = chalk.red;
        const lines = (stack || trace).split("\n");
        lines[0] = color(lines[0]);
        text = lines.join("\n");
      } else if (level === "info") {
        color = chalk.green;
        text = color(message);
      } else if (level === "warn") {
        color = chalk.yellow;
        text = color(message);
      } else if (level === "debug") {
        color = chalk.magentaBright;
        text = color(message);
      } else if (level === "verbose") {
        color = chalk.cyanBright;
        text = color(message);
      }

      return [
        color(`[Nest] ${process.pid}   -`),
        new Date(timestamp).toLocaleString(),
        context ? chalk.yellow(`[${context as string}]`) : "",
        text,
      ].join(" ");
    }),
  ),
  transports: [
    new transports.Console(),
    new PapertrailTransport({
      host: process.env.PAPERTRAIL_HOST,
      port: process.env.PAPERTRAIL_PORT,
    }),
  ],
};

@Injectable()
export class WinstonConfigService implements WinstonModuleOptionsFactory {
  createWinstonModuleOptions(): WinstonModuleOptions {
    return winstonModuleOptions;
  }
}
