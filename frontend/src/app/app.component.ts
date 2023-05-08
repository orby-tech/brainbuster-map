import { Component } from '@angular/core';

import { generateRandomPrettyName } from '@common/tools/generate-random-pretty-name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor() {
    if (!localStorage.getItem('USER_NAME')) {
      localStorage.setItem(
        'USER_NAME',
        `${generateRandomPrettyName()} ${generateRandomPrettyName()}`
      );
    }
  }
}
