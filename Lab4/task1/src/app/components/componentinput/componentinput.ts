import {Component, input} from '@angular/core';

@Component({
  selector: 'app-componentinput',
  imports: [],
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class Componentinput {
  name = input<string>();
}

