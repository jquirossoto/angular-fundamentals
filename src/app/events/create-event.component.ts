import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './shared';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty:boolean = true;

  event?: IEvent;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void { }

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(){
    this.router.navigate(['/events']);
  }

}
