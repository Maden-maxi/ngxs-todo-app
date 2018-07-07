import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { NgxsModule } from '@ngxs/store';
import { TodoState } from './+state/todo.state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ConnectFormDirective } from './directives/connect-form.directive';
import { TodoActionsComponent } from './components/todo-actions/todo-actions.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([TodoState]),
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    FilterPipeModule,
    OrderModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    TodoActionsComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    ConnectFormDirective
  ]
})
export class TodoModule { }
