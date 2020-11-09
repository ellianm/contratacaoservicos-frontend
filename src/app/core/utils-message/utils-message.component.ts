import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utils-message',
  templateUrl: './utils-message.component.html',
  styleUrls: ['./utils-message.component.css']
})
export class UtilsMessageComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() message: string;
  @Input() type: string;
  ngOnInit(): void {}

}
