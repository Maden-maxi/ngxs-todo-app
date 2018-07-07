import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TodoItem } from '../../+state/todo.models';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  animations: [
    trigger('toggleState', [
      state('true' , style({  })),
      state('false', style({ height: 0, padding: 0 })),
      state('void', style({ height: 0, padding: 0 })),
      // transition
      transition('* => *', animate('300ms')),
    ])
  ],
})
export class TodoListItemComponent implements OnInit {
  showDescription = false;
  @Input() item: TodoItem;
  @Output() edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() close: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit() {
  }

}
