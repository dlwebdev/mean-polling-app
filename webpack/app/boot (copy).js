// webpack/js/boot.js
import {bootstrap} from 'angular2/platform/browser'; // Angular magic to bootstrap the application in a web browser
import { provideRouter, RouterConfig } from 'angular2/router';
import { appRouterProviders } from './routes';
import {PollingContainerComponent} from './PollingContainerComponent';
import {AppComponent} from './App';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent, [
  	appRouterProviders
  ]);
});

// Expose boot so it can be required by webpack.
module.exports = boot;