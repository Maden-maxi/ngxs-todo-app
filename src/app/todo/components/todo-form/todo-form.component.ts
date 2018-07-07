import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodoItem } from '../../+state/todo.models';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  form: FormGroup;
  @Input() form$: Observable<TodoItem>;
  @Input() mode: 'add' | 'edit';
  @Output() formSubmit: EventEmitter<{item: TodoItem, mode: 'add' | 'edit'}> = new EventEmitter<{item: TodoItem, mode: 'add' | 'edit'}>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  priorities = [1, 2, 3, 4];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      id: '',
      taskTitle: ['', Validators.required],
      projectName: ['', Validators.required],
      priority: [1, Validators.required],
      description: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.mode === 'add') {
      this.form.patchValue({id: Date.now()});
    }
    this.formSubmit.emit({item: this.form.value, mode: this.mode});
  }
}
