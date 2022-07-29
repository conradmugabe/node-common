import logger from './logger';

function add(a: number, b: number): number {
  logger.info(`adding ${a} and ${b}`);
  setTimeout(() => {
    logger.info(`result: ${a + b}`);
  }, 1000);
  return a + b;
}

add(10, 4);

logger.error('error message');
logger.warn('warning message');
logger.info('info message');
logger.debug('debug message');
