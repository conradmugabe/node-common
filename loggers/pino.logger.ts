import logger from 'pino';
import { Logger as ILogger } from '../interfaces/logger';

export default class PinoLogger implements ILogger {
  static instance: PinoLogger;

  private logger: logger.Logger;

  constructor(transporter: logger.LoggerOptions) {
    this.logger = logger(transporter);
  }

  log = (level: string, message: string, meta?: any) => {
    this.logger.info(level, message, meta);
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

  static getInstance(transporter: logger.LoggerOptions): PinoLogger {
    if (!PinoLogger.instance) {
      PinoLogger.instance = new PinoLogger(transporter);
    }
    return PinoLogger.instance;
  }
}
