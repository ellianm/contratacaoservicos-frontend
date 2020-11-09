import { filter } from 'rxjs-compat/operator/filter';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) { }
  ngOnInit(): void {

    this.router.events
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(switchMap(route => {
        return route.data;
      }))
      .subscribe(event =>
        this.titleService.setTitle(event.title));
  }
}
