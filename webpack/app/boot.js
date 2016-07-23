// webpack/js/boot.js
import { bootstrap } from 'angular2/platform/browser'; // Angular magic to bootstrap the application in a web browser
//import { provideRouter, RouterConfig } from 'angular2/router';
//import {PollingContainerComponent} from './PollingContainerComponent';
//import { appRouterProviders } from './app.routes';
//import { AppComponent } from './App';
import { AppComponent } from './heroes/app.component';
//import {TestComponent} from './Test';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent);
});

// Expose boot so it can be required by webpack.
module.exports = boot;