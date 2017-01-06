/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SnTodoListComponent } from './app.component';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodolistComponent } from './todolist/todolist.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SnTodoListComponent
      ],
      imports: [AddTodoComponent, TodolistComponent],
    });
    TestBed.compileComponents();
  });

  // it('should create the app', async(() => {
  //   let fixture = TestBed.createComponent(SnTodoListComponent);
  //   let app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
