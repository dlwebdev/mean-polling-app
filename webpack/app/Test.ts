// Transpiles with: tsc --module commonjs ./webpack/app/Test.ts
import {Component} from 'angular2/core';

@Component({
	selector: 'polling-app',
	template: `
		<div>
			{{ message }}
		</div>
	`
})
export class TestComponent {
	message = "TEST IS HERE!";
}