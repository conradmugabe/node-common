export interface Logger {
  log(level: string, message: string, meta?: any): void;
  info(message: string): void;
  debug(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}
