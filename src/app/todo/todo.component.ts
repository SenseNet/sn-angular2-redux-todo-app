import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Actions } from 'sn-redux';
import { ContentTypes } from 'sn-client-js';

export interface IAppState {
};

@Component({
  selector: 'app-todo',
  template: `
    <div>
      <md-checkbox class="example-margin" (click)="changeCompletion(todo)" [(ngModel)]="checked">{{todo.DisplayName}}</md-checkbox>
      <md-icon (click)="deleteTask(todo.Id)">delete</md-icon>
    </div>
  `,
  styles: [`
  .material-icons {
    vertical-align: middle;
        cursor: pointer;
        float: right;
        margin-right: 105px;
    }
  `]
})
export class TodoComponent implements OnInit {
  @Input() todo: ContentTypes.Task;
  @Output() update = new EventEmitter();
  checked = false;
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.checked = (this.todo.Status[0] === 'completed') ? true : false;
  }

  deleteTask(id) {
    this.ngRedux.dispatch(Actions.Delete(id, true));
  }

  changeCompletion(todoItem) {
    const status = (todoItem.Status[0] === 'active') ? 'completed' : 'active';
    const fields = { Status: status };
    this.ngRedux.dispatch(Actions.UpdateContent(todoItem.Id, fields));
  }
}
