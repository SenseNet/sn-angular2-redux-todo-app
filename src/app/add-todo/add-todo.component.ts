import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { Actions } from 'sn-redux';
import { Content, ContentTypes, Repository } from 'sn-client-js';
import { Enums } from 'sn-client-js';

export interface IAppState {
};

@Component({
  selector: 'app-add-todo',
  template: `
    <mat-form-field>
      <input #taskName matInput placeholder="What needs to be done?">
    </mat-form-field>
    <button (click)="createTask(taskName.value)" mat-button>Add todo!</button>
  `,
  styles: [`

  `]
})
export class AddTodoComponent implements OnInit {
  @Input() state: IAppState;
  @Input() path: string;

  constructor(private ngRedux: NgRedux<IAppState>, private repository: Repository.SnRepository) { }

  ngOnInit() {
  }

  createTask(title: string) {
    // const c = this.repository.CreateContent({
    //   Name: title,
    //   DueDate: null,
    //   Path: this.path,
    //   Type: 'Task'
    // }, ContentTypes.Task);
    this.ngRedux.dispatch(Actions.CreateContent({
      Name: title,
      DueDate: null,
      Path: this.path,
      Type: 'Task'
    }));
  }
}
