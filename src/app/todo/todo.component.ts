import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from './+state/todo.state';
import { Observable } from 'rxjs';
import { TodoItem, TodoStateModel } from './+state/todo.models';
import { CreateTodo, CreateTodos, DeleteTodo, PatchTodoForm, SwitchMode, UpdateTodo } from './+state/todo.actions';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos$: Observable<TodoItem[]>;
  @Select(TodoState.todoProjects) projects$: Observable<string[]>;
  @Select(TodoState.todoForm) todoForm$: Observable<TodoItem>;
  @Select(TodoState.mode) mode$: Observable<string>;
  projectName = new FormControl();
  sortBy = 'id';
  sort = new FormControl(false);
  constructor(
    private _store: Store,
    private _localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.todos$ = this._store.select((state) => {
      this._localStorageService.set('todos', state.todo.todoList);
      return state.todo.todoList;
    });
    const todos: TodoItem[] = this._localStorageService.get('todos');
    if (todos) {
      if (todos.length) {
        this._store.dispatch(new CreateTodos(todos));
      }
    }

  }
  addDemoTodos() {
    const demoTodos = [
      {
        id: Date.now(),
        projectName: 'Shop',
        taskTitle: 'Cart module',
        priority: 1,
        description: 'lorem ipsum'
      },
      {
        id: Date.now() + 1,
        projectName: 'Shop',
        taskTitle: 'Search page',
        priority: 2,
        description: 'dolor lorem ipsum'
      },
      {
        id: Date.now() + 3,
        projectName: 'Shop',
        taskTitle: 'Product page',
        priority: 3,
        description: 'dolor lorem ipsum'
      },
      {
        id: Date.now() + 4,
        projectName: 'Shop',
        taskTitle: 'Home page',
        priority: 4,
        description: 'dolor lorem ipsum'
      }
    ];
    this._store.dispatch(demoTodos.map(todo => new CreateTodo(todo)));
  }
  onFormSubmit($event: {item: TodoItem, mode: 'add' | 'edit'}) {
    $event.mode === 'add' ? this._store.dispatch(new CreateTodo($event.item)) : this._store.dispatch(new UpdateTodo($event.item));
    this.onFormClose();
  }
  onFormClose() {
    this._store.dispatch(new SwitchMode('none'));
    this._store.dispatch(new PatchTodoForm({
      id: 0,
      projectName: '',
      taskTitle: '',
      priority: 1,
      description: ''
    }));
  }
  changeSort($event) {
    this.sortBy = $event.checked ? 'priority' : 'id';
  }
  turnAddMode() {
    this._store.dispatch(new SwitchMode('add'));
  }
  onEdit($event) {
    this._store.dispatch(new SwitchMode('edit'));
    this._store.dispatch(new PatchTodoForm($event));
  }
  onClose($event) {
    this._store.dispatch(new DeleteTodo($event));
  }
}
