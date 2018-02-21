import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import 'rxjs';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { SnTodoListComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';

import { LoginComponent, LoginDialogComponent } from './login/login.component';
import { FiltermenuComponent } from './filtermenu/filtermenu.component';

import { combineReducers } from 'redux';
import { Store, Reducers } from 'sn-redux';
import { Observable } from 'rxjs/Observable';
import { Collection, ODataApi, Repository } from 'sn-client-js';
import { listByFilter } from './reducers/filtering';

import {
  MatFormFieldModule, MatCheckboxModule, MatIconModule,
  MatButtonModule, MatToolbarModule, MatDialogModule, MatInputModule
} from '@angular/material';
import { SnRepository } from 'sn-client-js/dist/src/Repository';


interface IAppState { };

@NgModule({
  declarations: [
    SnTodoListComponent,
    AddTodoComponent,
    TodolistComponent,
    TodoComponent,
    FiltermenuComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgReduxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule
  ],
  exports: [
    SnTodoListComponent,
    AddTodoComponent,
    TodolistComponent,
    TodoComponent,
    FiltermenuComponent,
    LoginComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [NgReduxModule, {
    provide: Repository.SnRepository,
    useFactory: () => {
      return new Repository.SnRepository({
        // You can set your site URL here, if it's different from the host that will serve this ToDo application
        // RepositoryUrl: 'https://demo06.demo.sensenet.com'
        RepositoryUrl: 'https://dmsservice.demo.sensenet.com'
    });
    }
  }],
  bootstrap: [SnTodoListComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, repository: Repository.SnRepository) {
    const collection = Reducers['collection'];
    console.log('Reducers: ', Reducers);
    const myReducer = combineReducers({
      sensenet: Reducers.sensenet,
      listByFilter
    });

    const store = Store.configureStore(myReducer, null, null, {}, repository);
    ngRedux.provideStore(store);
  }
}
