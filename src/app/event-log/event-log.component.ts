import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-log',
  templateUrl: './event-log.component.html'
})
export class EventLogComponent {
  @Input() title: string;
  @Input() events: string[];
}
