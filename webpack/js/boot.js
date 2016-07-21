// webpack/js/boot.js
import {bootstrap} from 'angular2/platform/browser'; // Angular magic to bootstrap the application in a web browser
import {PollingContainerComponent} from './PollingContainerComponent';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(PollingContainerComponent);
});

// Expose boot so it can be required by webpack.
module.exports = boot;