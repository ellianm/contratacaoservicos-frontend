import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-redes-sociais-item',
  templateUrl: './redes-sociais-item.component.html',
  styleUrls: ['./redes-sociais-item.component.css']
})
export class RedesSociaisItemComponent implements OnInit {

  constructor() { }

  @Input() imagem : String;
  @Input() url : String;

  ngOnInit(): void {
  }

}
