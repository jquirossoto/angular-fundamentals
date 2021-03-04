import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  public iconColor?:string;
  @Input() count?: number;
  @Input() set voted (value :boolean ) {
    this.iconColor = value ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.vote.emit({});
  }

}
