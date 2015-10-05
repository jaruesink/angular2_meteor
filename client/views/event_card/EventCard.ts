/// <reference path="../../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'event-card'
})
@View({
  templateUrl: 'client/views/event_card/event_card.ng.html'
})
export class EventCard {
  event_name: string;
  constructor(){
    this.event_name = "Event Name"
  }
}
