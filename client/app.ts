/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {EventCard} from 'client/views/event_card/EventCard';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'client/views/main/main.ng.html',
  directives: [EventCard]
})
// Component controller
class Main {
  name: string;
  constructor() {
    //nothing here yet
  }
}

bootstrap(Main);