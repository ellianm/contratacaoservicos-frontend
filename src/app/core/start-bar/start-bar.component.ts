import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, interval } from 'rxjs';
import { delay } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { LoadingService } from '../loading/loading-service';
import { IUserToken } from '../interfaces/iUserToken';

@Component({
  selector: 'app-start-bar',
  templateUrl: './start-bar.component.html',
  styleUrls: ['./start-bar.component.scss']
})
export class StartBarComponent implements OnInit,OnDestroy {

  user$: Observable<IUserToken>;
  pesquisa: string;
  badgeValue: number;
  intervalbadge = interval(60000);
  intervalSubscription;
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService) { }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
    this.loadBadge();
    this.intervalSubscription = this.intervalbadge.subscribe(() => this.loadBadge());
    this.listenToLoading();
  }

  loadBadge() {
    if (this.userService.isLogged()) {
      this.userService.getBadgeValue().subscribe(badge => this.badgeValue = badge['countBadge'])
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

}
