import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-dynamic-maid-dialog',
  templateUrl: './dynamic-maid-dialog.component.html',
  styleUrls: ['./dynamic-maid-dialog.component.css']
})
export class DynamicMaidDialogComponent implements OnInit {

  @Input() object: any;

  constructor() { }

  ngOnInit(): void {
  }

}
