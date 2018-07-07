import { Action, Selector, State, StateContext } from '@ngxs/store';
import { TodoItem, TodoStateModel } from './todo.models';
import { CreateTodo, CreateTodos, DeleteTodo, PatchTodoForm, SwitchMode, UpdateTodo } from './todo.actions';
import { LocalStorageService } from 'angular-2-local-storage';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todoList: [],
    todoForm: {
      id: 0,
      projectName: '',
      priority: 1,
      taskTitle: '',
      description: ''
    },
    mode: 'none'
  }
})
export class TodoState {
  constructor(private _localStorageService: LocalStorageService) {}
  @Selector() static todoProjects(state: TodoStateModel): string[] {
    return state.todoList.map(todo => todo.projectName).filter((value, index, self) => self.indexOf(value) === index );
  }
  @Selector() static todoForm(state: TodoStateModel): TodoItem {
    return state.todoForm;
  }
  @Selector() static mode(state: TodoStateModel): string {
    return state.mode;
  }
  @Action(CreateTodo)
  createTodo(ctx: StateContext<TodoStateModel>, action: CreateTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todoList: [
        ...state.todoList,
        action.payload
      ]
    });
  }
  @Action(CreateTodos)
  createTodos(ctx: StateContext<TodoStateModel>, action: CreateTodos) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todoList: action.payload
    });
  }
  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      todoList: state.todoList.map(todo => todo.id === action.payload.id ? action.payload : todo)
    });
  }
  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
    });
  }
  @Action(SwitchMode)
  switchTodo(ctx: StateContext<TodoStateModel>, action: SwitchMode) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      mode: action.payload
    });
  }
  @Action(PatchTodoForm)
  patchTodoForm(ctx: StateContext<TodoStateModel>, action: PatchTodoForm) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todoForm: action.payload
    });
  }
}
