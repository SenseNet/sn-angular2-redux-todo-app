import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import 'rxjs';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { SnTodoListComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';

import { FiltermenuComponent } from './filtermenu/filtermenu.component';

import { combineReducers } from 'redux';
import { Store, Reducers } from 'sn-redux';
import { Observable } from 'rxjs/Observable';
import { Collection, ODataApi } from 'sn-client-js';
import { listByFilter } from './reducers/filtering';

interface IAppState { };

// ToDo
// SetSiteUrl('https://demo06.demo.sensenet.com');

const collection = Reducers['collection'];
const myReducer = combineReducers({
  collection,
  listByFilter
});

const store = Store.configureStore(myReducer, null, null, { });

@NgModule({
  declarations: [
    SnTodoListComponent,
    AddTodoComponent,
    TodolistComponent,
    TodoComponent,
    FiltermenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgReduxModule
  ],
  exports: [
    SnTodoListComponent,
    AddTodoComponent,
    TodolistComponent,
    TodoComponent,
    FiltermenuComponent
  ],
  providers: [NgReduxModule],
  bootstrap: [SnTodoListComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
