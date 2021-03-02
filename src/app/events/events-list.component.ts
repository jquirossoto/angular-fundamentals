import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/index';
import { EventService } from './shared/event.service';

declare let toastr: any;

@Component({
  templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit{

  events?: IEvent[];

  constructor(private eventService: EventService, private toastrSevice: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbnailClick(eventName: string) {
    this.toastrSevice.success(eventName);
  }

}
