import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import { Actions } from 'sn-redux';

export interface IAppState {
};

@Component({
  selector: 'app-todo-list',
  template: `<div id="app">
    <img src="./assets/img/sensenetlogo.png">
    <img src="./assets/img/angularlogo.png">
    <app-login></app-login>
    <h1>Todos</h1>
    <app-add-todo
      [state]="state$ | async"
      [path]="path"></app-add-todo>
    <app-todolist
      [state]="state$ | async"
      [path]=path></app-todolist>
  </div>`,
  styleUrls: [
    '../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css'
  ],
  styles: [`
  h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#root {
  margin: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
      width: 500px;
    margin: 60px auto;
}
#app > img:first-of-type {
  margin-right: 50px;
}
#app > img {
  height: 150px;
  margin-bottom: 20px;
}
  `]
})
export class SnTodoListComponent implements OnInit {
  @select() state$: Observable<IAppState>;
  path = '/Root/Sites/Default_Site/todos';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
      this.ngRedux.dispatch(Actions.CheckLoginState());
  }

}
