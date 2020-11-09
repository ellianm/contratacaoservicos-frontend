import { Component, OnInit, Input } from '@angular/core';


import { IClient } from 'src/app/core/interfaces/iClient';




@Component({
  selector: 'app-ratejob-detail',
  templateUrl: './ratejob-detail.component.html',
  styleUrls: ['./ratejob-detail.component.css']
})
export class RatejobDetailComponent implements OnInit {
  element: IClient;
  constructor() { }
  ngOnInit(): void { }

  avatar = '';

  callContact() {
    window.open(`tel:${this.element.telefone}`, '_self');
  }

  sendContact() {
    window.open(`mailto:${this.element.email}`, '_self');
  }

  formatPhoneNumber(phone) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
  }

}
