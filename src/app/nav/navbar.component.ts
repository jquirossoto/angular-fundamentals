import { Component, OnInit } from '@angular/core';
import { ISession } from '../events/shared';
import { EventService } from '../events/index';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm: string = "";
  foundSessions?: ISession[];

  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }

  searchSessions (searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
