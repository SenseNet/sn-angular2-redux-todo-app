import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux } from '@angular-redux/store';
import { Actions } from 'sn-redux';
import { Content, ContentTypes } from 'sn-client-js';

export interface IAppState {
};

@Component({
  selector: 'app-add-todo',
  template: `
    <md-input-container>
      <input #taskName mdInput placeholder="What needs to be done?">
    </md-input-container>
    <button (click)="createTask(taskName.value)" md-button>Add todo!</button>
  `,
  styles: [`

  `]
})
export class AddTodoComponent implements OnInit {
  @Input() state: IAppState;
  @Input() path: string;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  createTask(title: string) {
    this.ngRedux.dispatch(Actions.CreateContent(this.path, ContentTypes.Task, {
      Name: title,
      DueDate: null
    }));
  }
}
