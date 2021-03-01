import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import  { CreateEventComponent, EventDetailsComponent, EventsListComponent, EventRouteActivatorService, EventsListResolverService} from './events/index';
import { NotFoundComponent } from './errors/not-found.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
      { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
      { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
      { path: '404', component: NotFoundComponent},
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
