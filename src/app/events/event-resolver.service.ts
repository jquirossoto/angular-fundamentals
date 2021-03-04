import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventService } from './shared';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService  implements Resolve<any> {

  constructor(private eventService: EventService) { }
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params["id"]);
  }
}
