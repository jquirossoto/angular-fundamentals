import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any;

  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass() {
    if(this.event?.time === '8:00 am')
      return ["green", "bold"];
    return [];
  }

  getStarTimeStyle() {
    if(this.event?.time === '8:00 am')
      return {"color": "#003300", "font-weight": "bold"}
    return {};
  }

}
