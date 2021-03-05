import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule } from '@angular/router';

import  { CreateEventComponent, EventDetailsComponent, EventsListComponent, EventsListResolverService, CreateSessionComponent, EventResolverService} from './events/index';
import { NotFoundComponent } from './errors/not-found.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'events/session/new', component: CreateSessionComponent },
      { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
      { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
      { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolverService} },
      { path: '404', component: NotFoundComponent},
      { path: '', redirectTo: '/events', pathMatch: 'full' },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
