import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActionsComponent } from './todo-actions.component';

describe('TodoActionsComponent', () => {
  let component: TodoActionsComponent;
  let fixture: ComponentFixture<TodoActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
