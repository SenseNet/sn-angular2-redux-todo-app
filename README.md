# Todo App example with SN7, Angular2 and Redux

[![Build status](https://img.shields.io/travis/SenseNet/sn-angular2-redux-todo-app.svg?style=flat)](https://travis-ci.org/SenseNet/sn-angular2-redux-todo-app)
[![License](https://img.shields.io/github/license/SenseNet/sn-angular2-redux-todo-app.svg?style=flat)](https://github.com/SenseNet/sn-angular2-redux-todo-app/LICENSE.txt)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat)](http://commitizen.github.io/cz-cli/)

This example is simple todo app built with Angular2+Redux upon Sense/Net ECM which has been prepared to demonstrate how to use the new Sense/Net ECM related libraries [sn-client-js](https://github.com/SenseNet/sn-client-js)
and [sn-redux](https://github.com/SenseNet/sn-redux).

## Quick start

```
$ git clone https://github.com/SenseNet/sn-angular2-redux-todo-app.git
$ cd sn-angular2-redux-todo-app
$ npm install
$ npm run start
```

## Settings

To use this example you'll need a Sense/Net ECM portal. To connect the app with the portal set your site's url as the app's siteUrl

```
import { SetSiteUrl } from 'sn-client-js';

SetSiteUrl('https://mysite.com');
```

Go to your portal's Portal.setting (/Root/System/Settings/Portal.settings) and check the allowed origins. To get the app working you have to add the app's domain as an allowed origin so that the app can send requests to the 
portal and get or set data.

```
{
   AllowedOriginDomains: [ "localhost" ]
}
```

For further information about CORS in Sense/Net ECM check [this](http://wiki.sensenet.com/Cross-origin_resource_sharing) article.

The example app uses one of the built-in TaskList Content in the default Sense/Net ECM install (/workspaces/Project/budapestprojectworkspace/Tasks). If you removed this Content and its children tasks earlier
or want to try with another TaskList change the value of the ```path``` variable of ```SnTodoListComponent``` in ```app.component.ts``` to the chosen list's path.

The example app demonstrates not only how to fetching data but also Content creation and delete. The app doesn't provide authentication because of it's simplicity so you have to make some permission changes
in your Sense/Net ECM portal to let Visitor users adding and removing tasks from the chosen parent list.
If you are not familiar with Sense/Net's permission system check the following wiki articles:
* [Sense/Net ECM Permission System](http://wiki.sensenet.com/Permission_System)
* [How to set permissions on a content in Sense/Net ECM](http://wiki.sensenet.com/How_to_set_permissions_on_a_content)

## Related documents

* [sn-client-js API reference](http://www.sensenet.com/documentation/sn-client-js/index.html)
* [sn-redux API reference](http://www.sensenet.com/documentation/sn-redux/index.html)
* [Redux](http://redux.js.org/docs/introduction/)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
* [Angular](https://angular.io/)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

<!--## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.-->

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
