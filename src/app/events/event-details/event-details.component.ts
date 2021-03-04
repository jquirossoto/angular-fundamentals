import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event?: IEvent;
  addMode: boolean = false;
  filterBy: string = "all";
  sortBy: string = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach(data => {
        this.event = data['event'];
        this.addMode = false;
        this.filterBy = "all";
        this.sortBy = "votes";
    })
  }

  addSession() {
    this.addMode = true;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event!.sessions!.map(s => s.id))
    session.id = nextId + 1;
    this.event?.sessions?.push(session);
    this.eventService.saveEvent(this.event!).subscribe(() => {
      this.addMode = false;
    });
  }

}
