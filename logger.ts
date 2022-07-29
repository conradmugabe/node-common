import winston from 'winston';
import WinstonLogger from './loggers/winston.logger';

const transportOptions = {
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console(),
  ],
};

const logger = WinstonLogger.getInstance(transportOptions);

export default logger;
