import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.css']
})
export class TextDialogComponent implements OnInit {

  @Input() title: string;
  @Input() element: any;
  @Input() propertyName: string;
  value: string;
  @Input() editable: boolean;
  constructor() { }

  ngOnInit(): void {
    this.value = this.element[this.propertyName];
  }

  confirm() {
    this.element[this.propertyName] = this.value;
  }

}
