import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { TodoModule } from '../todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot(),
    LocalStorageModule.withConfig({prefix: 'todo'}),
    BrowserAnimationsModule,
    TodoModule
  ],
  declarations: []
})
export class CoreModule { }
