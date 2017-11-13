import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Actions, Reducers } from 'sn-redux';
import { ContentTypes } from 'sn-client-js';
import { Observable } from 'rxjs/Observable';
import { Authentication } from 'sn-client-js';
import { getLoginState } from '../reducers/loginState';
import { MdDialog } from '@angular/material';


export interface IAppState {
    collection: any;
};

@Component({
    selector: 'app-login-dialog',
    template: `
    <div>
        <h1 md-dialog-title>Log in</h1>
        <md-dialog-content>
            <md-input-container>
                <input mdInput [(ngModel)]="userName" placeholder='Username' name='userName' type='text'>
            </md-input-container>
            <md-input-container>
                <input mdInput [(ngModel)]="password" placeholder='Password' name='password' type='password'>
            </md-input-container>
        </md-dialog-content>
        <md-dialog-actions>
            <button md-dialog-close md-button type='submit' (click)="login()"> Login </button>
        </md-dialog-actions>
    </div>`
})
export class LoginDialogComponent {

    public userName: string;
    public password: string;
    constructor(private ngRedux: NgRedux<IAppState>) {

    }

    login() {
        this.ngRedux.dispatch(Actions.UserLogin(this.userName, this.password));
        this.userName = this.password = '';
    }

}


@Component({
    selector: 'app-login',
    template: `
    <div class='loginWrapper'>
        <div *ngIf='currentState==0'>Pending...</div>
        <div *ngIf='currentState==2'>
            <button md-button type='submit' (click)='logout()'> Log out </button>
        </div>
    </div>
  `,
    styles: [`
        .loginWrapper {
            position: fixed;
            top: 15px;
            right: 15px;
        }

  `],
  entryComponents: [
      LoginDialogComponent
  ]
})
export class LoginComponent implements OnInit {

    LoginState: Observable<Authentication.LoginState>;
    currentState: Authentication.LoginState;

    constructor(private ngRedux: NgRedux<IAppState>, public dialog: MdDialog) {
    }

    ngOnInit() {
        this.LoginState = this.ngRedux.select(state => state.collection.user.loginState);
        this.LoginState.subscribe(state => {
            this.currentState = state;
            if (state === Authentication.LoginState.Unauthenticated) {
                this.dialog.open(LoginDialogComponent);
            }
        });
    }

    logout() {
        this.ngRedux.dispatch(Actions.UserLogout());
    }
}
