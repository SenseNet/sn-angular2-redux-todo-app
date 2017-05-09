import { Component, OnInit, Inject, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { getVisibleTodos } from '../reducers/filtering';
import { NgRedux, select } from '@angular-redux/store';
import { ODataApi } from 'sn-client-js';
import { Actions } from 'sn-redux';

export interface IAppState {
};

@Component({
  selector: 'app-todolist',
  template: `
    <ul>
    <app-todo
      *ngFor="let todo of todos$ | async"
      [todo]="todo">
    </app-todo>
    </ul>
    <app-filtermenu (changeFilter)="updateListByFilter($event)"></app-filtermenu>
  `,
  styles: [`
  ul {
    margin: 40px 0px 40px 110px;
    padding: 0;
    text-align: left;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodolistComponent implements OnInit, OnChanges {
  filter = 'All';
  todos = [];
  todos$: Observable<any>;
  @Input() state: IAppState;
  @Input() path: string;
  constructor(private ngRedux: NgRedux<IAppState>) {
    if (typeof this.state !== 'undefined') {
      this.todos = getVisibleTodos(this.state, this.filter);
    }
  }
  ngOnInit() {
    this.todos$ = this.ngRedux.select(state => getVisibleTodos(state, this.filter));

    let optionObj = this.getOptionObject(this.filter);

    this.ngRedux.dispatch(Actions.RequestContent(this.path, optionObj));
  }
  ngOnChanges() {

  }
  updateListByFilter(filter) {
    if (this.filter !== filter) {
      this.filter = filter;
      this.state = this.ngRedux.getState();
      let optionObj = this.getOptionObject(this.filter);
      this.ngRedux.dispatch(Actions.RequestContent(this.path, optionObj));
    }
  }
  getOptionObject(filter) {
    let optionObj = new ODataApi.ODataParams({
      select: ['DisplayName', 'Status']
    });
    switch (this.filter) {
      case 'All':
        optionObj.filter = `isOf('Task')`;
        break;
      case 'Active':
        optionObj.filter = `isOf('Task') and Status eq %27Active%27`;
        break;
      case 'Completed':
        optionObj.filter = `isOf('Task') and Status eq %27Completed%27`;
        break;
      default:
        optionObj.filter = `isOf('Task')`;
        break;
    }
    return optionObj;
  }
}
