import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

//import { Hero } from './heroes/hero';
//import { HeroDetailComponent } from './heroes/hero-detail.component';

//import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'polling-app',
  template: `
    <a [routerLink]="['/']">Home</a>
    <a [routerLink]="['/about']">About</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }