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

# Database

The logger has a function getInstance that returns a singleton instance of the logger.

## MongoDB

```typescript
// interfaces/Todo.ts
interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

type NewTodo = Pick<Todo, 'title' | 'completed'>;

// todos.ts
const createTodos = async () => {
  MongooseDatabase.connectToDatabase();
  const database = MongooseDatabase.getInstance(TodoModel);
  const newTodos = await database.createMany<NewTodo, Todo>([
    { title: 'Buy milk', completed: false },
    { title: 'Buy eggs', completed: false },
    { title: 'Buy bread', completed: false },
  ]);
  console.log(newTodos);
  return newTodos;
};

const createTodo = async () => {
  MongooseDatabase.connectToDatabase();
  const database = MongooseDatabase.getInstance(TodoModel);
  const newTodo = await database.create<NewTodo, Todo>({
    title: 'Buy milk',
    completed: false,
  });
  console.log(newTodo);
  return newTodo;
};

const findTodos = async () => {
  MongooseDatabase.connectToDatabase();
  const database = MongooseDatabase.getInstance(TodoModel);
  const todos = await database.readMany<ITodo>({
    queries: [{ field: 'completed', sign: Sign.equal, value: false }],
    limit: 2,
    skip: 1,
    sort: { createdAt: 'desc' },
    select: ['title', 'body', 'completed'],
  });
  console.log(todos);
  return todos;
};
```
