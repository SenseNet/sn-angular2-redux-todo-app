import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Actions } from 'sn-redux';
import { Todo } from '../todo.model';

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
  @Input() todo: Todo;
  @Output() update = new EventEmitter();
  checked = false;
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.checked = (this.todo['Status'][0] === 'active') ? false : true;
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
