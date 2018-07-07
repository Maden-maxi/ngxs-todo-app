import { TodoItem } from './todo.models';

export class CreateTodo {
  static readonly type = '[Todo] add todo list item';
  constructor(public payload: TodoItem) {}
}

export class CreateTodos {
  static readonly type = '[Todo] add todo items to list';
  constructor(public payload: TodoItem[]) {}
}

export class ReadTodo {
  static readonly type = '[Todo] read todo list';
}

export class UpdateTodo {
  static readonly type = '[Todo] edit todo list item';
  constructor(public payload: TodoItem) {}
}

export class DeleteTodo {
  static readonly type = '[Todo] delete todo from list';
  constructor(public payload: TodoItem) {}
}

export class SwitchMode {
  static readonly type = '[Todo] switch mode';
  constructor(public payload: 'add' | 'edit' | 'none') {}
}

export class PatchTodoForm {
  static readonly type = '[Todo] patch todo form';
  constructor(public payload: TodoItem) {}
}
