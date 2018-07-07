export interface TodoItem {
  id: number;
  projectName: string;
  taskTitle: string;
  priority: number;
  description: string;
}

export interface TodoStateModel {
  todoList: TodoItem[];
  todoForm: TodoItem;
  mode: 'add' | 'edit' | 'none';
}
