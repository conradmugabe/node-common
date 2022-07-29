# node-common

This is a collection of various modules that can be used with wrappers

## Logger

The logger has a function getInstance that returns a singleton instance of the logger.

### Winston Logger

```typescript
// Logger.ts

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
```

### Pino Logger

```typescript
// Logger.ts

// this example assumes you have installed pino-pretty as a dev-dependency
import dayjs from dayjs;

const transportOptions = {
  transport: {
    target: 'pino-pretty',
  },
  level: 'info',
  base: {
    pid: false,
  },
  timestamp: () => `"time":"${dayjs().format('YYYY-MM-DD HH:mm:ss')}"`,
};

const logger = PinoLogger.getInstance(transportOptions);

export default logger;
```
