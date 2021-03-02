import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'colapsable-well',
  templateUrl: './colapsable-well.component.html',
  styleUrls: ['./colapsable-well.component.css']
})
export class ColapsableWellComponent implements OnInit {

  visible: boolean =  true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleContent() {
    this.visible = !this.visible;
  }

}
