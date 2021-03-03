import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsListComponent, EventThumbnailComponent, EventDetailsComponent, CreateEventComponent, CreateSessionComponent, SessionListComponent } from './events/index';
import { IToastr, TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/jquery.service';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './errors/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColapsableWellComponent } from './common/colapsable-well.component';
import { DurationPipe } from './common/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

let toastr: IToastr = (window as any)["toastr"];
let jQuery = (window as any)["$"];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    ColapsableWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }, {
    provide: TOASTR_TOKEN,
    useValue: toastr
  }, {
    provide: JQ_TOKEN,
    useValue: jQuery
  }],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  } else {
    return true;
  }
}
