import { Component, OnInit } from '@angular/core';
import { IEvent, ISession } from '../events/shared';
import { EventService } from '../events/index';
import { AuthService } from '../user/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = "";
  foundSessions?: ISession[];
  events?: IEvent[];

  constructor(public authService: AuthService, private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
   }

  searchSessions (searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
