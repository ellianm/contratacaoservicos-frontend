import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {

  @Input() pathImg : string;
  @Input() pathSearch: string;
  @Input() observationImg : string;
  @Input() title : string;
  @Input() clickEvent : Event;
  
  constructor() { }

  ngOnInit(): void {

  }

}
