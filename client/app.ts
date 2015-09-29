/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'client/views/main/main.ng.html'
})
// Component controller
class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'World';
  }
}

bootstrap(MyAppComponent);