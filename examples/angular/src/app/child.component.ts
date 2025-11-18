import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { UserbackFeedbackType, UserbackDestinationType } from '@userback/widget';
// eslint-disable-next-line import/no-unresolved
import UserbackService from './userback.service';

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="assets/react.svg" class="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Angular</h1>
      <div class="card">
        <button type="button" (click)="incrementCount()">
          <span>count is: </span>{{ count }}
        </button>
        <hr />
        <button type="button" (click)="open('bug')">Open Bugs</button>
        <button type="button" (click)="open('general', 'screenshot')">Screenshot me!</button>
        <hr />
        <button type="button" (click)="hideLauncher()">Hide</button>
        <button type="button" (click)="showLauncher()">Show</button>
        <hr />
        <button type="button" (click)="destroy()">Destroy</button>
      </div>
    </div>
  `,
})
export default class ExampleComponent {
    count = 0;

    // eslint-disable-next-line no-useless-constructor, no-empty-function, no-unused-vars
    constructor(private userback: UserbackService) {}

    incrementCount() {
        this.count += 1;
    }

    open(type: UserbackFeedbackType, mode?: UserbackDestinationType) {
        this.userback?.open(type, mode);
    }

    hideLauncher() {
        this.userback?.hideLauncher();
    }

    showLauncher() {
        this.userback?.showLauncher();
    }

    destroy() {
        this.userback?.destroy();
    }
}
