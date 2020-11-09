import { Router } from '@angular/router';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/bufferCount';

@Component({
  selector: 'app-avaliation-stars',
  templateUrl: './avaliation-stars.component.html',
  styleUrls: ['./avaliation-stars.component.css']
})
export class AvaliationStarsComponent implements OnInit, AfterViewInit {
  starList = [1, 2, 3, 4, 5];
  @Input() element;
  @Input() enabled: boolean;
  @Input() origin: string;
  constructor(private router: Router) { }

  ngAfterViewInit(): void {
    this.setAvaliation(this.element.avaliation, true);
  }

  ngOnInit(): void {}

  setAvaliation(value: number, loading: boolean) {
    if (loading || this.enabled) {
      const arrayStars = document.querySelectorAll(`a[name='${this.origin} ${this.element.id}']`);
      for (let index = 0; index < arrayStars.length; index++) {
        if (index < value) {
          arrayStars[index].className = 'fa stars-marked';
        } else {
          arrayStars[index].className = 'fa stars-unmarked';
        }
      }
      this.element.avaliation = value;
    }
  }
}
