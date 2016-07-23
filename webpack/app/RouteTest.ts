// Transpiles with: tsc --module commonjs ./webpack/app/Test.ts
import { Component } from 'angular2/core';

@Component({
	selector: 'app-home',
	template: `
		<div>
			{{ message }}
		</div>
	`
})
export class HomeComponent {
	message = "Home route connected.";
}

@Component({
  selector: 'app-about',
  template: `<h2>About</h2>`
})
export class AboutComponent { }