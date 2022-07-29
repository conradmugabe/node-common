import winston, { Logger, LoggerOptions } from 'winston';
import { Logger as ILogger } from '../interfaces/logger';

export default class WinstonLogger implements ILogger {
  static instance: WinstonLogger;

  private logger: Logger;

  constructor(transporter: LoggerOptions) {
    this.logger = winston.createLogger(transporter);
  }

  log = (level: string, message: string, meta?: any) => {
    this.logger.log(level, message, meta);
  };

  info = (message: string): void => {
    this.logger.info(message);
  };

  debug = (message: string): void => {
    this.logger.debug(message);
  };

  warn = (message: string): void => {
    this.logger.warn(message);
  };

  error = (message: string): void => {
    this.logger.error(message);
  };

  static getInstance(transporter: LoggerOptions): WinstonLogger {
    if (!WinstonLogger.instance) {
      WinstonLogger.instance = new WinstonLogger(transporter);
    }
    return WinstonLogger.instance;
  }
}
