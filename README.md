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
