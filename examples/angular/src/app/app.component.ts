import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import ExampleComponent from './child.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ExampleComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export default class AppComponent {
    title = 'Angular-Example';
}
